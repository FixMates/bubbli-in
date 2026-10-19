/**
 * Bubbli Invitation Studio 2.0 - Storage & Persistence Engine
 * Supports browser drafts, local records, and compact online invitation links.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BubbliStorage = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const STORAGE_KEY_PREFIX = 'bubbli_inv_';
  const DRAFT_KEY = 'bubbli_studio_active_draft';
  const REGISTRY_KEY = 'bubbli_published_registry';
  const INVITATION_API_BASE = typeof window !== 'undefined' && window.BUBBLI_INVITATION_API_BASE
    ? String(window.BUBBLI_INVITATION_API_BASE).replace(/\/$/, '')
    : '';
  const invitationApiUrl = (path) => `${INVITATION_API_BASE}/api/invitations${path}`;

  /**
   * Lightweight URL-Safe Base64 / LZ compression helper
   */
  function compressData(obj) {
    try {
      const json = JSON.stringify(obj);
      // Standard UTF-8 safe base64 encoding
      const encoded = encodeURIComponent(json).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
          return String.fromCharCode('0x' + p1);
        });
      return btoa(encoded)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    } catch (e) {
      console.error('Compression failed:', e);
      return '';
    }
  }

  function decompressData(base64Str) {
    try {
      if (!base64Str) return null;
      let b64 = base64Str.replace(/-/g, '+').replace(/_/g, '/');
      while (b64.length % 4) b64 += '=';
      const decoded = atob(b64);
      const json = decodeURIComponent(decoded.split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(json);
    } catch (e) {
      console.warn('Decompression failed:', e);
      return null;
    }
  }

  /**
   * Generate clean slug ID
   */
  function generateUniqueId() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const randomBytes = new Uint8Array(10);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      crypto.getRandomValues(randomBytes);
    } else {
      for (let i = 0; i < randomBytes.length; i++) randomBytes[i] = Math.floor(Math.random() * 256);
    }
    // A compact, non-identifying slug keeps every guest link clean and private.
    return Array.from(randomBytes, byte => alphabet[byte % alphabet.length]).join('');
  }

  /**
   * Generate secure edit token
   */
  function generateEditSecret() {
    return 'sec_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  /**
   * Compress image file via HTML Canvas for fast mobile storage and upload
   */
  function compressImage(file, maxDimension = 1000, quality = 0.8) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxDimension) {
              height = Math.round((height * maxDimension) / width);
              width = maxDimension;
            }
          } else {
            if (height > maxDimension) {
              width = Math.round((width * maxDimension) / height);
              height = maxDimension;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(dataUrl);
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  return {
    saveDraft: function (draftData) {
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify({
          data: draftData,
          timestamp: Date.now()
        }));
        return true;
      } catch (e) {
        console.warn('Failed to save draft:', e);
        return false;
      }
    },

    loadDraft: function () {
      try {
        const raw = localStorage.getItem(DRAFT_KEY);
        if (!raw) return null;
        return JSON.parse(raw).data;
      } catch (e) {
        return null;
      }
    },

    clearDraft: function () {
      localStorage.removeItem(DRAFT_KEY);
    },

    publishInvitation: function (templateId, eventData, options = {}) {
      const names = eventData.coupleNames || eventData.celebrantName || eventData.eventName || 'event';
      const eventType = eventData.eventType || 'celebration';
      const id = options.id || generateUniqueId(names, eventType);
      const editSecret = options.editSecret || generateEditSecret();

      const record = {
        id: id,
        templateId: templateId,
        eventData: eventData,
        aspectRatio: options.aspectRatio || '4:5',
        editSecret: editSecret,
        publishedAt: Date.now(),
        updatedAt: Date.now(),
        isPublished: true,
        rsvps: []
      };

      // 1. Save in local registry
      try {
        localStorage.setItem(STORAGE_KEY_PREFIX + id, JSON.stringify(record));

        let registry = [];
        try {
          registry = JSON.parse(localStorage.getItem(REGISTRY_KEY) || '[]');
        } catch (_) {}
        if (!registry.includes(id)) {
          registry.push(id);
          localStorage.setItem(REGISTRY_KEY, JSON.stringify(registry));
        }
      } catch (err) {
        console.warn('LocalStorage save error:', err);
      }

      // The invitation page reads the saved record from the Worker API. Never
      // place the invitation contents in the URL: it exposes private details
      // and makes links look untrustworthy.
      const shareUrl = new URL('invite/', window.location.href);
      shareUrl.searchParams.set('id', id);

      return {
        id: id,
        editSecret: editSecret,
        shareUrl: shareUrl.href,
        record: record
      };
    },

    saveInvitationOnline: async function (record) {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeout = controller ? setTimeout(() => controller.abort(), 12000) : null;
      let response;
      try {
        response = await fetch(invitationApiUrl(''), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: record.id,
            templateId: record.templateId,
            eventData: record.eventData,
            aspectRatio: record.aspectRatio,
            publishedAt: record.publishedAt
          }),
          ...(controller ? { signal: controller.signal } : {})
        });
      } finally {
        if (timeout) clearTimeout(timeout);
      }
      if (!response.ok) throw new Error(`Invitation storage failed (${response.status})`);
      return response.json();
    },

    getInvitationOnline: async function (id) {
      const response = await fetch(invitationApiUrl(`/${encodeURIComponent(id)}`), { cache: 'no-store' });
      if (response.status === 404) return null;
      if (!response.ok) throw new Error(`Invitation lookup failed (${response.status})`);
      return response.json();
    },

    getInvitationById: function (id, compressedData = null) {
      // 1. If compressed data exists in URL param, it takes priority for instant loading anywhere
      if (compressedData) {
        const unpacked = decompressData(compressedData);
        if (unpacked) {
          let editSecret = null;
          try {
            const raw = localStorage.getItem(STORAGE_KEY_PREFIX + (unpacked.id || id));
            if (raw) {
              const localRec = JSON.parse(raw);
              if (localRec && localRec.editSecret) editSecret = localRec.editSecret;
            }
          } catch (_) {}

          return {
            id: unpacked.id || id,
            templateId: unpacked.t,
            eventData: unpacked.d,
            aspectRatio: unpacked.ar || '4:5',
            isPublished: true,
            editSecret: editSecret
          };
        }
      }

      // 2. Check local storage
      try {
        const raw = localStorage.getItem(STORAGE_KEY_PREFIX + id);
        if (raw) {
          return JSON.parse(raw);
        }
      } catch (e) {}

      return null;
    },

    deleteInvitation: function (id, editSecret) {
      try {
        const key = STORAGE_KEY_PREFIX + id;
        const raw = localStorage.getItem(key);
        if (raw) {
          const record = JSON.parse(raw);
          if (record.editSecret && record.editSecret !== editSecret) {
            return { success: false, message: 'Unauthorized: Invalid edit key' };
          }
          localStorage.removeItem(key);

          // Update registry
          let registry = JSON.parse(localStorage.getItem(REGISTRY_KEY) || '[]');
          registry = registry.filter(item => item !== id);
          localStorage.setItem(REGISTRY_KEY, JSON.stringify(registry));
          return { success: true };
        }
        return { success: false, message: 'Invitation not found' };
      } catch (err) {
        return { success: false, message: err.message };
      }
    },

    saveRsvp: function (invitationId, rsvpData) {
      try {
        const key = STORAGE_KEY_PREFIX + invitationId;
        const raw = localStorage.getItem(key);
        let record = raw ? JSON.parse(raw) : { rsvps: [] };
        if (!record.rsvps) record.rsvps = [];
        record.rsvps.push({
          ...rsvpData,
          submittedAt: Date.now()
        });
        localStorage.setItem(key, JSON.stringify(record));
        return true;
      } catch (e) {
        return false;
      }
    },

    compressImage: compressImage,
    compressData: compressData,
    decompressData: decompressData
  };
}));
