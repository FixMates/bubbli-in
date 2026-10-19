/**
 * Bubbli Invitation Studio 3.0 - Structural Template Renderer Engine
 * Multi-Archetype Deterministic Layout Engine.
 * Supports:
 * 1. Temple Arch (South Indian / Traditional)
 * 2. Royal Rajputana (Heritage Palace / Mandala)
 * 3. Mughal Mehrab (Nikah / Emerald Arch)
 * 4. Cinematic Full Cover (Full-Bleed Modern)
 * 5. Split-Screen (Modern Graphic / 50-50 Photo & Details)
 * 6. Playful Balloons (Kids & 1st Birthday)
 * 7. Luxury Editorial (Minimalist High-Fashion)
 * 8. Art Deco Glamour (Noir & Gold Milestones)
 * 9. Home & Pooja Sanctuary (Griha Pravesh / Housewarming)
 * 10. Baby Shower & Cradle (Soft Miracle / Naming)
 * 11. Corporate Keynote & Summit (Tech / Business Launch)
 * 12. Festive Radiance (Diwali / Christmas / Celebrations)
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BubbliRenderer = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderOrnament(name, color, size = 64, accent = null) {
    if (typeof BubbliOrnaments !== 'undefined' && BubbliOrnaments.getOrnament) {
      return BubbliOrnaments.getOrnament(name, { color: color, size: size, accent: accent });
    }
    return '';
  }

  /**
   * Resolve active photo (User uploaded photo > Template sample photo > Default asset)
   */
  function resolvePhoto(data, template) {
    function normalizeAssetUrl(url) {
      if (!url) return '';
      if (typeof window !== 'undefined' && window.location.pathname.includes('/invite/') && url.startsWith('assets/')) {
        return '../' + url;
      }
      return url;
    }

    if (data && data.photos && Object.keys(data.photos).length > 0) {
      const userPhoto = data.photos.couple || data.photos.hero || data.photos.celebrant ||
        data.photos.baby || data.photos.mother || data.photos.primary;
      if (userPhoto && userPhoto.url) {
        return {
          url: normalizeAssetUrl(userPhoto.url),
          focalX: userPhoto.focalX !== undefined ? userPhoto.focalX : 50,
          focalY: userPhoto.focalY !== undefined ? userPhoto.focalY : 50,
          zoom: userPhoto.zoom !== undefined ? userPhoto.zoom : 1,
          isUserUploaded: true
        };
      }
    }

    if (template && template.samplePhoto) {
      return {
        url: normalizeAssetUrl(template.samplePhoto),
        focalX: 50,
        focalY: 50,
        zoom: 1,
        isUserUploaded: false
      };
    }

    return null;
  }

  /**
   * Photo slot rendering with frame shapes
   */
  function renderPhotoSlot(photo, shape = 'portrait', borderColor = '#C5A059', extraClass = '') {
    if (!photo || !photo.url) return '';

    let shapeClass = 'rounded-2xl aspect-[3/4] w-36 sm:w-44';
    let clipStyle = '';

    if (shape === 'arch') {
      shapeClass = 'rounded-t-full rounded-b-2xl aspect-[3/4] w-36 sm:w-48';
    } else if (shape === 'circle') {
      shapeClass = 'rounded-full aspect-square w-36 sm:w-44';
    } else if (shape === 'hex') {
      shapeClass = 'aspect-square w-36 sm:w-44';
      clipStyle = 'clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);';
    } else if (shape === 'wide') {
      shapeClass = 'rounded-2xl aspect-[16/10] w-full max-w-xs';
    }

    return `
      <div class="inv-photo-slot my-1.5 relative inline-block mx-auto ${extraClass}">
        <div class="relative overflow-hidden ${shapeClass} shadow-xl border-2"
             style="border-color: ${borderColor}; ${clipStyle}">
          <img src="${escapeHtml(photo.url)}"
               alt="Celebration Photo"
               class="w-full h-full object-cover transition-transform duration-300"
               style="object-position: ${photo.focalX}% ${photo.focalY}%; transform: scale(${photo.zoom});" />
        </div>
      </div>
    `;
  }

  // =========================================================================
  // ARCHETYPE 1: TEMPLE ARCH (South Indian Traditional & Sacred Celebrations)
  // =========================================================================
  function renderTempleArch(template, data, p, t, photo, isThumb, aspectClass) {
    const topOrnament = renderOrnament('templeArch', p.secondary, 600, p.primary);
    const bottomCorners = `<div class="flex justify-between w-full px-3">${renderOrnament('kolamCorner', p.secondary, 44)}<div class="rotate-90">${renderOrnament('kolamCorner', p.secondary, 44)}</div></div>`;
    const photoHtml = renderPhotoSlot(photo, 'arch', p.secondary || '#C5A059');

    return `
      <div class="inv-card-wrapper relative w-full ${aspectClass} overflow-hidden shadow-2xl flex flex-col justify-between ${isThumb ? 'p-2.5' : 'p-4 sm:p-6'} text-center rounded-2xl select-none"
           style="background: ${p.background}; color: ${p.textPrimary}; border: 1px solid ${p.border || p.secondary};">
        <div class="absolute inset-1.5 sm:inset-2.5 rounded-xl border pointer-events-none" style="border-color: ${p.border || p.secondary}; opacity: 0.45;"></div>

        <!-- Header -->
        <div class="relative z-10 space-y-0.5">
          ${topOrnament ? `<div class="max-w-[240px] sm:max-w-[300px] mx-auto">${topOrnament}</div>` : ''}
          <div class="uppercase tracking-widest ${isThumb ? 'text-[8px]' : 'text-[10px] sm:text-xs'} font-bold px-2 py-0.5 rounded-full inline-block mt-0.5"
               style="font-family: ${t.body}; color: ${p.accent || p.secondary};">
            ${escapeHtml(data.headline)}
          </div>
          ${(!isThumb && data.hostPrefix) ? `<p class="text-[11px] sm:text-xs px-3 leading-tight opacity-85" style="font-family: ${t.body}; color: ${p.textSecondary};">${escapeHtml(data.hostPrefix)}</p>` : ''}
        </div>

        <!-- Center Hero Photo & Names -->
        <div class="relative z-10 flex-1 flex flex-col justify-center items-center py-0.5">
          ${photoHtml}
          <h1 class="font-bold tracking-tight my-1 px-1 leading-tight"
              style="font-family: ${t.heading}; color: ${p.primary}; font-size: ${isThumb ? 'clamp(0.9rem, 3.2vw, 1.15rem)' : 'clamp(1.3rem, 4.8vw, 2.2rem)'};">
            ${escapeHtml(data.names)}
          </h1>
          ${data.secondaryNames ? `<p class="${isThumb ? 'text-[8px]' : 'text-[11px] sm:text-xs'} tracking-wider opacity-85" style="font-family: ${t.body}; color: ${p.textSecondary};">${escapeHtml(data.secondaryNames)}</p>` : ''}
        </div>

        <!-- Bottom Details -->
        <div class="relative z-10 space-y-1.5 mt-auto">
          <div class="inline-flex items-center gap-1.5 ${isThumb ? 'px-2 py-0.5 text-[8px]' : 'px-3 py-1 text-xs'} rounded-full border shadow-sm mx-auto"
               style="background: ${p.card}; border-color: ${p.border || p.secondary};">
            <span class="font-bold" style="color: ${p.primary}; font-family: ${t.body};">📅 ${escapeHtml(data.date)}</span>
            <span class="text-slate-300">|</span>
            <span class="font-medium" style="color: ${p.textSecondary}; font-family: ${t.body};">⏰ ${escapeHtml(data.time)}</span>
          </div>

          <div class="max-w-sm mx-auto px-1">
            <p class="${isThumb ? 'text-[9px] line-clamp-1' : 'text-xs sm:text-sm'} font-bold" style="font-family: ${t.body}; color: ${p.primary};">
              📍 ${escapeHtml(data.venue)}
            </p>
            ${(!isThumb && data.address) ? `<p class="text-[10px] sm:text-xs opacity-80" style="font-family: ${t.body}; color: ${p.textSecondary};">${escapeHtml(data.address)}</p>` : ''}
          </div>

          ${(!isThumb && data.ceremonyDetails) ? `<div class="text-[10px] sm:text-xs font-semibold px-2" style="color: ${p.accent}; font-family: ${t.body};">✨ ${escapeHtml(data.ceremonyDetails)}</div>` : ''}

          ${bottomCorners}

          <div class="text-[8px] sm:text-[9px] tracking-widest uppercase opacity-40 select-none" style="font-family: ${t.body}; color: ${p.textSecondary};">
            bubbli.in
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // ARCHETYPE 2: ROYAL MANDALA & HERITAGE (Royal Rajputana & Opulent Weddings)
  // =========================================================================
  function renderRoyalMandala(template, data, p, t, photo, isThumb, aspectClass) {
    const photoHtml = renderPhotoSlot(photo, 'circle', p.primary || '#E5C378');

    return `
      <div class="inv-card-wrapper relative w-full ${aspectClass} overflow-hidden shadow-2xl flex flex-col justify-between ${isThumb ? 'p-2.5' : 'p-4 sm:p-6'} text-center rounded-2xl select-none"
           style="background: ${p.background}; color: ${p.textPrimary}; border: 2px solid ${p.border || p.secondary};">
        <!-- Royal Arch Frame Overlay -->
        <div class="absolute inset-2 sm:inset-3 rounded-xl border pointer-events-none" style="border-color: ${p.secondary}; opacity: 0.4;"></div>
        <div class="absolute inset-3 sm:inset-4 rounded-lg border pointer-events-none" style="border-color: ${p.primary}; opacity: 0.25;"></div>

        <!-- Top Header -->
        <div class="relative z-10 space-y-0.5">
          <div class="flex items-center justify-center gap-2">
            <span class="w-8 sm:w-14 h-[1px]" style="background: ${p.secondary};"></span>
            <span class="uppercase tracking-widest ${isThumb ? 'text-[7px]' : 'text-[9px] sm:text-[11px]'} font-bold px-2 py-0.5 rounded-full"
                  style="font-family: ${t.heading}; color: ${p.primary};">
              ${escapeHtml(data.headline)}
            </span>
            <span class="w-8 sm:w-14 h-[1px]" style="background: ${p.secondary};"></span>
          </div>
          ${(!isThumb && data.hostPrefix) ? `<p class="text-[10px] sm:text-xs italic max-w-xs mx-auto leading-tight opacity-90" style="font-family: ${t.body}; color: ${p.textSecondary};">${escapeHtml(data.hostPrefix)}</p>` : ''}
        </div>

        <!-- Center Mandala Photo & Couple Names -->
        <div class="relative z-10 flex-1 flex flex-col justify-center items-center py-1">
          <div class="relative flex items-center justify-center">
            <!-- Glow background -->
            <div class="absolute w-44 h-44 rounded-full filter blur-xl opacity-20 pointer-events-none" style="background: ${p.primary};"></div>
            ${photoHtml}
          </div>

          <h1 class="font-bold tracking-wider my-1 leading-tight"
              style="font-family: ${t.heading}; color: ${p.primary}; font-size: ${isThumb ? 'clamp(0.9rem, 3.4vw, 1.2rem)' : 'clamp(1.4rem, 5.2vw, 2.3rem)'}; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">
            ${escapeHtml(data.names)}
          </h1>
          ${data.secondaryNames ? `<p class="${isThumb ? 'text-[8px]' : 'text-[11px] sm:text-xs'} tracking-widest uppercase opacity-90" style="font-family: ${t.body}; color: ${p.textSecondary};">${escapeHtml(data.secondaryNames)}</p>` : ''}
        </div>

        <!-- Bottom Date & Venue -->
        <div class="relative z-10 space-y-1.5 mt-auto">
          <div class="inline-block ${isThumb ? 'px-3 py-0.5 text-[8px]' : 'px-4 py-1 text-xs'} rounded-lg border shadow-lg mx-auto"
               style="background: ${p.card}; border-color: ${p.primary};">
            <span class="font-bold" style="color: ${p.primary}; font-family: ${t.heading};">👑 ${escapeHtml(data.date)} &bull; ${escapeHtml(data.time)}</span>
          </div>

          <p class="${isThumb ? 'text-[9px] line-clamp-1' : 'text-xs sm:text-sm'} font-bold tracking-wide" style="font-family: ${t.body}; color: ${p.primary};">
            📍 ${escapeHtml(data.venue)}
          </p>

          ${(!isThumb && data.address) ? `<p class="text-[10px] opacity-80" style="font-family: ${t.body}; color: ${p.textSecondary};">${escapeHtml(data.address)}</p>` : ''}
          ${(!isThumb && data.rsvp) ? `<p class="text-[9px] uppercase tracking-wider opacity-75" style="color: ${p.textSecondary};">${escapeHtml(data.rsvp)}</p>` : ''}

          <div class="text-[8px] tracking-widest uppercase opacity-40 select-none" style="font-family: ${t.body}; color: ${p.textSecondary};">
            bubbli.in
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // ARCHETYPE 3: CINEMATIC COVER (Full-Bleed Photography & Modern Vignette)
  // =========================================================================
  function renderCinematicCover(template, data, p, t, photo, isThumb, aspectClass) {
    const photoUrl = photo ? photo.url : '';

    return `
      <div class="inv-card-wrapper relative w-full ${aspectClass} overflow-hidden shadow-2xl flex flex-col justify-between ${isThumb ? 'p-3' : 'p-5 sm:p-7'} rounded-2xl select-none"
           style="background: #0B0F19; color: #FFFFFF;">
        <!-- Full-Bleed Background Image -->
        ${photoUrl ? `
          <div class="absolute inset-0 z-0">
            <img src="${escapeHtml(photoUrl)}"
                 alt="Hero Cover"
                 class="w-full h-full object-cover"
                 style="object-position: ${photo.focalX}% ${photo.focalY}%; transform: scale(${photo.zoom});" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30"></div>
          </div>
        ` : `
          <div class="absolute inset-0 bg-gradient-to-tr from-slate-950 via-indigo-950 to-slate-900"></div>
        `}

        <!-- Top Badge -->
        <div class="relative z-10 flex justify-between items-center">
          <span class="text-[9px] sm:text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md bg-black/40 border border-white/20 text-white shadow-md">
            ${escapeHtml(data.headline)}
          </span>
          <span class="text-[9px] sm:text-[11px] font-semibold text-white/80 tracking-wide">
            ${escapeHtml(data.date)}
          </span>
        </div>

        <!-- Center & Bottom Typography -->
        <div class="relative z-10 mt-auto space-y-2 text-left">
          ${(!isThumb && data.hostPrefix) ? `<p class="text-[11px] text-white/80 tracking-wide font-light leading-snug">${escapeHtml(data.hostPrefix)}</p>` : ''}

          <h1 class="font-extrabold tracking-tight text-white leading-tight drop-shadow-lg"
              style="font-family: ${t.heading}; font-size: ${isThumb ? 'clamp(1.1rem, 4.2vw, 1.4rem)' : 'clamp(1.6rem, 6.2vw, 2.6rem)'};">
            ${escapeHtml(data.names)}
          </h1>

          ${data.secondaryNames ? `<p class="${isThumb ? 'text-[9px]' : 'text-xs'} text-cyan-300 font-medium tracking-wide">${escapeHtml(data.secondaryNames)}</p>` : ''}

          <!-- Glassmorphism Details Box -->
          <div class="p-2.5 sm:p-3 rounded-xl backdrop-blur-md bg-black/60 border border-white/15 space-y-1 text-xs">
            <div class="flex items-center gap-2 text-white font-semibold">
              <span>⏰ ${escapeHtml(data.time)}</span>
              <span class="text-white/40">&bull;</span>
              <span class="truncate">📍 ${escapeHtml(data.venue)}</span>
            </div>
            ${(!isThumb && data.ceremonyDetails) ? `<div class="text-[11px] text-amber-300">✨ ${escapeHtml(data.ceremonyDetails)}</div>` : ''}
          </div>

          <div class="flex justify-between items-center pt-1 text-[8px] text-white/50 tracking-widest uppercase">
            <span>${escapeHtml(data.rsvp || 'Kindly RSVP')}</span>
            <span>bubbli.in</span>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // ARCHETYPE 4: SPLIT-SCREEN (Graphic 50-50 Photo & Contrast Panel)
  // =========================================================================
  function renderSplitScreen(template, data, p, t, photo, isThumb, aspectClass) {
    const photoUrl = photo ? photo.url : '';

    return `
      <div class="inv-card-wrapper relative w-full ${aspectClass} overflow-hidden shadow-2xl flex flex-col rounded-2xl select-none"
           style="background: ${p.background}; color: ${p.textPrimary};">
        <!-- Top Half: Photo with Curved Bottom -->
        <div class="relative w-full h-[52%] overflow-hidden bg-slate-800">
          ${photoUrl ? `
            <img src="${escapeHtml(photoUrl)}"
                 alt="Celebration Header"
                 class="w-full h-full object-cover"
                 style="object-position: ${photo.focalX}% ${photo.focalY}%; transform: scale(${photo.zoom});" />
          ` : `
            <div class="w-full h-full flex items-center justify-center text-slate-400">Photo Slot</div>
          `}
          <!-- Overlay badge -->
          <div class="absolute top-2.5 left-2.5">
            <span class="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md text-white"
                  style="background: ${p.primary};">
              ${escapeHtml(data.headline)}
            </span>
          </div>
        </div>

        <!-- Bottom Half: Structured Event Card -->
        <div class="flex-1 flex flex-col justify-between ${isThumb ? 'p-2.5' : 'p-3.5 sm:p-5'} text-center space-y-1">
          <div class="space-y-0.5">
            <h1 class="font-bold tracking-tight leading-tight"
                style="font-family: ${t.heading}; color: ${p.primary}; font-size: ${isThumb ? 'clamp(0.95rem, 3.4vw, 1.2rem)' : 'clamp(1.3rem, 4.8vw, 2rem)'};">
              ${escapeHtml(data.names)}
            </h1>
            ${data.secondaryNames ? `<p class="${isThumb ? 'text-[8px]' : 'text-xs'} opacity-80" style="color: ${p.textSecondary}; font-family: ${t.body};">${escapeHtml(data.secondaryNames)}</p>` : ''}
          </div>

          <!-- Time & Venue Capsule -->
          <div class="space-y-1 my-auto">
            <div class="inline-flex items-center gap-1.5 ${isThumb ? 'px-2 py-0.5 text-[8px]' : 'px-3 py-1 text-xs'} rounded-full border mx-auto font-medium"
                 style="border-color: ${p.border || p.secondary}; background: ${p.card}; color: ${p.primary};">
              <span>📅 ${escapeHtml(data.date)}</span>
              <span>&bull;</span>
              <span>⏰ ${escapeHtml(data.time)}</span>
            </div>
            <p class="${isThumb ? 'text-[9px] line-clamp-1' : 'text-xs sm:text-sm'} font-bold" style="color: ${p.primary}; font-family: ${t.body};">
              📍 ${escapeHtml(data.venue)}
            </p>
          </div>

          <div class="flex justify-between items-center text-[8px] opacity-50 tracking-widest uppercase pt-1" style="color: ${p.textSecondary};">
            <span>${escapeHtml(data.rsvp || 'Joyfully Invited')}</span>
            <span>bubbli.in</span>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // ARCHETYPE 5: PLAYFUL BALLOONS & CONFETTI (Kids & 1st Birthday)
  // =========================================================================
  function renderPlayfulBalloons(template, data, p, t, photo, isThumb, aspectClass) {
    const photoHtml = renderPhotoSlot(photo, 'circle', p.secondary || '#F59E0B', 'scale-105');

    return `
      <div class="inv-card-wrapper relative w-full ${aspectClass} overflow-hidden shadow-2xl flex flex-col justify-between ${isThumb ? 'p-2.5' : 'p-4 sm:p-6'} text-center rounded-2xl select-none"
           style="background: ${p.background}; color: ${p.textPrimary}; border: 3px solid ${p.border || p.secondary};">
        <!-- Playful Confetti Sprinkles Overlay -->
        <div class="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#F59E0B_2px,transparent_2px)] [background-size:24px_24px]"></div>

        <!-- Header -->
        <div class="relative z-10 space-y-1">
          <div class="inline-block uppercase tracking-wider ${isThumb ? 'text-[8px] px-2 py-0.5' : 'text-[10px] sm:text-xs px-3 py-1'} font-black rounded-full shadow-sm text-white"
               style="background: ${p.primary}; font-family: ${t.body};">
            🎈 ${escapeHtml(data.headline || 'Birthday Celebration')} 🎈
          </div>
        </div>

        <!-- Center Baby / Celebrant Photo & Bold Name -->
        <div class="relative z-10 flex-1 flex flex-col justify-center items-center py-1">
          ${photoHtml}

          <h1 class="font-black tracking-tight my-1 leading-tight"
              style="font-family: ${t.heading}; color: ${p.primary}; font-size: ${isThumb ? 'clamp(1rem, 3.8vw, 1.3rem)' : 'clamp(1.5rem, 5.5vw, 2.5rem)'};">
            ${escapeHtml(data.names)}
          </h1>

          ${data.secondaryNames ? `
            <div class="inline-block font-bold ${isThumb ? 'text-[9px] px-2' : 'text-xs sm:text-sm px-3 py-0.5'} rounded-full text-white shadow-sm"
                 style="background: ${p.secondary}; font-family: ${t.body};">
              🎉 ${escapeHtml(data.secondaryNames)} 🎉
            </div>
          ` : ''}

          ${(!isThumb && data.message) ? `<p class="text-xs italic px-3 mt-1 opacity-90" style="color: ${p.textSecondary};">&ldquo;${escapeHtml(data.message)}&rdquo;</p>` : ''}
        </div>

        <!-- Bottom Details (Party Time, Cake & Venue) -->
        <div class="relative z-10 space-y-1.5 mt-auto">
          <div class="inline-block ${isThumb ? 'px-2.5 py-0.5 text-[8px]' : 'px-3.5 py-1 text-xs sm:text-sm'} rounded-xl font-bold border shadow-md mx-auto"
               style="background: ${p.card}; border-color: ${p.secondary}; color: ${p.primary};">
            🎂 ${escapeHtml(data.date)} &bull; ⏰ ${escapeHtml(data.time)}
          </div>

          <div class="px-2">
            <p class="${isThumb ? 'text-[9px] line-clamp-1' : 'text-xs sm:text-sm'} font-black" style="color: ${p.primary}; font-family: ${t.body};">
              🎪 Party Venue: ${escapeHtml(data.venue)}
            </p>
            ${(!isThumb && data.address) ? `<p class="text-[10px] opacity-80" style="color: ${p.textSecondary};">${escapeHtml(data.address)}</p>` : ''}
          </div>

          <div class="text-[8px] font-bold tracking-widest uppercase opacity-40 select-none" style="color: ${p.textSecondary};">
            bubbli.in
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // ARCHETYPE 6: HOME SANCTUARY & KALASH (Housewarming / Griha Pravesh)
  // =========================================================================
  function renderHomeSanctuary(template, data, p, t, photo, isThumb, aspectClass) {
    const photoHtml = renderPhotoSlot(photo, 'arch', p.secondary || '#D97706');

    return `
      <div class="inv-card-wrapper relative w-full ${aspectClass} overflow-hidden shadow-2xl flex flex-col justify-between ${isThumb ? 'p-2.5' : 'p-4 sm:p-6'} text-center rounded-2xl select-none"
           style="background: ${p.background}; color: ${p.textPrimary}; border: 2px solid ${p.border || p.secondary};">
        <!-- Marigold Garland Header Border -->
        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600"></div>

        <!-- Header -->
        <div class="relative z-10 pt-1 space-y-0.5">
          <div class="flex items-center justify-center gap-1.5">
            <span class="text-amber-500 text-sm">🪔</span>
            <span class="uppercase tracking-widest ${isThumb ? 'text-[8px]' : 'text-[10px] sm:text-xs'} font-bold px-2 py-0.5 rounded-full"
                  style="font-family: ${t.heading}; color: ${p.primary};">
              ${escapeHtml(data.headline || 'Griha Pravesh Invitation')}
            </span>
            <span class="text-amber-500 text-sm">🪔</span>
          </div>
          ${(!isThumb && data.hostPrefix) ? `<p class="text-[11px] leading-tight px-3 opacity-90" style="color: ${p.textSecondary};">${escapeHtml(data.hostPrefix)}</p>` : ''}
        </div>

        <!-- Center Home / Kalash Photo & Host Names -->
        <div class="relative z-10 flex-1 flex flex-col justify-center items-center py-1">
          ${photoHtml}

          <h1 class="font-bold tracking-tight my-1 leading-tight"
              style="font-family: ${t.heading}; color: ${p.primary}; font-size: ${isThumb ? 'clamp(0.95rem, 3.4vw, 1.25rem)' : 'clamp(1.3rem, 5vw, 2.2rem)'};">
            ${escapeHtml(data.names)}
          </h1>

          ${data.secondaryNames ? `
            <p class="${isThumb ? 'text-[8px]' : 'text-xs sm:text-sm'} font-semibold tracking-wide"
               style="color: ${p.secondary}; font-family: ${t.body};">
              🏡 ${escapeHtml(data.secondaryNames)}
            </p>
          ` : ''}
        </div>

        <!-- Bottom Pooja Schedule & Address -->
        <div class="relative z-10 space-y-1 mt-auto">
          <div class="inline-block ${isThumb ? 'px-2.5 py-0.5 text-[8px]' : 'px-3.5 py-1 text-xs'} rounded-xl font-bold border shadow-sm mx-auto"
               style="background: ${p.card}; border-color: ${p.secondary}; color: ${p.primary};">
            📅 ${escapeHtml(data.date)} &bull; ⏰ ${escapeHtml(data.time)}
          </div>

          <div class="px-2">
            <p class="${isThumb ? 'text-[9px] line-clamp-1' : 'text-xs sm:text-sm'} font-bold" style="color: ${p.primary};">
              📍 ${escapeHtml(data.venue)}
            </p>
            ${(!isThumb && data.address) ? `<p class="text-[10px] opacity-80" style="color: ${p.textSecondary};">${escapeHtml(data.address)}</p>` : ''}
          </div>

          ${(!isThumb && data.ceremonyDetails) ? `<div class="text-[10px] font-semibold text-amber-700">✨ ${escapeHtml(data.ceremonyDetails)}</div>` : ''}

          <div class="text-[8px] tracking-widest uppercase opacity-40 select-none pt-0.5" style="color: ${p.textSecondary};">
            bubbli.in
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // ARCHETYPE 7: BABY MIRACLE & CRADLE (Baby Shower & Naming Ceremony)
  // =========================================================================
  function renderBabyMiracle(template, data, p, t, photo, isThumb, aspectClass) {
    const photoHtml = renderPhotoSlot(photo, 'arch', p.secondary || '#F472B6');

    return `
      <div class="inv-card-wrapper relative w-full ${aspectClass} overflow-hidden shadow-2xl flex flex-col justify-between ${isThumb ? 'p-2.5' : 'p-4 sm:p-6'} text-center rounded-2xl select-none"
           style="background: ${p.background}; color: ${p.textPrimary}; border: 2px dashed ${p.border || p.secondary};">
        <!-- Floating Stars & Clouds Decoration -->
        <div class="relative z-10 space-y-0.5">
          <span class="text-xs">⭐ ☁️ ⭐</span>
          <div class="uppercase tracking-widest ${isThumb ? 'text-[8px]' : 'text-[10px] sm:text-xs'} font-bold px-3 py-0.5 rounded-full inline-block"
               style="font-family: ${t.heading}; color: ${p.primary};">
            ${escapeHtml(data.headline || 'A Little Miracle Is On The Way')}
          </div>
        </div>

        <!-- Center Maternity / Baby Photo & Parents -->
        <div class="relative z-10 flex-1 flex flex-col justify-center items-center py-1">
          ${photoHtml}

          <h1 class="font-bold tracking-tight my-1 leading-tight"
              style="font-family: ${t.heading}; color: ${p.primary}; font-size: ${isThumb ? 'clamp(0.95rem, 3.4vw, 1.25rem)' : 'clamp(1.3rem, 5vw, 2.2rem)'};">
            ${escapeHtml(data.names)}
          </h1>

          ${data.secondaryNames ? `<p class="${isThumb ? 'text-[8px]' : 'text-xs'} font-medium opacity-85" style="color: ${p.textSecondary};">${escapeHtml(data.secondaryNames)}</p>` : ''}
        </div>

        <!-- Bottom Celebration Details -->
        <div class="relative z-10 space-y-1 mt-auto">
          <div class="inline-block ${isThumb ? 'px-2.5 py-0.5 text-[8px]' : 'px-3.5 py-1 text-xs'} rounded-full font-bold border shadow-sm mx-auto"
               style="background: ${p.card}; border-color: ${p.secondary}; color: ${p.primary};">
            📅 ${escapeHtml(data.date)} &bull; ⏰ ${escapeHtml(data.time)}
          </div>

          <p class="${isThumb ? 'text-[9px] line-clamp-1' : 'text-xs sm:text-sm'} font-bold" style="color: ${p.primary};">
            📍 ${escapeHtml(data.venue)}
          </p>

          <div class="text-[8px] tracking-widest uppercase opacity-40 select-none pt-0.5" style="color: ${p.textSecondary};">
            bubbli.in
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // ARCHETYPE 8: CORPORATE SUMMIT & KEYNOTE (Professional Conferences)
  // =========================================================================
  function renderCorporateKeynote(template, data, p, t, photo, isThumb, aspectClass) {
    const photoHtml = renderPhotoSlot(photo, 'hex', p.secondary || '#38BDF8');

    return `
      <div class="inv-card-wrapper relative w-full ${aspectClass} overflow-hidden shadow-2xl flex flex-col justify-between ${isThumb ? 'p-3' : 'p-5 sm:p-6'} text-center rounded-2xl select-none"
           style="background: ${p.background}; color: ${p.textPrimary}; border: 1px solid ${p.border || '#38BDF8'};">
        <!-- Tech Hex Grid Background Overlay -->
        <div class="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <!-- Top Organization & Event Badge -->
        <div class="relative z-10 space-y-1">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] sm:text-[11px] font-bold tracking-widest uppercase border"
               style="background: ${p.card}; border-color: ${p.secondary}; color: ${p.secondary}; font-family: ${t.body};">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>${escapeHtml(data.headline || 'Keynote Summit 2026')}</span>
          </div>
        </div>

        <!-- Center Keynote Stage / Speaker Photo & Title -->
        <div class="relative z-10 flex-1 flex flex-col justify-center items-center py-1">
          ${photoHtml}

          <h1 class="font-extrabold tracking-tight my-1 leading-tight"
              style="font-family: ${t.heading}; color: ${p.primary}; font-size: ${isThumb ? 'clamp(1rem, 3.6vw, 1.3rem)' : 'clamp(1.4rem, 5.2vw, 2.3rem)'};">
            ${escapeHtml(data.names)}
          </h1>

          ${data.secondaryNames ? `<p class="${isThumb ? 'text-[8px]' : 'text-xs sm:text-sm'} tracking-wider text-cyan-300 font-medium">${escapeHtml(data.secondaryNames)}</p>` : ''}
        </div>

        <!-- Bottom Schedule & Venue -->
        <div class="relative z-10 space-y-1.5 mt-auto">
          <div class="inline-block ${isThumb ? 'px-3 py-0.5 text-[8px]' : 'px-4 py-1.5 text-xs'} rounded-xl font-bold border shadow-md mx-auto"
               style="background: ${p.card}; border-color: ${p.secondary}; color: ${p.primary};">
            📅 ${escapeHtml(data.date)} &bull; ⏰ ${escapeHtml(data.time)}
          </div>

          <p class="${isThumb ? 'text-[9px] line-clamp-1' : 'text-xs sm:text-sm'} font-bold tracking-wide" style="color: ${p.primary};">
            📍 ${escapeHtml(data.venue)}
          </p>

          ${(!isThumb && data.address) ? `<p class="text-[10px] opacity-75" style="color: ${p.textSecondary};">${escapeHtml(data.address)}</p>` : ''}

          <div class="flex justify-between items-center text-[8px] opacity-45 tracking-widest uppercase pt-1" style="color: ${p.textSecondary};">
            <span>Corporate Registration</span>
            <span>bubbli.in</span>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // ARCHETYPE 9: ART DECO & GOLDEN MILESTONE (Noir & Gold Glamour)
  // =========================================================================
  function renderArtDecoGlam(template, data, p, t, photo, isThumb, aspectClass) {
    const photoHtml = renderPhotoSlot(photo, 'circle', p.primary || '#FEF08A');

    return `
      <div class="inv-card-wrapper relative w-full ${aspectClass} overflow-hidden shadow-2xl flex flex-col justify-between ${isThumb ? 'p-2.5' : 'p-4 sm:p-6'} text-center rounded-2xl select-none"
           style="background: ${p.background}; color: ${p.textPrimary}; border: 2px solid ${p.border || p.secondary};">
        <!-- Gold Geometric Corner Lines -->
        <div class="absolute inset-2 sm:inset-3 border pointer-events-none" style="border-color: ${p.secondary}; opacity: 0.5;"></div>

        <!-- Top Header -->
        <div class="relative z-10 space-y-0.5">
          <div class="uppercase tracking-widest ${isThumb ? 'text-[8px]' : 'text-[10px] sm:text-xs'} font-bold px-3 py-0.5 inline-block"
               style="font-family: ${t.heading}; color: ${p.primary};">
            ✦ ${escapeHtml(data.headline)} ✦
          </div>
        </div>

        <!-- Center Photo & Names -->
        <div class="relative z-10 flex-1 flex flex-col justify-center items-center py-1">
          ${photoHtml}

          <h1 class="font-bold tracking-widest my-1 leading-tight uppercase"
              style="font-family: ${t.heading}; color: ${p.primary}; font-size: ${isThumb ? 'clamp(0.95rem, 3.4vw, 1.25rem)' : 'clamp(1.4rem, 5.2vw, 2.3rem)'};">
            ${escapeHtml(data.names)}
          </h1>

          ${data.secondaryNames ? `<p class="${isThumb ? 'text-[8px]' : 'text-xs'} tracking-widest uppercase opacity-85" style="color: ${p.textSecondary}; font-family: ${t.body};">${escapeHtml(data.secondaryNames)}</p>` : ''}
        </div>

        <!-- Bottom Details -->
        <div class="relative z-10 space-y-1.5 mt-auto">
          <div class="inline-block ${isThumb ? 'px-3 py-0.5 text-[8px]' : 'px-4 py-1 text-xs'} border mx-auto font-bold tracking-wider uppercase"
               style="background: ${p.card}; border-color: ${p.primary}; color: ${p.primary};">
            ${escapeHtml(data.date)} &bull; ${escapeHtml(data.time)}
          </div>

          <p class="${isThumb ? 'text-[9px] line-clamp-1' : 'text-xs sm:text-sm'} font-bold tracking-wider uppercase" style="color: ${p.primary};">
            📍 ${escapeHtml(data.venue)}
          </p>

          <div class="text-[8px] tracking-widest uppercase opacity-40 select-none" style="color: ${p.textSecondary};">
            bubbli.in
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // MAIN DISPATCHER FUNCTION
  // =========================================================================
  function render(template, rawData = {}, options = {}) {
    if (!template) {
      template = {
        title: 'Celebration Invitation',
        layout: 'temple-arch',
        palette: {
          background: '#FFF9F0', card: '#FFFFFF', primary: '#800020', secondary: '#C5A059',
          accent: '#D97706', textPrimary: '#4A0E17', textSecondary: '#78350F', border: '#E5C378'
        },
        typography: {
          heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif"
        }
      };
    }

    const p = template.palette || {
      background: '#FFF9F0', card: '#FFFFFF', primary: '#800020', secondary: '#C5A059',
      accent: '#D97706', textPrimary: '#4A0E17', textSecondary: '#78350F', border: '#E5C378'
    };

    const t = template.typography || {
      heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif"
    };

    const aspectRatio = options.aspectRatio || '4:5';
    let aspectClass = 'aspect-[4/5]';
    if (aspectRatio === '9:16') aspectClass = 'aspect-[9/16]';
    if (aspectRatio === '1:1') aspectClass = 'aspect-square';

    const isThumb = !!options.isThumbnail;

    // Normalize Data
    const data = {
      headline: rawData.headline || rawData.eventTitle || template.title || 'Celebration Invitation',
      hostPrefix: rawData.hostPrefix || rawData.prefix || '',
      names: rawData.coupleNames || rawData.celebrantName || rawData.celebrantNames || rawData.hostNames || rawData.babyName || rawData.eventName || 'Honored Guests',
      secondaryNames: rawData.parentsNames || rawData.founderNames || rawData.hosts || rawData.ageSubtitle || '',
      date: rawData.dateFormatted || rawData.date || 'Sunday, 15th December 2026',
      time: rawData.time || '10:30 AM onwards',
      venue: rawData.venue || 'Grand Celebration Palace',
      address: rawData.address || rawData.city || '',
      ceremonyDetails: rawData.ceremonyDetails || rawData.poojaTimings || rawData.agenda || '',
      message: rawData.message || '',
      rsvp: rawData.rsvp || ''
    };

    // Resolve photo
    const photo = resolvePhoto(rawData, template);

    // Archetype selection based on template.layout
    const layout = (template.layout || 'temple-arch').toLowerCase();

    if (layout === 'full-bleed-hero' || layout === 'cinematic-cover') {
      return renderCinematicCover(template, data, p, t, photo, isThumb, aspectClass);
    }
    if (layout === 'split-screen') {
      return renderSplitScreen(template, data, p, t, photo, isThumb, aspectClass);
    }
    if (layout === 'playful-balloons' || layout === 'safari-playful' || layout === 'festive-banner') {
      return renderPlayfulBalloons(template, data, p, t, photo, isThumb, aspectClass);
    }
    if (layout === 'illustrated-home' || layout === 'pooja-kalash') {
      return renderHomeSanctuary(template, data, p, t, photo, isThumb, aspectClass);
    }
    if (layout === 'sweet-miracle' || layout === 'baby-cradle') {
      return renderBabyMiracle(template, data, p, t, photo, isThumb, aspectClass);
    }
    if (layout === 'corporate-keynote' || layout === 'corporate-minimal') {
      return renderCorporateKeynote(template, data, p, t, photo, isThumb, aspectClass);
    }
    if (layout === 'royal-mandala') {
      return renderRoyalMandala(template, data, p, t, photo, isThumb, aspectClass);
    }
    if (layout === 'art-deco-frame' || layout === 'art-deco' || layout === 'art-deco-glam') {
      return renderArtDecoGlam(template, data, p, t, photo, isThumb, aspectClass);
    }

    // Default to refined Temple Arch layout
    return renderTempleArch(template, data, p, t, photo, isThumb, aspectClass);
  }

  async function renderToCanvas(containerElement, scale = 2) {
    if (typeof html2canvas !== 'undefined') {
      return html2canvas(containerElement, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false
      });
    }
    throw new Error('Canvas export requires html2canvas library');
  }

  return {
    render: render,
    renderOrnament: renderOrnament,
    renderToCanvas: renderToCanvas
  };
}));
