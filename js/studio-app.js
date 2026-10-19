/**
 * Bubbli Invitation Studio 2.0 - Studio Application Controller
 * Mobile-First Guided 5-Step Workflow:
 * Step 1: Occasion -> Step 2: Template -> Step 3: Personalise -> Step 4: Preview -> Step 5: Share
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // State
  let currentStep = 1;
  let currentCategoryId = 'wedding';
  let currentEventId = 'wedding';
  let currentTemplateId = 'wedding-south-indian-temple';
  let currentAspectRatio = '4:5';
  let isFormCustomized = false;
  let activePublishResult = null;
  let activePublishSignature = '';

  // Active invitation data model initialized with occasion-specific defaults
  let activeData = BubbliWording.getSampleDataForEvent('wedding');

  // Cached DOM elements
  const stepSections = {
    1: document.getElementById('step-section-1'),
    2: document.getElementById('step-section-2'),
    3: document.getElementById('step-section-3'),
    4: document.getElementById('step-section-4'),
    5: document.getElementById('step-section-5')
  };

  const stepPills = {
    1: document.getElementById('step-pill-1'),
    2: document.getElementById('step-pill-2'),
    3: document.getElementById('step-pill-3'),
    4: document.getElementById('step-pill-4'),
    5: document.getElementById('step-pill-5')
  };

  // Header quick buttons
  const headerBtnTemplates = document.getElementById('header-btn-templates');
  const headerBtnPreview = document.getElementById('header-btn-preview');

  // Step 1 Elements
  const occasionSearchInput = document.getElementById('occasion-search-input');
  const categoryChipsContainer = document.getElementById('category-chips-container');
  const subeventCardsContainer = document.getElementById('subevent-cards-container');
  const currentCategoryNameEl = document.getElementById('current-category-name');

  // Step 2 Elements
  const templateGrid = document.getElementById('template-grid');
  const templateCountBadge = document.getElementById('template-count-badge');
  const templateBrowserHeading = document.getElementById('template-browser-heading');
  const filterStyleSelect = document.getElementById('filter-style-select');
  const filterPhotoToggle = document.getElementById('filter-photo-toggle');
  const btnBackToStep1 = document.getElementById('btn-back-to-step-1');

  // Step 3 Elements
  const editorTemplateTitle = document.getElementById('editor-current-template-title');
  const wordingPresetSelect = document.getElementById('form-wording-preset');
  const inputHeadline = document.getElementById('form-headline');
  const inputNames = document.getElementById('form-names');
  const inputSecondaryNames = document.getElementById('form-secondary-names');
  const inputHostPrefix = document.getElementById('form-host-prefix');
  const inputDate = document.getElementById('form-date');
  const inputTime = document.getElementById('form-time');
  const inputVenue = document.getElementById('form-venue');
  const inputAddress = document.getElementById('form-address');
  const inputCeremony = document.getElementById('form-ceremony-details');
  const inputMessage = document.getElementById('form-message');
  const inputRsvp = document.getElementById('form-rsvp');

  // Dynamic input labels
  const labelHeadline = document.getElementById('label-form-headline');
  const labelNames = document.getElementById('label-form-names');
  const labelSecondaryNames = document.getElementById('label-form-secondary-names');
  const labelHostPrefix = document.getElementById('label-form-host-prefix');
  const labelCeremony = document.getElementById('label-form-ceremony');

  // Photo controls
  const photoFileInput = document.getElementById('photo-file-input');
  const btnTriggerUpload = document.getElementById('btn-trigger-upload');
  const photoControlsPanel = document.getElementById('photo-controls-panel');
  const focalXSlider = document.getElementById('focal-x-slider');
  const focalYSlider = document.getElementById('focal-y-slider');
  const zoomSlider = document.getElementById('zoom-slider');
  const focalXVal = document.getElementById('focal-x-val');
  const focalYVal = document.getElementById('focal-y-val');
  const zoomVal = document.getElementById('zoom-val');
  const btnRemovePhoto = document.getElementById('btn-remove-photo');

  // Design palettes & typography
  const curatedPalettesContainer = document.getElementById('curated-palettes-container');
  const fontPresetsContainer = document.getElementById('font-presets-container');
  const desktopPreviewTarget = document.getElementById('desktop-editor-preview-target');

  // Step 4 Elements
  const fullPreviewTarget = document.getElementById('full-preview-render-target');
  const siblingTemplatesRow = document.getElementById('sibling-templates-row');
  const aspectRatioButtons = document.querySelectorAll('.aspect-btn');

  // Step 5 Elements
  const publishLinkInput = document.getElementById('publish-link-input');
  const btnCopyLink = document.getElementById('btn-copy-link');
  const btnWhatsappShare = document.getElementById('btn-whatsapp-share');
  const btnViewPublicPage = document.getElementById('btn-view-public-page');
  const btnPublishDownloadCard = document.getElementById('btn-publish-download-card');

  // Toast
  const studioToast = document.getElementById('studio-toast');
  function showToast(msg) {
    if (!studioToast) return;
    studioToast.textContent = msg;
    studioToast.classList.add('show');
    setTimeout(() => {
      studioToast.classList.remove('show');
    }, 2800);
  }

  // ----------------------------------------------------
  // STEP ROUTER & NAVIGATION
  // ----------------------------------------------------
  function goToStep(step) {
    currentStep = step;

    // Toggle step sections
    Object.keys(stepSections).forEach(s => {
      const el = stepSections[s];
      if (el) {
        el.classList.toggle('hidden', parseInt(s, 10) !== step);
      }
    });

    // Update step progress indicator
    Object.keys(stepPills).forEach(s => {
      const pill = stepPills[s];
      const sNum = parseInt(s, 10);
      if (pill) {
        pill.classList.remove('active', 'completed');
        if (sNum === step) {
          pill.classList.add('active');
        } else if (sNum < step) {
          pill.classList.add('completed');
        }
      }
    });

    // Step-specific initializations
    if (step === 1) {
      renderCategories();
      renderSubEvents();
    } else if (step === 2) {
      renderTemplateGrid();
    } else if (step === 3) {
      renderEditorFields();
      renderCuratedPalettes();
      renderFontPresets();
      updateDesktopPreview();
    } else if (step === 4) {
      renderFullPreview();
      renderSiblingTemplates();
    } else if (step === 5) {
      renderPublishScreen();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Bind step pill clicks for easy jumping
  Object.keys(stepPills).forEach(s => {
    const pill = stepPills[s];
    const sNum = parseInt(s, 10);
    pill.addEventListener('click', () => {
      // Allow jumping to any step up to current or back
      goToStep(sNum);
    });
  });

  headerBtnTemplates.addEventListener('click', () => goToStep(2));
  headerBtnPreview.addEventListener('click', () => goToStep(4));

  // Navigation button handlers
  btnBackToStep1?.addEventListener('click', () => goToStep(1));
  document.getElementById('btn-back-to-step-2')?.addEventListener('click', () => goToStep(2));
  document.getElementById('btn-bottom-back-to-step-2')?.addEventListener('click', () => goToStep(2));
  document.getElementById('btn-step3-next-preview')?.addEventListener('click', () => goToStep(4));
  document.getElementById('btn-bottom-to-step-4')?.addEventListener('click', () => goToStep(4));
  document.getElementById('btn-preview-back-to-step-3')?.addEventListener('click', () => goToStep(3));
  document.getElementById('btn-preview-to-step-5')?.addEventListener('click', () => goToStep(5));
  document.getElementById('btn-edit-again')?.addEventListener('click', () => goToStep(3));

  // ----------------------------------------------------
  // STEP 1: OCCASION DISCOVERY
  // ----------------------------------------------------
  function renderCategories() {
    if (!categoryChipsContainer) return;
    categoryChipsContainer.innerHTML = '';

    const categories = BubbliTaxonomy.CATEGORIES;
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `category-chip-btn ${cat.id === currentCategoryId ? 'active' : ''}`;
      btn.innerHTML = `<span>${cat.icon}</span><span>${cat.shortName}</span>`;
      btn.addEventListener('click', () => {
        currentCategoryId = cat.id;
        const eventsInCat = BubbliTaxonomy.getEventsByCategory(cat.id);
        if (eventsInCat.length) {
          currentEventId = eventsInCat[0].id;
        }
        renderCategories();
        renderSubEvents();
      });
      categoryChipsContainer.appendChild(btn);
    });

    const activeCat = BubbliTaxonomy.getCategoryById(currentCategoryId);
    if (activeCat && currentCategoryNameEl) {
      currentCategoryNameEl.textContent = activeCat.name;
    }
  }

  function renderSubEvents() {
    if (!subeventCardsContainer) return;
    subeventCardsContainer.innerHTML = '';

    const searchQuery = (occasionSearchInput?.value || '').toLowerCase().trim();
    let events = BubbliTaxonomy.getEventsByCategory(currentCategoryId);

    if (searchQuery) {
      events = BubbliTaxonomy.searchEvents(searchQuery);
    }

    if (!events.length) {
      subeventCardsContainer.innerHTML = `
        <div class="col-span-full py-8 text-center text-slate-400">
          <p class="text-sm">No occasions matched "${searchQuery}".</p>
          <button id="btn-reset-search" class="text-xs text-cyan-400 underline font-semibold mt-2">View All Occasions</button>
        </div>
      `;
      document.getElementById('btn-reset-search')?.addEventListener('click', () => {
        if (occasionSearchInput) occasionSearchInput.value = '';
        renderSubEvents();
      });
      return;
    }

    events.forEach(evt => {
      const card = document.createElement('button');
      card.className = `studio-card p-3.5 rounded-2xl text-left flex items-start space-x-3 transition-all cursor-pointer group hover:border-cyan-400/50 ${
        evt.id === currentEventId ? 'border-cyan-400 bg-cyan-950/20' : ''
      }`;
      card.innerHTML = `
        <div class="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">${evt.icon || '🎉'}</div>
        <div class="space-y-0.5 min-w-0">
          <div class="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">${evt.name}</div>
          <div class="text-[10px] text-slate-400 line-clamp-1">${evt.tagline || 'Curated templates'}</div>
        </div>
      `;
      card.addEventListener('click', () => {
        selectEventAndAdvance(evt);
      });
      subeventCardsContainer.appendChild(card);
    });
  }

  function selectEventAndAdvance(evt) {
    currentEventId = evt.id;
    currentCategoryId = evt.category;

    if (!isFormCustomized) {
      activeData = Object.assign({}, BubbliWording.getSampleDataForEvent(evt.id));
    } else {
      activeData.eventType = evt.id;
      const defaultWording = BubbliWording.getDefaultWording(evt.id);
      if (defaultWording) {
        if (defaultWording.headline) activeData.headline = defaultWording.headline;
        if (defaultWording.prefix) activeData.hostPrefix = defaultWording.prefix;
        if (defaultWording.message) activeData.message = defaultWording.message;
        if (defaultWording.rsvpPrefix) activeData.rsvp = defaultWording.rsvpPrefix;
      }
    }

    // Advance to Step 2
    goToStep(2);
  }

  occasionSearchInput?.addEventListener('input', () => {
    renderSubEvents();
  });

  // ----------------------------------------------------
  // STEP 2: TEMPLATE GRID SELECTION
  // ----------------------------------------------------
  function renderTemplateGrid() {
    if (!templateGrid) return;
    templateGrid.innerHTML = '';

    const activeEvent = BubbliTaxonomy.getEventById(currentEventId);
    if (templateBrowserHeading) {
      templateBrowserHeading.textContent = activeEvent ? `${activeEvent.name} Designs` : 'Choose a Design';
    }

    const styleFilter = filterStyleSelect?.value;
    const hasPhotoOnly = filterPhotoToggle?.checked;

    let templates = BubbliTemplates.getTemplatesForEvent(currentEventId);

    if (styleFilter) {
      templates = templates.filter(t => t.culturalStyles && t.culturalStyles.includes(styleFilter));
    }
    if (hasPhotoOnly) {
      templates = templates.filter(t => t.supportsPhotoUpload);
    }

    if (templateCountBadge) {
      templateCountBadge.textContent = templates.length;
    }

    if (!templates.length) {
      templateGrid.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400 space-y-3">
          <p class="text-base text-slate-300">No templates found for this specific filter.</p>
          <button id="btn-clear-style-filters" class="btn-touch-primary bg-blue-600 text-white text-xs px-4 py-2 rounded-xl">
            Reset Filters
          </button>
        </div>
      `;
      document.getElementById('btn-clear-style-filters')?.addEventListener('click', () => {
        if (filterStyleSelect) filterStyleSelect.value = '';
        if (filterPhotoToggle) filterPhotoToggle.checked = false;
        renderTemplateGrid();
      });
      return;
    }

    templates.forEach(t => {
      const card = document.createElement('div');
      card.className = 'template-browser-card studio-card p-3 rounded-2xl flex flex-col justify-between space-y-3 cursor-pointer group';

      // Clean thumbnail preview using occasion-specific sample details
      const templateOccasion = (t.eventTypes && t.eventTypes[0]) ? t.eventTypes[0] : currentEventId;
      const templateSample = BubbliWording.getSampleDataForEvent(templateOccasion);
      const cardData = isFormCustomized ? activeData : templateSample;

      const thumbHtml = BubbliRenderer.render(t, cardData, { aspectRatio: '4:5', isThumbnail: true });

      card.innerHTML = `
        <div class="template-thumb-box shadow-md group-hover:scale-[1.01] transition-transform">
          ${thumbHtml}
        </div>

        <div class="space-y-1">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">${t.title}</h3>
            ${t.supportsPhotoUpload ? '<span class="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded font-semibold">Photo</span>' : ''}
          </div>
          <p class="text-[10px] text-slate-400 capitalize">${(t.culturalStyles || []).slice(0, 2).join(' • ')}</p>
        </div>

        <button class="btn-touch-primary w-full bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md group-hover:shadow-blue-500/30">
          Personalise This Design &rarr;
        </button>
      `;

      card.addEventListener('click', () => {
        currentTemplateId = t.id;
        if (!isFormCustomized) {
          const tOccasion = (t.eventTypes && t.eventTypes[0]) ? t.eventTypes[0] : currentEventId;
          activeData = Object.assign({}, BubbliWording.getSampleDataForEvent(tOccasion));
        }
        goToStep(3);
        if (typeof BubbliAnalytics !== 'undefined') {
          BubbliAnalytics.track(BubbliAnalytics.EVENTS.TEMPLATE_SELECTED, { templateId: t.id });
        }
      });

      templateGrid.appendChild(card);
    });
  }

  filterStyleSelect?.addEventListener('change', renderTemplateGrid);
  filterPhotoToggle?.addEventListener('change', renderTemplateGrid);

  // ----------------------------------------------------
  // STEP 3: PERSONALISE FORM & EDITING
  // ----------------------------------------------------
  function renderEditorFields() {
    const t = BubbliTemplates.getTemplateById(currentTemplateId) || BubbliTemplates.getAllTemplates()[0];
    if (editorTemplateTitle) {
      editorTemplateTitle.textContent = `Design: ${t.title}`;
    }

    // Dynamic field labels based on event metadata
    const evt = BubbliTaxonomy.getEventById(currentEventId);
    if (evt && evt.inputLabels) {
      if (labelNames && evt.inputLabels.namesLabel) {
        labelNames.textContent = evt.inputLabels.namesLabel;
      }
      if (inputNames && evt.inputLabels.namesPlaceholder) {
        inputNames.placeholder = evt.inputLabels.namesPlaceholder;
      }
      if (labelSecondaryNames && evt.inputLabels.secondaryNamesLabel) {
        labelSecondaryNames.textContent = evt.inputLabels.secondaryNamesLabel;
      }
      if (inputSecondaryNames && evt.inputLabels.secondaryNamesPlaceholder) {
        inputSecondaryNames.placeholder = evt.inputLabels.secondaryNamesPlaceholder;
      }
      if (labelCeremony && evt.inputLabels.ceremonyLabel) {
        labelCeremony.textContent = evt.inputLabels.ceremonyLabel;
      }
    }

    // Populate values from activeData
    inputHeadline.value = activeData.headline || '';
    inputNames.value = activeData.coupleNames || '';
    inputSecondaryNames.value = activeData.parentsNames || '';
    inputHostPrefix.value = activeData.hostPrefix || '';
    inputDate.value = activeData.date || '';
    inputTime.value = activeData.time || '';
    inputVenue.value = activeData.venue || '';
    inputAddress.value = activeData.address || '';
    inputCeremony.value = activeData.ceremonyDetails || '';
    inputMessage.value = activeData.message || '';
    inputRsvp.value = activeData.rsvp || '';

    // Wording presets
    updateWordingPresets();

    // Photo controls state
    if (activeData.photos && activeData.photos.hero) {
      photoControlsPanel?.classList.remove('hidden');
      if (focalXSlider) focalXSlider.value = activeData.photos.hero.focalX || 50;
      if (focalYSlider) focalYSlider.value = activeData.photos.hero.focalY || 50;
      if (zoomSlider) zoomSlider.value = activeData.photos.hero.zoom || 1;
      if (focalXVal) focalXVal.textContent = (activeData.photos.hero.focalX || 50) + '%';
      if (focalYVal) focalYVal.textContent = (activeData.photos.hero.focalY || 50) + '%';
      if (zoomVal) zoomVal.textContent = Number(activeData.photos.hero.zoom || 1).toFixed(2) + 'x';
    } else {
      photoControlsPanel?.classList.add('hidden');
    }
  }

  function syncActiveDataFromInputs() {
    isFormCustomized = true;
    activeData.headline = inputHeadline.value;
    activeData.coupleNames = inputNames.value;
    activeData.parentsNames = inputSecondaryNames.value;
    activeData.hostPrefix = inputHostPrefix.value;
    activeData.date = inputDate.value;
    activeData.time = inputTime.value;
    activeData.venue = inputVenue.value;
    activeData.address = inputAddress.value;
    activeData.ceremonyDetails = inputCeremony.value;
    activeData.message = inputMessage.value;
    activeData.rsvp = inputRsvp.value;

    BubbliStorage.saveDraft({
      templateId: currentTemplateId,
      eventId: currentEventId,
      aspectRatio: currentAspectRatio,
      data: activeData
    });

    updateDesktopPreview();
  }

  // Bind input listeners
  [inputHeadline, inputNames, inputSecondaryNames, inputHostPrefix, inputDate, inputTime, inputVenue, inputAddress, inputCeremony, inputMessage, inputRsvp].forEach(el => {
    el?.addEventListener('input', syncActiveDataFromInputs);
  });

  // Reset to authentic occasion defaults
  document.getElementById('editor-btn-reset')?.addEventListener('click', () => {
    isFormCustomized = false;
    const tOccasion = BubbliTemplates.getTemplateById(currentTemplateId)?.eventTypes?.[0] || currentEventId;
    activeData = Object.assign({}, BubbliWording.getSampleDataForEvent(tOccasion));
    renderEditorFields();
    updateDesktopPreview();
    showToast('Reset to default occasion details');
  });

  function updateWordingPresets() {
    if (!wordingPresetSelect) return;
    wordingPresetSelect.innerHTML = '';
    const presets = BubbliWording.getPresetsForEvent(currentEventId);
    Object.keys(presets).forEach(key => {
      const p = presets[key];
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.name;
      wordingPresetSelect.appendChild(opt);
    });
  }

  wordingPresetSelect?.addEventListener('change', () => {
    const selectedKey = wordingPresetSelect.value;
    const wording = BubbliWording.getDefaultWording(currentEventId, selectedKey);
    if (wording) {
      if (wording.headline) activeData.headline = wording.headline;
      if (wording.prefix) activeData.hostPrefix = wording.prefix;
      if (wording.message) activeData.message = wording.message;
      if (wording.rsvpPrefix) activeData.rsvp = wording.rsvpPrefix;
      renderEditorFields();
      updateDesktopPreview();
      showToast('Wording preset applied!');
    }
  });

  // Photo handlers
  btnTriggerUpload?.addEventListener('click', () => photoFileInput.click());

  photoFileInput?.addEventListener('change', async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    try {
      showToast('Compressing image for fast mobile loading...');
      const compressedDataUrl = await BubbliStorage.compressImage(file, 900, 0.82);
      activeData.photos = {
        hero: {
          url: compressedDataUrl,
          focalX: 50,
          focalY: 50,
          zoom: 1
        }
      };
      photoControlsPanel?.classList.remove('hidden');
      updateDesktopPreview();
      showToast('Photo framed beautifully!');
    } catch (err) {
      showToast('Could not process photo');
    }
  });

  focalXSlider?.addEventListener('input', (e) => {
    const val = e.target.value;
    if (focalXVal) focalXVal.textContent = val + '%';
    if (activeData.photos && activeData.photos.hero) {
      activeData.photos.hero.focalX = val;
      updateDesktopPreview();
    }
  });

  focalYSlider?.addEventListener('input', (e) => {
    const val = e.target.value;
    if (focalYVal) focalYVal.textContent = val + '%';
    if (activeData.photos && activeData.photos.hero) {
      activeData.photos.hero.focalY = val;
      updateDesktopPreview();
    }
  });

  zoomSlider?.addEventListener('input', (e) => {
    const val = e.target.value;
    if (zoomVal) zoomVal.textContent = Number(val).toFixed(2) + 'x';
    if (activeData.photos && activeData.photos.hero) {
      activeData.photos.hero.zoom = val;
      updateDesktopPreview();
    }
  });

  btnRemovePhoto?.addEventListener('click', () => {
    activeData.photos = {};
    photoControlsPanel?.classList.add('hidden');
    if (photoFileInput) photoFileInput.value = '';
    updateDesktopPreview();
    showToast('Photo removed. Elegant typographic layout restored.');
  });

  // Layer B & C: Named Curated Palettes
  function renderCuratedPalettes() {
    if (!curatedPalettesContainer) return;
    curatedPalettesContainer.innerHTML = '';

    const palettes = BubbliTemplates.CURATED_PALETTES;
    const currentTemplate = BubbliTemplates.getTemplateById(currentTemplateId);

    palettes.forEach(p => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `palette-swatch-card ${
        currentTemplate && currentTemplate.palette && currentTemplate.palette.background === p.background ? 'active' : ''
      }`;

      card.innerHTML = `
        <div class="color-dot-stack">
          <div class="dot-bg" style="background: ${p.background}; border-color: ${p.border || p.secondary};"></div>
          <div class="dot-primary" style="background: ${p.primary}; border-color: ${p.secondary};"></div>
        </div>
        <div class="min-w-0">
          <div class="text-xs font-bold text-white truncate">${p.name}</div>
          <div class="text-[10px] text-slate-400 capitalize">${p.occasion || 'Harmonious'}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        if (currentTemplate) {
          currentTemplate.palette = {
            background: p.background,
            card: p.card,
            primary: p.primary,
            secondary: p.secondary,
            accent: p.accent,
            textPrimary: p.textPrimary,
            textSecondary: p.textSecondary,
            border: p.border
          };
          renderCuratedPalettes();
          updateDesktopPreview();
          showToast(`Applied: ${p.name}`);
        }
      });

      curatedPalettesContainer.appendChild(card);
    });
  }

  // Typography selector
  function renderFontPresets() {
    if (!fontPresetsContainer) return;
    fontPresetsContainer.innerHTML = '';

    const fonts = [
      { name: 'Traditional Vedic', heading: "'Rozha One', serif" },
      { name: 'Classical Serif', heading: "'Playfair Display', serif" },
      { name: 'Royal Roman', heading: "'Cinzel', serif" },
      { name: 'French Romance', heading: "'Cormorant Garamond', serif" },
      { name: 'Modern Sans', heading: "'Outfit', sans-serif" }
    ];

    const currentTemplate = BubbliTemplates.getTemplateById(currentTemplateId);

    fonts.forEach(f => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-left hover:border-slate-600 transition-all text-xs text-slate-200 ${
        currentTemplate && currentTemplate.typography && currentTemplate.typography.heading === f.heading ? 'border-cyan-400 bg-cyan-950/20 text-cyan-300 font-bold' : ''
      }`;
      btn.innerHTML = `<span style="font-family: ${f.heading}; font-size: 13px;">${f.name}</span>`;

      btn.addEventListener('click', () => {
        if (currentTemplate) {
          currentTemplate.typography.heading = f.heading;
          renderFontPresets();
          updateDesktopPreview();
          showToast(`Typography: ${f.name}`);
        }
      });

      fontPresetsContainer.appendChild(btn);
    });
  }

  function updateDesktopPreview() {
    if (!desktopPreviewTarget) return;
    const template = BubbliTemplates.getTemplateById(currentTemplateId) || BubbliTemplates.getAllTemplates()[0];
    desktopPreviewTarget.innerHTML = BubbliRenderer.render(template, activeData, {
      aspectRatio: currentAspectRatio
    });
  }

  // Reset to defaults
  document.getElementById('editor-btn-reset')?.addEventListener('click', () => {
    if (confirm('Reset changes to default occasion wording?')) {
      const wording = BubbliWording.getDefaultWording(currentEventId);
      if (wording) {
        activeData.headline = wording.headline;
        activeData.hostPrefix = wording.prefix;
        activeData.message = wording.message;
        activeData.rsvp = wording.rsvpPrefix;
      }
      activeData.photos = {};
      renderEditorFields();
      updateDesktopPreview();
      showToast('Reset to defaults.');
    }
  });

  // ----------------------------------------------------
  // STEP 4: FULL PREVIEW & SIBLING SWITCHER
  // ----------------------------------------------------
  function renderFullPreview() {
    if (!fullPreviewTarget) return;
    const template = BubbliTemplates.getTemplateById(currentTemplateId) || BubbliTemplates.getAllTemplates()[0];
    fullPreviewTarget.innerHTML = BubbliRenderer.render(template, activeData, {
      aspectRatio: currentAspectRatio
    });
  }

  aspectRatioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      aspectRatioButtons.forEach(b => {
        b.classList.remove('active', 'bg-blue-600', 'text-white');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('active', 'bg-blue-600', 'text-white');
      btn.classList.remove('text-slate-400');
      currentAspectRatio = btn.getAttribute('data-ratio');
      renderFullPreview();
      updateDesktopPreview();
    });
  });

  function renderSiblingTemplates() {
    if (!siblingTemplatesRow) return;
    siblingTemplatesRow.innerHTML = '';

    const siblings = BubbliTemplates.getTemplatesForEvent(currentEventId);
    siblings.forEach(t => {
      const btn = document.createElement('button');
      btn.className = `px-3 py-2 rounded-xl border text-xs whitespace-nowrap transition-all flex items-center space-x-1.5 ${
        t.id === currentTemplateId
          ? 'border-cyan-400 bg-cyan-950/30 text-cyan-300 font-bold'
          : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700'
      }`;
      btn.innerHTML = `<span>🎨</span><span class="truncate max-w-[140px]">${t.title}</span>`;
      btn.addEventListener('click', () => {
        currentTemplateId = t.id;
        renderFullPreview();
        renderSiblingTemplates();
        showToast(`Switched layout to: ${t.title}`);
      });
      siblingTemplatesRow.appendChild(btn);
    });
  }

  // ----------------------------------------------------
  // STEP 5: PUBLISH & SHARE
  // ----------------------------------------------------
  async function renderPublishScreen() {
    const signature = JSON.stringify({ templateId: currentTemplateId, data: activeData, aspectRatio: currentAspectRatio });
    if (!activePublishResult || activePublishSignature !== signature) {
      activePublishResult = BubbliStorage.publishInvitation(currentTemplateId, activeData, {
        aspectRatio: currentAspectRatio
      });
      activePublishSignature = signature;
    }
    const publishResult = activePublishResult;

    // Prefill WhatsApp text
    const names = activeData.coupleNames || 'Our Celebration';
    const date = activeData.date || '';
    const venue = activeData.venue || '';
    const linkStatus = document.getElementById('publish-link-status');
    const publishHeading = document.getElementById('publish-heading');
    const publishDescription = document.getElementById('publish-description');
    const retryButton = document.getElementById('btn-retry-publish');
    const updateShareLink = (url) => {
      if (publishLinkInput) publishLinkInput.value = url;
      if (btnViewPublicPage) {
        if (url) btnViewPublicPage.href = url;
        else btnViewPublicPage.removeAttribute('href');
        btnViewPublicPage.setAttribute('aria-disabled', String(!url));
        btnViewPublicPage.tabIndex = url ? 0 : -1;
        btnViewPublicPage.classList.toggle('opacity-50', !url);
        btnViewPublicPage.classList.toggle('pointer-events-none', !url);
      }
      if (btnCopyLink) {
        btnCopyLink.disabled = !url;
        btnCopyLink.classList.toggle('opacity-50', !url);
        btnCopyLink.classList.toggle('cursor-not-allowed', !url);
      }
      if (btnWhatsappShare) {
        if (url) btnWhatsappShare.href = `https://wa.me/?text=${encodeURIComponent(
          `✨ You are joyfully invited!\n\n` +
          `🎉 ${activeData.headline || 'Celebration Invitation'}\n` +
          `👤 ${names}\n` +
          `📅 ${date}\n` +
          `📍 ${venue}\n\n` +
          `Tap below to view your invitation:\n${url}`
        )}`;
        else btnWhatsappShare.removeAttribute('href');
        btnWhatsappShare.setAttribute('aria-disabled', String(!url));
        btnWhatsappShare.tabIndex = url ? 0 : -1;
        btnWhatsappShare.classList.toggle('opacity-50', !url);
        btnWhatsappShare.classList.toggle('pointer-events-none', !url);
      }
    };
    const updateShareMessage = (message) => {
      if (linkStatus) linkStatus.textContent = message;
    };
    const saveShortLink = async () => {
      updateShareLink('');
      if (publishHeading) publishHeading.textContent = 'Saving your invitation…';
      updateShareMessage('Creating your short link…');
      if (retryButton) retryButton.classList.add('hidden');
      try {
        await BubbliStorage.saveInvitationOnline(publishResult.record);
        updateShareLink(publishResult.shareUrl);
        if (publishHeading) publishHeading.textContent = 'Your Invitation Is Live!';
        if (publishDescription) publishDescription.textContent = 'Guests can open the short link to view your card, directions, and RSVP.';
        updateShareMessage('Short link ready to share.');
      } catch (error) {
        console.warn('Could not save invitation online.', error);
        if (publishHeading) publishHeading.textContent = 'Your invitation is not online yet';
        if (publishDescription) publishDescription.textContent = 'Your card is saved as a draft. Retry the connection to publish it and get a share link.';
        updateShareMessage('We couldn’t connect. Check your internet and try again.');
        if (retryButton) retryButton.classList.remove('hidden');
      }
    };
    if (retryButton) retryButton.onclick = saveShortLink;

    /* Share controls stay unavailable until the online record is confirmed. */
    updateShareLink('');
    if (linkStatus) {
      linkStatus.textContent = 'Creating your short link…';
    }
    await saveShortLink();

    if (typeof BubbliAnalytics !== 'undefined') {
      BubbliAnalytics.track(BubbliAnalytics.EVENTS.INVITATION_PUBLISHED, {
        templateId: currentTemplateId,
        id: publishResult.id
      });
    }
  }

  btnCopyLink?.addEventListener('click', () => {
    if (!publishLinkInput) return;
    publishLinkInput.select();
    const copyPromise = navigator.clipboard?.writeText
      ? navigator.clipboard.writeText(publishLinkInput.value)
      : Promise.reject(new Error('Clipboard API unavailable'));
    copyPromise.then(() => {
      showToast('Invitation link copied to clipboard!');
      if (typeof BubbliAnalytics !== 'undefined') {
        BubbliAnalytics.track(BubbliAnalytics.EVENTS.INVITATION_SHARED, { channel: 'copy_link' });
      }
    }).catch(() => {
      publishLinkInput.select();
      const copied = document.execCommand && document.execCommand('copy');
      showToast(copied ? 'Invitation link copied to clipboard!' : 'Select the link and copy it.');
    });
  });

  // High-Res Image Export Download
  async function downloadCardImage() {
    const target = fullPreviewTarget ? fullPreviewTarget.querySelector('.inv-card-wrapper') : null;
    if (!target) {
      showToast('Please open preview first.');
      return;
    }

    try {
      showToast('Generating crystal-clear image export...');
      const canvas = await html2canvas(target, {
        scale: 2.5,
        useCORS: true,
        backgroundColor: null,
        logging: false
      });

      const link = document.createElement('a');
      link.download = `bubbli-invitation-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('Card saved to your device!');

      if (typeof BubbliAnalytics !== 'undefined') {
        BubbliAnalytics.track(BubbliAnalytics.EVENTS.INVITATION_DOWNLOADED, { templateId: currentTemplateId });
      }
    } catch (e) {
      showToast('Could not export image. Please take a screenshot.');
    }
  }

  document.getElementById('btn-preview-download-card')?.addEventListener('click', downloadCardImage);
  btnPublishDownloadCard?.addEventListener('click', downloadCardImage);

  // Pricing Modal Listeners
  const modalPricing = document.getElementById('modal-pricing');
  document.getElementById('header-btn-pricing')?.addEventListener('click', () => modalPricing?.classList.remove('hidden'));
  document.getElementById('modal-pricing-close')?.addEventListener('click', () => modalPricing?.classList.add('hidden'));
  document.getElementById('btn-select-free')?.addEventListener('click', () => {
    modalPricing?.classList.add('hidden');
    showToast('Active Plan: Free Forever (₹0)');
  });
  document.getElementById('btn-preview-pro')?.addEventListener('click', () => {
    modalPricing?.classList.add('hidden');
    showToast('Royal Pass Pro preview unlocked! ✨');
  });

  // Invitation Format Outcome Selector
  let selectedFormat = 'interactive';
  document.querySelectorAll('input[name="invitation-format"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      selectedFormat = e.target.value;
      if (selectedFormat === 'card') {
        showToast('Format: Shareable Card Image (PNG)');
      } else {
        showToast('Format: Interactive Event Web Experience 🌐');
      }
    });
  });

  // ----------------------------------------------------
  // DEEP LINKING & INITIAL BOOT
  // ----------------------------------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const paramCategory = urlParams.get('category');
  const paramEvent = urlParams.get('event');
  const paramTemplate = urlParams.get('template');
  const paramStep = urlParams.get('step');
  const paramSearch = urlParams.get('search');

  if (paramSearch && occasionSearchInput) {
    occasionSearchInput.value = paramSearch;
  }

  if (paramEvent && BubbliTaxonomy.getEventById(paramEvent)) {
    currentEventId = paramEvent;
    const ev = BubbliTaxonomy.getEventById(paramEvent);
    if (ev) currentCategoryId = ev.category;
    activeData = Object.assign({}, BubbliWording.getSampleDataForEvent(paramEvent));
  } else if (paramCategory && BubbliTaxonomy.getCategoryById(paramCategory)) {
    currentCategoryId = paramCategory;
    const eventsInCat = BubbliTaxonomy.getEventsByCategory(paramCategory);
    if (eventsInCat.length) {
      currentEventId = eventsInCat[0].id;
      activeData = Object.assign({}, BubbliWording.getSampleDataForEvent(currentEventId));
    }
  }

  if (paramTemplate && BubbliTemplates.getTemplateById(paramTemplate)) {
    currentTemplateId = paramTemplate;
    const t = BubbliTemplates.getTemplateById(paramTemplate);
    if (t && t.eventTypes && t.eventTypes.length) {
      currentEventId = t.eventTypes[0];
      const ev = BubbliTaxonomy.getEventById(currentEventId);
      if (ev) currentCategoryId = ev.category;
      activeData = Object.assign({}, BubbliWording.getSampleDataForEvent(currentEventId));
    }
    // Deep-link straight to personalising step
    goToStep(3);
    return;
  }

  if (paramStep) {
    const s = parseInt(paramStep, 10);
    if (s >= 1 && s <= 5) {
      goToStep(s);
      return;
    }
  }

  // Default start at Step 1
  goToStep(1);
});
