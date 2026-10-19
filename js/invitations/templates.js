/**
 * Bubbli Invitation Studio 2.0 - Complete Template Catalogue
 * Structured, validated, responsive template definitions.
 * Minimum 10 genuinely distinct templates for every priority event.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BubbliTemplates = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Base raw template definitions for each priority event
  const RAW_TEMPLATES = [
    // ==========================================
    // 1. WEDDINGS (10 Distinct Templates)
    // ==========================================
    {
      id: 'wedding-south-indian-temple',
      title: 'South Indian Sacred Temple',
      eventTypes: ['wedding', 'tamil-wedding', 'telugu-wedding', 'kannada-wedding'],
      culturalStyles: ['south-indian', 'traditional', 'temple'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'arch', fit: 'cover', position: 'top', border: 'gold-double' }],
      palette: {
        background: '#FFF9F0',
        card: '#FFFFFF',
        primary: '#800020', // Deep Maroon
        secondary: '#C5A059', // Temple Gold
        accent: '#D97706',
        textPrimary: '#4A0E17',
        textSecondary: '#78350F',
        border: '#E5C378'
      },
      typography: {
        heading: "'Rozha One', serif",
        script: "'Great Vibes', cursive",
        body: "'Plus Jakarta Sans', sans-serif"
      },
      decorationPack: 'temple-arch-kolam',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'wedding-royal-rajputana-ruby',
      title: 'Royal Rajputana Ruby & Gold',
      eventTypes: ['wedding', 'north-indian-wedding', 'destination-wedding'],
      culturalStyles: ['north-indian', 'royal', 'heritage'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'circle', fit: 'cover', position: 'center', border: 'ornate-gold' }],
      palette: {
        background: '#1A0B0E',
        card: '#2A1117',
        primary: '#E5C378',
        secondary: '#BE123C',
        accent: '#FBBF24',
        textPrimary: '#FEF3C7',
        textSecondary: '#FDE68A',
        border: '#C5A059'
      },
      typography: {
        heading: "'Cinzel', serif",
        script: "'Alex Brush', cursive",
        body: "'Plus Jakarta Sans', sans-serif"
      },
      decorationPack: 'mandala-center',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'wedding-mughal-mehrab-emerald',
      title: 'Mughal Mehrab & Emerald Arch',
      eventTypes: ['wedding', 'nikah-walima', 'reception'],
      culturalStyles: ['mughal', 'regal', 'islamic-inspired'],
      layout: 'mughal-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'arch', fit: 'cover', position: 'center', border: 'emerald-gold' }],
      palette: {
        background: '#04251B',
        card: '#083B2C',
        primary: '#FBBF24',
        secondary: '#10B981',
        accent: '#D4AF37',
        textPrimary: '#ECFDF5',
        textSecondary: '#D1FAE5',
        border: '#F59E0B'
      },
      typography: {
        heading: "'Playfair Display', serif",
        script: "'Great Vibes', cursive",
        body: "'Outfit', sans-serif"
      },
      decorationPack: 'mughal-arch',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'wedding-kerala-kasavu-ivory',
      title: 'Kerala Kasavu Ivory & Greenery',
      eventTypes: ['wedding', 'malayalam-wedding'],
      culturalStyles: ['kerala', 'traditional', 'minimal-classic'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'portrait', fit: 'cover', position: 'top', border: 'gold-thin' }],
      palette: {
        background: '#FAF8F5',
        card: '#FFFFFF',
        primary: '#14532D',
        secondary: '#B45309',
        accent: '#D97706',
        textPrimary: '#1F2937',
        textSecondary: '#4B5563',
        border: '#CA8A04'
      },
      typography: {
        heading: "'Cormorant Garamond', serif",
        script: "'Great Vibes', cursive",
        body: "'Plus Jakarta Sans', sans-serif"
      },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'wedding-christian-holy-matrimony',
      title: 'Sacred Ivory & Botanical Eucalyptus',
      eventTypes: ['wedding', 'christian-wedding'],
      culturalStyles: ['christian', 'botanical', 'western-classic'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'circle', fit: 'cover', position: 'top', border: 'rose-gold' }],
      palette: {
        background: '#FDFBF7',
        card: '#FFFFFF',
        primary: '#4338CA',
        secondary: '#059669',
        accent: '#E11D48',
        textPrimary: '#1E293B',
        textSecondary: '#64748B',
        border: '#CBD5E1'
      },
      typography: {
        heading: "'Playfair Display', serif",
        script: "'Alex Brush', cursive",
        body: "'Plus Jakarta Sans', sans-serif"
      },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'wedding-punjabi-marigold-celebration',
      title: 'Punjabi Dhol & Vibrant Marigold',
      eventTypes: ['wedding', 'punjabi-wedding'],
      culturalStyles: ['punjabi', 'festive', 'vibrant'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'rounded', fit: 'cover', position: 'center', border: 'marigold-thick' }],
      palette: {
        background: '#FFF7ED',
        card: '#FFFFFF',
        primary: '#C2410C',
        secondary: '#D97706',
        accent: '#BE185D',
        textPrimary: '#7C2D12',
        textSecondary: '#9A3412',
        border: '#F97316'
      },
      typography: {
        heading: "'Outfit', sans-serif",
        script: "'Great Vibes', cursive",
        body: "'Plus Jakarta Sans', sans-serif"
      },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'wedding-minimalist-modern-monochrome',
      title: 'Modern Editorial Typography (No Photo)',
      eventTypes: ['wedding', 'save-the-date'],
      culturalStyles: ['minimalist', 'contemporary', 'scandinavian'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#121214',
        card: '#18181B',
        primary: '#F4F4F5',
        secondary: '#A1A1AA',
        accent: '#E4E4E7',
        textPrimary: '#FAFAFA',
        textSecondary: '#D4D4D8',
        border: '#27272A'
      },
      typography: {
        heading: "'Playfair Display', serif",
        script: "'Cinzel', serif",
        body: "'Plus Jakarta Sans', sans-serif"
      },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'wedding-art-deco-noir-gold',
      title: 'Art Deco 1920s Noir & Gilded Gold',
      eventTypes: ['wedding', 'reception', 'cocktail-party'],
      culturalStyles: ['art-deco', 'vintage-glam', 'international'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'hex', fit: 'cover', position: 'center', border: 'deco-gold' }],
      palette: {
        background: '#0B0B0E',
        card: '#141419',
        primary: '#EAB308',
        secondary: '#CA8A04',
        accent: '#FEF08A',
        textPrimary: '#FEF08A',
        textSecondary: '#E2E8F0',
        border: '#CA8A04'
      },
      typography: {
        heading: "'Cinzel', serif",
        script: "'Alex Brush', cursive",
        body: "'Plus Jakarta Sans', sans-serif"
      },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'wedding-french-romantic-blush',
      title: 'French Romantic Blush & Rose Gold',
      eventTypes: ['wedding', 'reception'],
      culturalStyles: ['french-romantic', 'pastel', 'european'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'portrait', fit: 'cover', position: 'top', border: 'soft-blush' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#BE123C',
        secondary: '#FB7185',
        accent: '#9F1239',
        textPrimary: '#4C0519',
        textSecondary: '#881337',
        border: '#FECDD3'
      },
      typography: {
        heading: "'Cormorant Garamond', serif",
        script: "'Great Vibes', cursive",
        body: "'Plus Jakarta Sans', sans-serif"
      },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'wedding-side-by-side-couple',
      title: 'Two-Soul Side-by-Side Dual Portraits',
      eventTypes: ['wedding', 'engagement'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'bride', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'groom', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#FDFBF7',
        card: '#FFFFFF',
        primary: '#7C2D12',
        secondary: '#D97706',
        accent: '#9A3412',
        textPrimary: '#1E293B',
        textSecondary: '#475569',
        border: '#E2E8F0'
      },
      typography: {
        heading: "'Playfair Display', serif",
        script: "'Great Vibes', cursive",
        body: "'Plus Jakarta Sans', sans-serif"
      },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },

    // ==========================================
    // 2. ENGAGEMENT / RING CEREMONY (10 Distinct Templates)
    // ==========================================
    {
      id: 'engagement-solitaire-sparkle',
      title: 'Solitaire Sparkle & Champagne',
      eventTypes: ['engagement'],
      culturalStyles: ['contemporary', 'luxury'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'top', border: 'champagne' }],
      palette: {
        background: '#FBF8F3',
        card: '#FFFFFF',
        primary: '#92400E',
        secondary: '#D97706',
        accent: '#B45309',
        textPrimary: '#292524',
        textSecondary: '#57534E',
        border: '#E7E5E4'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'engagement-royal-nischayathartham',
      title: 'Traditional Betrothal & Silk Brocade',
      eventTypes: ['engagement', 'nischayathartham'],
      culturalStyles: ['south-indian', 'traditional'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#FFF9F2',
        card: '#FFFFFF',
        primary: '#9A1C2F',
        secondary: '#D4AF37',
        accent: '#C2410C',
        textPrimary: '#4A0E17',
        textSecondary: '#78350F',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'kolam-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'engagement-modern-minimal-lines',
      title: 'Modern Minimal Fine Line (No Photo)',
      eventTypes: ['engagement'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#F8FAFC',
        card: '#FFFFFF',
        primary: '#0F172A',
        secondary: '#475569',
        accent: '#2563EB',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        border: '#E2E8F0'
      },
      typography: { heading: "'Cinzel', serif", script: "'Playfair Display', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'engagement-botanical-sage-wreath',
      title: 'Botanical Sage & Golden Ring',
      eventTypes: ['engagement'],
      culturalStyles: ['botanical', 'european'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'center', border: 'sage-gold' }],
      palette: {
        background: '#F0FDF4',
        card: '#FFFFFF',
        primary: '#166534',
        secondary: '#B45309',
        accent: '#15803D',
        textPrimary: '#14532D',
        textSecondary: '#374151',
        border: '#BBF7D0'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'engagement-twilight-navy-gold',
      title: 'Twilight Midnight Navy & Gold Stars',
      eventTypes: ['engagement'],
      culturalStyles: ['luxury', 'celestial'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'portrait', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#0B132B',
        card: '#1C2541',
        primary: '#FBBF24',
        secondary: '#38BDF8',
        accent: '#F59E0B',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        border: '#334155'
      },
      typography: { heading: "'Cinzel', serif", script: "'Great Vibes', cursive", body: "'Outfit', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'engagement-roka-shagun-crimson',
      title: 'Roka Shagun Crimson & Gota Patti',
      eventTypes: ['engagement', 'roka'],
      culturalStyles: ['north-indian', 'festive'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'arch', fit: 'cover', position: 'center', border: 'gota-gold' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#BE123C',
        secondary: '#E11D48',
        accent: '#D97706',
        textPrimary: '#881337',
        textSecondary: '#4C0519',
        border: '#FDA4AF'
      },
      typography: { heading: "'Rozha One', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'engagement-two-hearts-split',
      title: 'Two Hearts Dual Portrait Collage',
      eventTypes: ['engagement'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'fiance1', shape: 'portrait', fit: 'cover', position: 'left', border: 'rose' },
        { id: 'fiance2', shape: 'portrait', fit: 'cover', position: 'right', border: 'rose' }
      ],
      palette: {
        background: '#FDF4FF',
        card: '#FFFFFF',
        primary: '#86198F',
        secondary: '#C026D3',
        accent: '#E879F9',
        textPrimary: '#4A044E',
        textSecondary: '#701A75',
        border: '#F0ABFC'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'engagement-boho-terracotta-dried-flora',
      title: 'Boho Terracotta & Dried Palms',
      eventTypes: ['engagement'],
      culturalStyles: ['boho', 'earthy', 'rustic'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'portrait', fit: 'cover', position: 'top', border: 'terracotta' }],
      palette: {
        background: '#FFF7ED',
        card: '#FFFFFF',
        primary: '#9A3412',
        secondary: '#D97706',
        accent: '#C2410C',
        textPrimary: '#431407',
        textSecondary: '#7C2D12',
        border: '#FED7AA'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'engagement-mughal-jali-luxury',
      title: 'Mughal Jali & Golden Mehrab',
      eventTypes: ['engagement'],
      culturalStyles: ['mughal', 'heritage'],
      layout: 'mughal-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'arch', fit: 'cover', position: 'center', border: 'jali-gold' }],
      palette: {
        background: '#18181B',
        card: '#27272A',
        primary: '#FBBF24',
        secondary: '#CA8A04',
        accent: '#EAB308',
        textPrimary: '#FEF9C3',
        textSecondary: '#FDE047',
        border: '#854D0E'
      },
      typography: { heading: "'Cinzel', serif", script: "'Great Vibes', cursive", body: "'Outfit', sans-serif" },
      decorationPack: 'mughal-arch',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'engagement-fullbleed-cinematic',
      title: 'Cinematic Full-Bleed Photo Hero',
      eventTypes: ['engagement'],
      culturalStyles: ['modern', 'photo-led'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-dark' }],
      palette: {
        background: '#09090B',
        card: 'rgba(9, 9, 11, 0.75)',
        primary: '#FAFAFA',
        secondary: '#E4E4E7',
        accent: '#38BDF8',
        textPrimary: '#FFFFFF',
        textSecondary: '#E2E8F0',
        border: 'rgba(255, 255, 255, 0.2)'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 3. HALDI CEREMONY (10 Distinct Templates)
    // ==========================================
    {
      id: 'haldi-sunshine-marigold-splash',
      title: 'Turmeric Sunshine & Marigold Garland',
      eventTypes: ['haldi'],
      culturalStyles: ['festive', 'traditional'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'celebrant', shape: 'circle', fit: 'cover', position: 'center', border: 'marigold' }],
      palette: {
        background: '#FEF3C7',
        card: '#FFFBEB',
        primary: '#B45309',
        secondary: '#D97706',
        accent: '#EA580C',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'haldi-royal-pithi-peacock',
      title: 'Royal Pithi & Peacock Hues',
      eventTypes: ['haldi'],
      culturalStyles: ['royal', 'rajasthani'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'celebrant', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#0369A1',
        secondary: '#D97706',
        accent: '#15803D',
        textPrimary: '#0C4A6E',
        textSecondary: '#78350F',
        border: '#FCD34D'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'temple-arch-kolam',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'haldi-boho-yellow-florals',
      title: 'Boho Dried Florals & Warm Yellow',
      eventTypes: ['haldi'],
      culturalStyles: ['boho', 'modern'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'celebrant', shape: 'circle', fit: 'cover', position: 'center', border: 'yellow' }],
      palette: {
        background: '#FFFDF5',
        card: '#FFFFFF',
        primary: '#92400E',
        secondary: '#CA8A04',
        accent: '#D97706',
        textPrimary: '#451A03',
        textSecondary: '#78350F',
        border: '#FEF08A'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'haldi-vibrant-dholak-beats',
      title: 'Punjabi Dhol Beats & Festive Splatters',
      eventTypes: ['haldi'],
      culturalStyles: ['punjabi', 'vibrant'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'celebrant', shape: 'rounded', fit: 'cover', position: 'top', border: 'orange' }],
      palette: {
        background: '#FEF08A',
        card: '#FFFFFF',
        primary: '#C2410C',
        secondary: '#E11D48',
        accent: '#B45309',
        textPrimary: '#7C2D12',
        textSecondary: '#9A3412',
        border: '#F59E0B'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'haldi-pure-minimal-typography',
      title: 'Pure Yellow Minimalist (No Photo)',
      eventTypes: ['haldi'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#D97706',
        accent: '#F59E0B',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'haldi-traditional-brass-urli',
      title: 'Traditional Brass Urli & Petals',
      eventTypes: ['haldi'],
      culturalStyles: ['traditional', 'south-indian'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'celebrant', shape: 'circle', fit: 'cover', position: 'center', border: 'brass-gold' }],
      palette: {
        background: '#FFF7ED',
        card: '#FFFFFF',
        primary: '#C2410C',
        secondary: '#CA8A04',
        accent: '#B45309',
        textPrimary: '#7C2D12',
        textSecondary: '#9A3412',
        border: '#FDE047'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mandala-center',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'haldi-dual-bride-groom',
      title: 'Dual Haldi Celebration (Couple Side-by-Side)',
      eventTypes: ['haldi'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'bride', shape: 'portrait', fit: 'cover', position: 'left', border: 'yellow' },
        { id: 'groom', shape: 'portrait', fit: 'cover', position: 'right', border: 'yellow' }
      ],
      palette: {
        background: '#FEF9C3',
        card: '#FFFFFF',
        primary: '#A16207',
        secondary: '#CA8A04',
        accent: '#EA580C',
        textPrimary: '#713F12',
        textSecondary: '#854D0E',
        border: '#FACC15'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'haldi-mughal-courtyard-sunshine',
      title: 'Mughal Courtyard & Turmeric Yellow',
      eventTypes: ['haldi'],
      culturalStyles: ['mughal', 'heritage'],
      layout: 'mughal-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'celebrant', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#92400E',
        secondary: '#D97706',
        accent: '#B45309',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FCD34D'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mughal-arch',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'haldi-chic-pastel-lemon',
      title: 'Chic Pastel Lemon & Olive Branch',
      eventTypes: ['haldi'],
      culturalStyles: ['pastel', 'modern'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'celebrant', shape: 'portrait', fit: 'cover', position: 'top', border: 'olive' }],
      palette: {
        background: '#FEFCE8',
        card: '#FFFFFF',
        primary: '#3F6212',
        secondary: '#CA8A04',
        accent: '#65A30D',
        textPrimary: '#1A2E05',
        textSecondary: '#365314',
        border: '#ECFCCB'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'haldi-fullbleed-genda-phool',
      title: 'Full Bleed Genda Phool Marigold Backdrop',
      eventTypes: ['haldi'],
      culturalStyles: ['photo-led', 'festive'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'celebrant', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-warm' }],
      palette: {
        background: '#451A03',
        card: 'rgba(69, 26, 3, 0.8)',
        primary: '#FEF08A',
        secondary: '#FBBF24',
        accent: '#FB923C',
        textPrimary: '#FFFFFF',
        textSecondary: '#FEF3C7',
        border: 'rgba(251, 191, 36, 0.4)'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 4. MEHENDI CEREMONY (10 Distinct Templates)
    // ==========================================
    {
      id: 'mehendi-henna-botanical-olive',
      title: 'Fragrant Henna & Olive Vines',
      eventTypes: ['mehendi'],
      culturalStyles: ['traditional', 'botanical'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'bride', shape: 'circle', fit: 'cover', position: 'center', border: 'olive-gold' }],
      palette: {
        background: '#F7FEE7',
        card: '#FFFFFF',
        primary: '#365314',
        secondary: '#B45309',
        accent: '#4D7C0F',
        textPrimary: '#1A2E05',
        textSecondary: '#4D7C0F',
        border: '#D9F99D'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'mehendi-rajasthani-mandala-emerald',
      title: 'Rajasthani Henna Mandala & Emerald Hues',
      eventTypes: ['mehendi'],
      culturalStyles: ['rajasthani', 'royal'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'bride', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#022C22',
        card: '#064E3B',
        primary: '#FBBF24',
        secondary: '#10B981',
        accent: '#D4AF37',
        textPrimary: '#ECFDF5',
        textSecondary: '#D1FAE5',
        border: '#059669'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mandala-center',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'mehendi-boho-terracotta-green',
      title: 'Boho Earthy Terracotta & Henna Forest',
      eventTypes: ['mehendi'],
      culturalStyles: ['boho', 'earthy'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'bride', shape: 'portrait', fit: 'cover', position: 'top', border: 'terracotta' }],
      palette: {
        background: '#FFF7ED',
        card: '#FFFFFF',
        primary: '#9A3412',
        secondary: '#15803D',
        accent: '#C2410C',
        textPrimary: '#431407',
        textSecondary: '#7C2D12',
        border: '#FED7AA'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'mehendi-vibrant-dholki-pink-green',
      title: 'Rani Pink & Parrot Green Dholki',
      eventTypes: ['mehendi'],
      culturalStyles: ['punjabi', 'vibrant'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'bride', shape: 'rounded', fit: 'cover', position: 'center', border: 'pink-thick' }],
      palette: {
        background: '#FDF2F8',
        card: '#FFFFFF',
        primary: '#BE185D',
        secondary: '#15803D',
        accent: '#DB2777',
        textPrimary: '#831843',
        textSecondary: '#9D174D',
        border: '#FBCFE8'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'mehendi-arabic-moroccan-arch',
      title: 'Moroccan Lanterns & Arabic Henna Arches',
      eventTypes: ['mehendi'],
      culturalStyles: ['arabic', 'mughal'],
      layout: 'mughal-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'bride', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#047857',
        secondary: '#D97706',
        accent: '#B45309',
        textPrimary: '#064E3B',
        textSecondary: '#065F46',
        border: '#FCD34D'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mughal-arch',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'mehendi-minimal-chic-lines',
      title: 'Minimal Henna Foliage (No Photo)',
      eventTypes: ['mehendi'],
      culturalStyles: ['minimalist', 'contemporary'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FAFDF6',
        card: '#FFFFFF',
        primary: '#14532D',
        secondary: '#4D7C0F',
        accent: '#84CC16',
        textPrimary: '#14532D',
        textSecondary: '#3F6212',
        border: '#DCFCE7'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'mehendi-south-marigold-green',
      title: 'Temple Jasmine & Emerald Foliage',
      eventTypes: ['mehendi'],
      culturalStyles: ['south-indian', 'traditional'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'bride', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#F0FDF4',
        card: '#FFFFFF',
        primary: '#166534',
        secondary: '#CA8A04',
        accent: '#15803D',
        textPrimary: '#14532D',
        textSecondary: '#166534',
        border: '#BBF7D0'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'mehendi-dual-hands-strip',
      title: 'Mehendi Hands Triple Photo Strip',
      eventTypes: ['mehendi'],
      culturalStyles: ['photo-led', 'modern'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'hands1', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'hands2', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#FEFCE8',
        card: '#FFFFFF',
        primary: '#4D7C0F',
        secondary: '#C2410C',
        accent: '#A16207',
        textPrimary: '#365314',
        textSecondary: '#4D7C0F',
        border: '#FEF08A'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'mehendi-art-deco-sage-gold',
      title: 'Art Deco Sage Green & Golden Borders',
      eventTypes: ['mehendi'],
      culturalStyles: ['art-deco', 'luxury'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'bride', shape: 'hex', fit: 'cover', position: 'center', border: 'deco-gold' }],
      palette: {
        background: '#064E3B',
        card: '#022C22',
        primary: '#FBBF24',
        secondary: '#D97706',
        accent: '#34D399',
        textPrimary: '#ECFDF5',
        textSecondary: '#A7F3D0',
        border: '#059669'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'mehendi-fullbleed-henna-glow',
      title: 'Full Bleed Henna Dreamscape',
      eventTypes: ['mehendi'],
      culturalStyles: ['photo-led', 'contemporary'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'bride', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-dark' }],
      palette: {
        background: '#1A2E05',
        card: 'rgba(26, 46, 5, 0.85)',
        primary: '#BEF264',
        secondary: '#FACC15',
        accent: '#84CC16',
        textPrimary: '#FFFFFF',
        textSecondary: '#ECFCCB',
        border: 'rgba(190, 242, 100, 0.3)'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 5. SANGEET NIGHT (10 Distinct Templates)
    // ==========================================
    {
      id: 'sangeet-bollywood-neon-disco',
      title: 'Bollywood Disco & Neon Midnight',
      eventTypes: ['sangeet'],
      culturalStyles: ['vibrant', 'modern'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'rounded', fit: 'cover', position: 'center', border: 'neon-rose' }],
      palette: {
        background: '#0F172A',
        card: '#1E293B',
        primary: '#F43F5E',
        secondary: '#38BDF8',
        accent: '#A855F7',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        border: '#334155'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'sangeet-royal-ghunghroo-gold',
      title: 'Royal Ghunghroo & Velvet Indigo',
      eventTypes: ['sangeet'],
      culturalStyles: ['royal', 'heritage'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#1E1B4B',
        card: '#312E81',
        primary: '#FBBF24',
        secondary: '#818CF8',
        accent: '#F59E0B',
        textPrimary: '#EEF2FF',
        textSecondary: '#C7D2FE',
        border: '#4338CA'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mandala-center',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'sangeet-cocktail-glam-noir',
      title: 'Cocktails & High Heels Noir Gold',
      eventTypes: ['sangeet', 'cocktail-party'],
      culturalStyles: ['luxury', 'art-deco'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'hex', fit: 'cover', position: 'center', border: 'deco-gold' }],
      palette: {
        background: '#09090B',
        card: '#18181B',
        primary: '#EAB308',
        secondary: '#F59E0B',
        accent: '#CA8A04',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#3F3F46'
      },
      typography: { heading: "'Cinzel', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'sangeet-punjabi-dhamaal-orange',
      title: 'Balle Balle Punjabi Dhamaal',
      eventTypes: ['sangeet'],
      culturalStyles: ['punjabi', 'festive'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'rounded', fit: 'cover', position: 'top', border: 'orange' }],
      palette: {
        background: '#FFF7ED',
        card: '#FFFFFF',
        primary: '#EA580C',
        secondary: '#DB2777',
        accent: '#D97706',
        textPrimary: '#7C2D12',
        textSecondary: '#9A3412',
        border: '#FDBA74'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'sangeet-retro-70s-glitz',
      title: 'Retro 70s Disco Glitz & Grooves',
      eventTypes: ['sangeet'],
      culturalStyles: ['retro', 'playful'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'portrait', fit: 'cover', position: 'top', border: 'purple' }],
      palette: {
        background: '#2E1065',
        card: '#3B0764',
        primary: '#E879F9',
        secondary: '#38BDF8',
        accent: '#FDE047',
        textPrimary: '#FAF5FF',
        textSecondary: '#E9D5FF',
        border: '#6B21A8'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Outfit', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'sangeet-minimal-beats-typography',
      title: 'Modern Typographic Dance Night (No Photo)',
      eventTypes: ['sangeet'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#0B0F19',
        card: '#111827',
        primary: '#60A5FA',
        secondary: '#F43F5E',
        accent: '#34D399',
        textPrimary: '#F9FAFB',
        textSecondary: '#9CA3AF',
        border: '#1F2937'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'sangeet-mughal-mehfil-wine',
      title: 'Mughal Mehfil-e-Sangeet Royal Wine',
      eventTypes: ['sangeet'],
      culturalStyles: ['mughal', 'royal'],
      layout: 'mughal-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'arch', fit: 'cover', position: 'center', border: 'wine-gold' }],
      palette: {
        background: '#2B0E1B',
        card: '#42162B',
        primary: '#FBBF24',
        secondary: '#D4AF37',
        accent: '#E11D48',
        textPrimary: '#FFF1F2',
        textSecondary: '#FECDD3',
        border: '#701A75'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mughal-arch',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'sangeet-couple-dual-groove',
      title: 'Bride vs Groom Dance Off (Dual Photos)',
      eventTypes: ['sangeet'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'bride', shape: 'portrait', fit: 'cover', position: 'left', border: 'pink' },
        { id: 'groom', shape: 'portrait', fit: 'cover', position: 'right', border: 'blue' }
      ],
      palette: {
        background: '#0F172A',
        card: '#1E293B',
        primary: '#F43F5E',
        secondary: '#06B6D4',
        accent: '#FBBF24',
        textPrimary: '#F8FAFC',
        textSecondary: '#E2E8F0',
        border: '#334155'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'sangeet-golden-chandelier-luxury',
      title: 'Golden Chandelier & Starlight Ballroom',
      eventTypes: ['sangeet'],
      culturalStyles: ['luxury', 'european'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'circle', fit: 'cover', position: 'center', border: 'chandelier-gold' }],
      palette: {
        background: '#18181B',
        card: '#27272A',
        primary: '#EAB308',
        secondary: '#CA8A04',
        accent: '#FDE047',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#52525B'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'sangeet-fullbleed-stage-lights',
      title: 'Full Bleed Dance Floor & Stage Lights',
      eventTypes: ['sangeet'],
      culturalStyles: ['photo-led', 'vibrant'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-dark' }],
      palette: {
        background: '#0A0A0C',
        card: 'rgba(10, 10, 12, 0.8)',
        primary: '#F43F5E',
        secondary: '#38BDF8',
        accent: '#FBBF24',
        textPrimary: '#FFFFFF',
        textSecondary: '#CBD5E1',
        border: 'rgba(255, 255, 255, 0.2)'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 6. WEDDING RECEPTION (10 Distinct Templates)
    // ==========================================
    {
      id: 'reception-black-tie-elegance',
      title: 'Black Tie Gala & Golden Champagne',
      eventTypes: ['reception'],
      culturalStyles: ['luxury', 'international'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'hex', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#09090B',
        card: '#18181B',
        primary: '#EAB308',
        secondary: '#CA8A04',
        accent: '#FDE047',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#3F3F46'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'reception-royal-velvet-maroon',
      title: 'Royal Velvet Maroon & Pearl Gold',
      eventTypes: ['reception'],
      culturalStyles: ['royal', 'heritage'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#1F060B',
        card: '#300A12',
        primary: '#FBBF24',
        secondary: '#C5A059',
        accent: '#BE123C',
        textPrimary: '#FFF1F2',
        textSecondary: '#FCE7F3',
        border: '#9F1239'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mandala-center',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'reception-french-chateau-sage',
      title: 'French Chateau & Sage Olive Foliage',
      eventTypes: ['reception'],
      culturalStyles: ['european', 'botanical'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'circle', fit: 'cover', position: 'center', border: 'sage' }],
      palette: {
        background: '#F8FAF7',
        card: '#FFFFFF',
        primary: '#14532D',
        secondary: '#78716C',
        accent: '#15803D',
        textPrimary: '#1C1917',
        textSecondary: '#44403C',
        border: '#E7E5E4'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'reception-modern-scandinavian-clean',
      title: 'Scandinavian Modern Minimalist (No Photo)',
      eventTypes: ['reception'],
      culturalStyles: ['minimalist', 'scandinavian'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FDFBF7',
        card: '#FFFFFF',
        primary: '#18181B',
        secondary: '#71717A',
        accent: '#D4AF37',
        textPrimary: '#18181B',
        textSecondary: '#52525B',
        border: '#E4E4E7'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'reception-mughal-palace-dusk',
      title: 'Mughal Palace at Dusk & Rosewater',
      eventTypes: ['reception'],
      culturalStyles: ['mughal', 'regal'],
      layout: 'mughal-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#111827',
        card: '#1F2937',
        primary: '#FBBF24',
        secondary: '#CA8A04',
        accent: '#F43F5E',
        textPrimary: '#F9FAFB',
        textSecondary: '#E5E7EB',
        border: '#374151'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Outfit', sans-serif" },
      decorationPack: 'mughal-arch',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'reception-crystal-ballroom-floating',
      title: 'Crystal Ballroom Floating Frame',
      eventTypes: ['reception'],
      culturalStyles: ['contemporary', 'elegant'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'portrait', fit: 'cover', position: 'top', border: 'silver-gold' }],
      palette: {
        background: '#F8FAFC',
        card: '#FFFFFF',
        primary: '#334155',
        secondary: '#64748B',
        accent: '#0EA5E9',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        border: '#E2E8F0'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'reception-rose-gold-shimmer',
      title: 'Rose Gold Shimmer & Starlight Sparkles',
      eventTypes: ['reception'],
      culturalStyles: ['glamour', 'romantic'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'circle', fit: 'cover', position: 'top', border: 'rose-gold' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#BE123C',
        secondary: '#FB7185',
        accent: '#D97706',
        textPrimary: '#881337',
        textSecondary: '#9F1239',
        border: '#FECDD3'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'reception-dual-newlywed-portraits',
      title: 'The Newlyweds Dual Portrait Feature',
      eventTypes: ['reception'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'bride', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'groom', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#FDFBF7',
        card: '#FFFFFF',
        primary: '#78350F',
        secondary: '#B45309',
        accent: '#D97706',
        textPrimary: '#1E293B',
        textSecondary: '#475569',
        border: '#CBD5E1'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'reception-temple-gold-maroon',
      title: 'South Indian Grand Kalyana Reception',
      eventTypes: ['reception'],
      culturalStyles: ['south-indian', 'traditional'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#FFFDF9',
        card: '#FFFFFF',
        primary: '#800020',
        secondary: '#C5A059',
        accent: '#D97706',
        textPrimary: '#4A0E17',
        textSecondary: '#78350F',
        border: '#E5C378'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'temple-arch-kolam',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'reception-fullbleed-evening-glow',
      title: 'Full Bleed Cinematic Evening Reception',
      eventTypes: ['reception'],
      culturalStyles: ['photo-led', 'cinematic'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-dark' }],
      palette: {
        background: '#030712',
        card: 'rgba(3, 7, 18, 0.8)',
        primary: '#FBBF24',
        secondary: '#E5E7EB',
        accent: '#38BDF8',
        textPrimary: '#FFFFFF',
        textSecondary: '#E2E8F0',
        border: 'rgba(255, 255, 255, 0.2)'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 7. HOUSEWARMING / GRIHA PRAVESH (10 Distinct Templates)
    // ==========================================
    {
      id: 'housewarming-sacred-kalash-pooja',
      title: 'Sacred Kalash & Ganapathi Homam',
      eventTypes: ['housewarming'],
      culturalStyles: ['traditional', 'vedic'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'home', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#D97706',
        accent: '#EA580C',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'kalash-diya',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'housewarming-kolam-diya-auspicious',
      title: 'Auspicious Kolam, Diya & Mango Leaves',
      eventTypes: ['housewarming', 'bhoomi-pooja'],
      culturalStyles: ['south-indian', 'traditional'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'home', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#FFFDF7',
        card: '#FFFFFF',
        primary: '#800020',
        secondary: '#C5A059',
        accent: '#15803D',
        textPrimary: '#4A0E17',
        textSecondary: '#78350F',
        border: '#FCD34D'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'kolam-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'housewarming-modern-architectural-line',
      title: 'Modern Architectural Elevation & New Key',
      eventTypes: ['housewarming'],
      culturalStyles: ['modern', 'architectural'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'home', shape: 'portrait', fit: 'cover', position: 'top', border: 'slate' }],
      palette: {
        background: '#F8FAFC',
        card: '#FFFFFF',
        primary: '#0F172A',
        secondary: '#475569',
        accent: '#2563EB',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        border: '#CBD5E1'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Playfair Display', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'housewarming-minimal-warm-hearth',
      title: 'Warm Hearth & Sweet Beginning (No Photo)',
      eventTypes: ['housewarming'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FFFBF5',
        card: '#FFFFFF',
        primary: '#78350F',
        secondary: '#B45309',
        accent: '#D97706',
        textPrimary: '#451A03',
        textSecondary: '#78350F',
        border: '#FDE68A'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'housewarming-botanical-garden-home',
      title: 'Botanical Garden Home & Olive Wreath',
      eventTypes: ['housewarming'],
      culturalStyles: ['botanical', 'rustic'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'home', shape: 'circle', fit: 'cover', position: 'center', border: 'green' }],
      palette: {
        background: '#F0FDF4',
        card: '#FFFFFF',
        primary: '#166534',
        secondary: '#15803D',
        accent: '#CA8A04',
        textPrimary: '#14532D',
        textSecondary: '#374151',
        border: '#BBF7D0'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'housewarming-boho-terracotta-nest',
      title: 'Boho Cozy Nest & Terracotta Warmth',
      eventTypes: ['housewarming'],
      culturalStyles: ['boho', 'earthy'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'home', shape: 'portrait', fit: 'cover', position: 'top', border: 'terracotta' }],
      palette: {
        background: '#FFF7ED',
        card: '#FFFFFF',
        primary: '#9A3412',
        secondary: '#C2410C',
        accent: '#D97706',
        textPrimary: '#431407',
        textSecondary: '#7C2D12',
        border: '#FED7AA'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'housewarming-marigold-toran-entrance',
      title: 'Festive Marigold Toran Grand Entrance',
      eventTypes: ['housewarming'],
      culturalStyles: ['festive', 'traditional'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'home', shape: 'rounded', fit: 'cover', position: 'center', border: 'orange' }],
      palette: {
        background: '#FEF3C7',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#EA580C',
        accent: '#D97706',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'housewarming-dual-home-family',
      title: 'New Abode & Proud Family (Dual Photos)',
      eventTypes: ['housewarming'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'housePhoto', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'familyPhoto', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#FDFBF7',
        card: '#FFFFFF',
        primary: '#1E293B',
        secondary: '#D97706',
        accent: '#059669',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        border: '#E2E8F0'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'housewarming-art-deco-luxury-villa',
      title: 'Art Deco Luxury Villa & Champagne Toast',
      eventTypes: ['housewarming'],
      culturalStyles: ['art-deco', 'luxury'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'home', shape: 'hex', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#09090B',
        card: '#18181B',
        primary: '#EAB308',
        secondary: '#CA8A04',
        accent: '#FEF08A',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#3F3F46'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'housewarming-fullbleed-home-exterior',
      title: 'Full Bleed Dream Home Exterior Backdrop',
      eventTypes: ['housewarming'],
      culturalStyles: ['photo-led', 'modern'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'home', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-dark' }],
      palette: {
        background: '#0A0A0C',
        card: 'rgba(10, 10, 12, 0.82)',
        primary: '#FBBF24',
        secondary: '#E2E8F0',
        accent: '#38BDF8',
        textPrimary: '#FFFFFF',
        textSecondary: '#E2E8F0',
        border: 'rgba(255, 255, 255, 0.25)'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 8. BABY SHOWER / GODH BHARAI / SEEMANTHAM (10 Distinct Templates)
    // ==========================================
    {
      id: 'babyshower-seemantham-temple-blessing',
      title: 'Auspicious Seemantham & Temple Bangle Ceremony',
      eventTypes: ['baby-shower', 'valaikappu'],
      culturalStyles: ['south-indian', 'traditional'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'mother', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#FFF9F2',
        card: '#FFFFFF',
        primary: '#9A1C2F',
        secondary: '#D4AF37',
        accent: '#15803D',
        textPrimary: '#4A0E17',
        textSecondary: '#78350F',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'temple-arch-kolam',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'babyshower-godh-bharai-marigold',
      title: 'Godh Bharai Celebrations & Marigold Blessings',
      eventTypes: ['baby-shower'],
      culturalStyles: ['traditional', 'festive'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'mother', shape: 'circle', fit: 'cover', position: 'center', border: 'yellow' }],
      palette: {
        background: '#FEF3C7',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#EA580C',
        accent: '#D97706',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'babyshower-pastel-cloud-starlight',
      title: 'Pastel Dream Cloud, Moon & Golden Stars',
      eventTypes: ['baby-shower'],
      culturalStyles: ['whimsical', 'pastel'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'mother', shape: 'circle', fit: 'cover', position: 'top', border: 'gold-thin' }],
      palette: {
        background: '#F0F9FF',
        card: '#FFFFFF',
        primary: '#0284C7',
        secondary: '#F59E0B',
        accent: '#38BDF8',
        textPrimary: '#0C4A6E',
        textSecondary: '#0369A1',
        border: '#BAE6FD'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'babyshower-sweet-blush-floral-wreath',
      title: 'Sweet Blush & Blooming Peonies Wreath',
      eventTypes: ['baby-shower'],
      culturalStyles: ['botanical', 'romantic'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'mother', shape: 'circle', fit: 'cover', position: 'center', border: 'blush' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#BE123C',
        secondary: '#059669',
        accent: '#FB7185',
        textPrimary: '#881337',
        textSecondary: '#9F1239',
        border: '#FECDD3'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'babyshower-gender-neutral-sage-mint',
      title: 'Gender-Neutral Botanical Sage & Mint',
      eventTypes: ['baby-shower'],
      culturalStyles: ['minimalist', 'botanical'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'mother', shape: 'portrait', fit: 'cover', position: 'top', border: 'sage' }],
      palette: {
        background: '#F0FDF4',
        card: '#FFFFFF',
        primary: '#166534',
        secondary: '#15803D',
        accent: '#D97706',
        textPrimary: '#14532D',
        textSecondary: '#4B5563',
        border: '#BBF7D0'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'babyshower-minimal-little-miracle',
      title: 'A Little Miracle is on the Way (No Photo)',
      eventTypes: ['baby-shower'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FFFDF7',
        card: '#FFFFFF',
        primary: '#92400E',
        secondary: '#B45309',
        accent: '#D97706',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'babyshower-korean-pastel-cute',
      title: 'Korean Soft Pastel Teddy & Butter Yellow',
      eventTypes: ['baby-shower'],
      culturalStyles: ['korean-pastel', 'playful'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'mother', shape: 'rounded', fit: 'cover', position: 'center', border: 'soft-yellow' }],
      palette: {
        background: '#FEFCE8',
        card: '#FFFFFF',
        primary: '#A16207',
        secondary: '#F59E0B',
        accent: '#38BDF8',
        textPrimary: '#713F12',
        textSecondary: '#854D0E',
        border: '#FEF08A'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'babyshower-parents-to-be-dual',
      title: 'Parents-to-Be Side-by-Side Dual Photo',
      eventTypes: ['baby-shower'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'mom', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'dad', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#FAF5FF',
        card: '#FFFFFF',
        primary: '#6B21A8',
        secondary: '#9333EA',
        accent: '#D97706',
        textPrimary: '#3B0764',
        textSecondary: '#581C87',
        border: '#E9D5FF'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'babyshower-mughal-royal-blessing',
      title: 'Royal Mughal Arch & Velvet Rose',
      eventTypes: ['baby-shower'],
      culturalStyles: ['mughal', 'royal'],
      layout: 'mughal-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'mother', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#881337',
        secondary: '#D4AF37',
        accent: '#BE123C',
        textPrimary: '#4C0519',
        textSecondary: '#881337',
        border: '#FDA4AF'
      },
      typography: { heading: "'Cinzel', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mughal-arch',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'babyshower-fullbleed-maternity-glow',
      title: 'Full Bleed Maternity Portrait Glow',
      eventTypes: ['baby-shower'],
      culturalStyles: ['photo-led', 'cinematic'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'mother', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-soft' }],
      palette: {
        background: '#18181B',
        card: 'rgba(24, 24, 27, 0.78)',
        primary: '#FBBF24',
        secondary: '#FDA4AF',
        accent: '#FDE047',
        textPrimary: '#FFFFFF',
        textSecondary: '#FEE2E2',
        border: 'rgba(255, 255, 255, 0.2)'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 9. NAMING CEREMONY / NAMAKARAN (10 Distinct Templates)
    // ==========================================
    {
      id: 'naming-sacred-namakaran-cradle',
      title: 'Vedic Namakaran & Sacred Cradle Blessings',
      eventTypes: ['naming-ceremony', 'cradle-ceremony'],
      culturalStyles: ['vedic', 'traditional'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'circle', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#D97706',
        accent: '#15803D',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'temple-arch-kolam',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'naming-thottil-tamil-jasmine',
      title: 'Traditional Thottil & Fragrant Jasmine',
      eventTypes: ['naming-ceremony', 'cradle-ceremony'],
      culturalStyles: ['south-indian', 'traditional'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#FFFDF9',
        card: '#FFFFFF',
        primary: '#800020',
        secondary: '#C5A059',
        accent: '#CA8A04',
        textPrimary: '#4A0E17',
        textSecondary: '#78350F',
        border: '#FDE047'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'kolam-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'naming-celestial-little-star',
      title: 'Twinkle Little Star & Golden Cradle',
      eventTypes: ['naming-ceremony'],
      culturalStyles: ['celestial', 'whimsical'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'circle', fit: 'cover', position: 'top', border: 'gold-thin' }],
      palette: {
        background: '#0B132B',
        card: '#1C2541',
        primary: '#FBBF24',
        secondary: '#38BDF8',
        accent: '#F59E0B',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        border: '#334155'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Outfit', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'naming-botanical-sweet-blossom',
      title: 'Botanical Wreath & Sweet Baby Breath',
      eventTypes: ['naming-ceremony'],
      culturalStyles: ['botanical', 'pastel'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'circle', fit: 'cover', position: 'center', border: 'green-gold' }],
      palette: {
        background: '#F0FDF4',
        card: '#FFFFFF',
        primary: '#166534',
        secondary: '#15803D',
        accent: '#D97706',
        textPrimary: '#14532D',
        textSecondary: '#374151',
        border: '#BBF7D0'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'naming-minimal-pure-typography',
      title: 'Introducing Our Bundle of Joy (No Photo)',
      eventTypes: ['naming-ceremony'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FFFDF5',
        card: '#FFFFFF',
        primary: '#18181B',
        secondary: '#A16207',
        accent: '#CA8A04',
        textPrimary: '#18181B',
        textSecondary: '#52525B',
        border: '#E4E4E7'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'naming-marigold-diya-festive',
      title: 'Festive Marigold & Auspicious Diya',
      eventTypes: ['naming-ceremony'],
      culturalStyles: ['festive', 'traditional'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'rounded', fit: 'cover', position: 'center', border: 'orange' }],
      palette: {
        background: '#FEF3C7',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#EA580C',
        accent: '#D97706',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'naming-sweet-baby-pink-gold',
      title: 'Princess Pink & Gilded Gold Stars',
      eventTypes: ['naming-ceremony'],
      culturalStyles: ['pastel', 'glamour'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'portrait', fit: 'cover', position: 'top', border: 'pink' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#BE123C',
        secondary: '#FB7185',
        accent: '#D97706',
        textPrimary: '#881337',
        textSecondary: '#9F1239',
        border: '#FECDD3'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'naming-prince-baby-blue-gold',
      title: 'Prince Baby Blue & Royal Crest',
      eventTypes: ['naming-ceremony'],
      culturalStyles: ['pastel', 'royal'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'portrait', fit: 'cover', position: 'top', border: 'blue' }],
      palette: {
        background: '#F0F9FF',
        card: '#FFFFFF',
        primary: '#0369A1',
        secondary: '#0284C7',
        accent: '#F59E0B',
        textPrimary: '#0C4A6E',
        textSecondary: '#075985',
        border: '#BAE6FD'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'naming-baby-and-parents-dual',
      title: 'Baby & Blessed Parents (Dual Photo)',
      eventTypes: ['naming-ceremony'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'baby', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'parents', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#FDFBF7',
        card: '#FFFFFF',
        primary: '#78350F',
        secondary: '#D97706',
        accent: '#15803D',
        textPrimary: '#1E293B',
        textSecondary: '#475569',
        border: '#E2E8F0'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'naming-fullbleed-baby-sleeping',
      title: 'Full Bleed Sleeping Angel Portrait',
      eventTypes: ['naming-ceremony'],
      culturalStyles: ['photo-led', 'cinematic'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-soft' }],
      palette: {
        background: '#1C1917',
        card: 'rgba(28, 25, 23, 0.8)',
        primary: '#FBBF24',
        secondary: '#FED7AA',
        accent: '#FDE047',
        textPrimary: '#FFFFFF',
        textSecondary: '#FEF3C7',
        border: 'rgba(255, 255, 255, 0.2)'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 10. FIRST BIRTHDAY (10 Distinct Templates)
    // ==========================================
    {
      id: 'firstbday-wild-one-safari',
      title: 'Wild ONE Safari & Gold Jungle Leaves',
      eventTypes: ['first-birthday'],
      culturalStyles: ['safari', 'playful'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'circle', fit: 'cover', position: 'top', border: 'jungle-gold' }],
      palette: {
        background: '#F7FEE7',
        card: '#FFFFFF',
        primary: '#3F6212',
        secondary: '#B45309',
        accent: '#65A30D',
        textPrimary: '#1A2E05',
        textSecondary: '#365314',
        border: '#D9F99D'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'firstbday-twinkle-little-star',
      title: 'Twinkle Twinkle Little Star (Baby Turning One)',
      eventTypes: ['first-birthday'],
      culturalStyles: ['celestial', 'dreamy'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#0B132B',
        card: '#1C2541',
        primary: '#FBBF24',
        secondary: '#38BDF8',
        accent: '#F59E0B',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        border: '#334155'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Outfit', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'firstbday-sweet-one-strawberry-blush',
      title: 'Sweet ONE Berry Blush & Florals',
      eventTypes: ['first-birthday'],
      culturalStyles: ['pastel', 'cute'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'circle', fit: 'cover', position: 'center', border: 'pink' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#BE123C',
        secondary: '#FB7185',
        accent: '#059669',
        textPrimary: '#881337',
        textSecondary: '#9F1239',
        border: '#FECDD3'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'firstbday-traditional-ayushya-pooja',
      title: 'Ayushya Homam & 1st Birthday Pooja',
      eventTypes: ['first-birthday'],
      culturalStyles: ['traditional', 'vedic'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#D97706',
        accent: '#EA580C',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'kalash-diya',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'firstbday-rainbow-confetti-splash',
      title: 'Rainbow Confetti & Balloon Fiesta',
      eventTypes: ['first-birthday'],
      culturalStyles: ['vibrant', 'party'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'rounded', fit: 'cover', position: 'center', border: 'cyan' }],
      palette: {
        background: '#EFF6FF',
        card: '#FFFFFF',
        primary: '#2563EB',
        secondary: '#EC4899',
        accent: '#F59E0B',
        textPrimary: '#1E3A8A',
        textSecondary: '#1D4ED8',
        border: '#BFDBFE'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'firstbday-minimal-one-typography',
      title: 'Modern Typographic Number ONE (No Photo)',
      eventTypes: ['first-birthday'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#F8FAFC',
        card: '#FFFFFF',
        primary: '#0F172A',
        secondary: '#3B82F6',
        accent: '#F59E0B',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        border: '#E2E8F0'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Playfair Display', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'firstbday-teddy-bear-butter-yellow',
      title: 'Teddy Bear Picnic & Butter Yellow',
      eventTypes: ['first-birthday'],
      culturalStyles: ['korean-pastel', 'cute'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'circle', fit: 'cover', position: 'top', border: 'yellow' }],
      palette: {
        background: '#FEFCE8',
        card: '#FFFFFF',
        primary: '#A16207',
        secondary: '#D97706',
        accent: '#65A30D',
        textPrimary: '#713F12',
        textSecondary: '#854D0E',
        border: '#FEF08A'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'firstbday-baby-milestones-triple',
      title: 'Year in Review Dual Milestone Photo',
      eventTypes: ['first-birthday'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'newborn', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'oneYear', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#FDFBF7',
        card: '#FFFFFF',
        primary: '#92400E',
        secondary: '#D97706',
        accent: '#2563EB',
        textPrimary: '#1E293B',
        textSecondary: '#475569',
        border: '#CBD5E1'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'firstbday-art-deco-little-gatsby',
      title: 'Little Gatsby Black & Gold 1st Bash',
      eventTypes: ['first-birthday'],
      culturalStyles: ['art-deco', 'luxury'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'hex', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#09090B',
        card: '#18181B',
        primary: '#EAB308',
        secondary: '#CA8A04',
        accent: '#FEF08A',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#3F3F46'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'firstbday-fullbleed-cake-smash',
      title: 'Full Bleed Cake Smash Joy Portrait',
      eventTypes: ['first-birthday'],
      culturalStyles: ['photo-led', 'vibrant'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'baby', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-soft' }],
      palette: {
        background: '#18181B',
        card: 'rgba(24, 24, 27, 0.78)',
        primary: '#FBBF24',
        secondary: '#38BDF8',
        accent: '#F43F5E',
        textPrimary: '#FFFFFF',
        textSecondary: '#F1F5F9',
        border: 'rgba(255, 255, 255, 0.25)'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 11. KIDS & TEEN BIRTHDAY (10 Distinct Templates)
    // ==========================================
    {
      id: 'kidsbday-superhero-comic-action',
      title: 'Superhero Comic Blast & Neon Action',
      eventTypes: ['kids-birthday'],
      culturalStyles: ['comic', 'vibrant'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'rounded', fit: 'cover', position: 'center', border: 'comic-red' }],
      palette: {
        background: '#0F172A',
        card: '#1E293B',
        primary: '#EF4444',
        secondary: '#3B82F6',
        accent: '#FACC15',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        border: '#DC2626'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'kidsbday-enchanted-princess-castle',
      title: 'Enchanted Princess Castle & Tiara',
      eventTypes: ['kids-birthday'],
      culturalStyles: ['fairytale', 'pastel'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'center', border: 'pink-gold' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#BE123C',
        secondary: '#D97706',
        accent: '#FB7185',
        textPrimary: '#881337',
        textSecondary: '#9F1239',
        border: '#FECDD3'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'kidsbday-space-astronaut-galaxy',
      title: 'Cosmic Galaxy & Astronaut Explorer',
      eventTypes: ['kids-birthday'],
      culturalStyles: ['celestial', 'modern'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'top', border: 'cyan' }],
      palette: {
        background: '#0B0F19',
        card: '#111827',
        primary: '#38BDF8',
        secondary: '#A855F7',
        accent: '#FACC15',
        textPrimary: '#F9FAFB',
        textSecondary: '#CBD5E1',
        border: '#1E293B'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'kidsbday-gaming-level-unlocked',
      title: 'Gamer Party: Level Up Unlocked',
      eventTypes: ['kids-birthday'],
      culturalStyles: ['neon', 'gaming'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'hex', fit: 'cover', position: 'center', border: 'neon-green' }],
      palette: {
        background: '#09090B',
        card: '#18181B',
        primary: '#22C55E',
        secondary: '#3B82F6',
        accent: '#A855F7',
        textPrimary: '#F0FDF4',
        textSecondary: '#86EFAC',
        border: '#15803D'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'kidsbday-pool-party-splash',
      title: 'Splash Pool Party & Summer Popsicles',
      eventTypes: ['kids-birthday', 'pool-party'],
      culturalStyles: ['tropical', 'vibrant'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'rounded', fit: 'cover', position: 'top', border: 'aqua' }],
      palette: {
        background: '#ECFEFF',
        card: '#FFFFFF',
        primary: '#0891B2',
        secondary: '#F59E0B',
        accent: '#EC4899',
        textPrimary: '#164E63',
        textSecondary: '#0E7490',
        border: '#A5F3FC'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'kidsbday-minimal-clean-typography',
      title: 'Clean Balloon & Candy Party (No Photo)',
      eventTypes: ['kids-birthday'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FAF5FF',
        card: '#FFFFFF',
        primary: '#7E22CE',
        secondary: '#EC4899',
        accent: '#F59E0B',
        textPrimary: '#581C87',
        textSecondary: '#6B21A8',
        border: '#E9D5FF'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Playfair Display', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'kidsbday-dino-jurassic-adventure',
      title: 'Dino Jurassic Safari Adventure',
      eventTypes: ['kids-birthday'],
      culturalStyles: ['adventure', 'earthy'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'portrait', fit: 'cover', position: 'top', border: 'olive' }],
      palette: {
        background: '#FEFCE8',
        card: '#FFFFFF',
        primary: '#4D7C0F',
        secondary: '#C2410C',
        accent: '#A16207',
        textPrimary: '#365314',
        textSecondary: '#4D7C0F',
        border: '#FEF08A'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'kidsbday-twins-double-fun',
      title: 'Double the Joy: Twins Birthday Bash',
      eventTypes: ['kids-birthday'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'twin1', shape: 'portrait', fit: 'cover', position: 'left', border: 'blue' },
        { id: 'twin2', shape: 'portrait', fit: 'cover', position: 'right', border: 'pink' }
      ],
      palette: {
        background: '#F0FDFA',
        card: '#FFFFFF',
        primary: '#0D9488',
        secondary: '#F43F5E',
        accent: '#F59E0B',
        textPrimary: '#134E4A',
        textSecondary: '#115E59',
        border: '#CCFBF1'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'kidsbday-carnival-circus-tent',
      title: 'Carnival Magic & Circus Popcorn',
      eventTypes: ['kids-birthday'],
      culturalStyles: ['carnival', 'vibrant'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'top', border: 'red-yellow' }],
      palette: {
        background: '#FEF2F2',
        card: '#FFFFFF',
        primary: '#DC2626',
        secondary: '#D97706',
        accent: '#2563EB',
        textPrimary: '#991B1B',
        textSecondary: '#B91C1C',
        border: '#FECACA'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'kidsbday-fullbleed-birthday-joy',
      title: 'Full Bleed Candid Birthday Smile',
      eventTypes: ['kids-birthday'],
      culturalStyles: ['photo-led', 'cinematic'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-soft' }],
      palette: {
        background: '#09090B',
        card: 'rgba(9, 9, 11, 0.76)',
        primary: '#FACC15',
        secondary: '#38BDF8',
        accent: '#F43F5E',
        textPrimary: '#FFFFFF',
        textSecondary: '#F1F5F9',
        border: 'rgba(255, 255, 255, 0.2)'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 12. MILESTONE & ADULT BIRTHDAY (10 Distinct Templates)
    // ==========================================
    {
      id: 'milestone-cheers-to-30-noir-gold',
      title: 'Cheers to 30/40/50: Noir & Gilded Gold',
      eventTypes: ['milestone-birthday', 'adult-birthday'],
      culturalStyles: ['luxury', 'art-deco'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'hex', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#09090B',
        card: '#18181B',
        primary: '#EAB308',
        secondary: '#CA8A04',
        accent: '#FEF08A',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#3F3F46'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'milestone-roaring-champagne-toast',
      title: 'Champagne Tower & Midnight Confetti',
      eventTypes: ['milestone-birthday', 'adult-birthday', 'cocktail-party'],
      culturalStyles: ['party', 'glamour'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'center', border: 'champagne' }],
      palette: {
        background: '#111827',
        card: '#1F2937',
        primary: '#FBBF24',
        secondary: '#F59E0B',
        accent: '#E11D48',
        textPrimary: '#F9FAFB',
        textSecondary: '#E5E7EB',
        border: '#374151'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Outfit', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'milestone-vintage-aged-to-perfection',
      title: 'Aged to Perfection: Vintage Whiskey & Oak',
      eventTypes: ['milestone-birthday', 'adult-birthday'],
      culturalStyles: ['vintage', 'rustic'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'portrait', fit: 'cover', position: 'top', border: 'leather' }],
      palette: {
        background: '#271B14',
        card: '#3D2A1F',
        primary: '#D97706',
        secondary: '#B45309',
        accent: '#CA8A04',
        textPrimary: '#FEF3C7',
        textSecondary: '#FDE68A',
        border: '#78350F'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'milestone-french-rose-fabulous',
      title: 'Fabulous at 40/50: Rose Blush & Sage',
      eventTypes: ['milestone-birthday', 'adult-birthday'],
      culturalStyles: ['french-romantic', 'botanical'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'center', border: 'rose' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#BE123C',
        secondary: '#059669',
        accent: '#FB7185',
        textPrimary: '#881337',
        textSecondary: '#9F1239',
        border: '#FECDD3'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'milestone-clean-bold-numbers',
      title: 'Bold Statement Milestone (No Photo)',
      eventTypes: ['milestone-birthday', 'adult-birthday'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#18181B',
        card: '#27272A',
        primary: '#FAFAFA',
        secondary: '#EAB308',
        accent: '#A1A1AA',
        textPrimary: '#FAFAFA',
        textSecondary: '#D4D4D8',
        border: '#3F3F46'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'milestone-60-shashti-poorthi-temple',
      title: 'Shashti Poorthi 60th / Bheema Ratha Vedic Blessings',
      eventTypes: ['milestone-birthday', 'adult-birthday'],
      culturalStyles: ['vedic', 'traditional'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#FFF9F2',
        card: '#FFFFFF',
        primary: '#800020',
        secondary: '#C5A059',
        accent: '#D97706',
        textPrimary: '#4A0E17',
        textSecondary: '#78350F',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'temple-arch-kolam',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'milestone-rooftop-cocktail-sunset',
      title: 'Rooftop Cocktails & Sunset Skyline',
      eventTypes: ['milestone-birthday', 'adult-birthday'],
      culturalStyles: ['modern', 'sunset'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'portrait', fit: 'cover', position: 'top', border: 'orange' }],
      palette: {
        background: '#2A0845',
        card: '#4B1248',
        primary: '#FBBF24',
        secondary: '#F43F5E',
        accent: '#FB923C',
        textPrimary: '#FFF1F2',
        textSecondary: '#FED7AA',
        border: '#7C2D12'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'milestone-then-and-now-dual',
      title: 'Then & Now Milestone Retrospective',
      eventTypes: ['milestone-birthday', 'adult-birthday'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'young', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'today', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#FDFBF7',
        card: '#FFFFFF',
        primary: '#1E293B',
        secondary: '#CA8A04',
        accent: '#D97706',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        border: '#E2E8F0'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'milestone-regal-emerald-mandala',
      title: 'Regal Emerald & Golden Jubilee 50/75',
      eventTypes: ['milestone-birthday', 'adult-birthday'],
      culturalStyles: ['royal', 'heritage'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#022C22',
        card: '#064E3B',
        primary: '#FBBF24',
        secondary: '#10B981',
        accent: '#D4AF37',
        textPrimary: '#ECFDF5',
        textSecondary: '#D1FAE5',
        border: '#059669'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mandala-center',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'milestone-fullbleed-portrait-elegance',
      title: 'Full Bleed Monochromatic Portrait Elegance',
      eventTypes: ['milestone-birthday', 'adult-birthday'],
      culturalStyles: ['photo-led', 'editorial'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-dark' }],
      palette: {
        background: '#09090B',
        card: 'rgba(9, 9, 11, 0.8)',
        primary: '#FAFAFA',
        secondary: '#EAB308',
        accent: '#E4E4E7',
        textPrimary: '#FFFFFF',
        textSecondary: '#E2E8F0',
        border: 'rgba(255, 255, 255, 0.2)'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 13. DIWALI & CULTURAL FESTIVALS (10 Distinct Templates)
    // ==========================================
    {
      id: 'diwali-sacred-lakshmi-diya-gold',
      title: 'Sacred Lakshmi Pooja & Golden Diya Radiance',
      eventTypes: ['diwali-gathering', 'religious-cultural'],
      culturalStyles: ['vedic', 'festive'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'family', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#D97706',
        accent: '#DC2626',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'kalash-diya',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'diwali-midnight-sky-fireworks',
      title: 'Midnight Fireworks & Sparklers Celebration',
      eventTypes: ['diwali-gathering'],
      culturalStyles: ['festive', 'vibrant'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'family', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#0B132B',
        card: '#1C2541',
        primary: '#FBBF24',
        secondary: '#F59E0B',
        accent: '#EF4444',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        border: '#334155'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'diwali-royal-rangoli-mandala',
      title: 'Royal Rangoli & Diya Garland Mandala',
      eventTypes: ['diwali-gathering'],
      culturalStyles: ['royal', 'traditional'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'family', shape: 'circle', fit: 'cover', position: 'center', border: 'brass-gold' }],
      palette: {
        background: '#1F060B',
        card: '#300A12',
        primary: '#FBBF24',
        secondary: '#C5A059',
        accent: '#BE123C',
        textPrimary: '#FFF1F2',
        textSecondary: '#FDE68A',
        border: '#9F1239'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mandala-center',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'diwali-marigold-toran-festive',
      title: 'Marigold Blossom Toran & Sweet Feast',
      eventTypes: ['diwali-gathering'],
      culturalStyles: ['traditional', 'festive'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'family', shape: 'portrait', fit: 'cover', position: 'top', border: 'marigold' }],
      palette: {
        background: '#FEF3C7',
        card: '#FFFFFF',
        primary: '#C2410C',
        secondary: '#D97706',
        accent: '#B45309',
        textPrimary: '#7C2D12',
        textSecondary: '#9A3412',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'marigold-toran',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'diwali-deepavali-shubhkamnaye-clean',
      title: 'Deepavali Shubh Deepam (No Photo)',
      eventTypes: ['diwali-gathering'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#D97706',
        accent: '#F59E0B',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'diwali-mughal-palace-lanterns',
      title: 'Mughal Palace Diya Arches & Lanterns',
      eventTypes: ['diwali-gathering'],
      culturalStyles: ['mughal', 'heritage'],
      layout: 'mughal-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'family', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#18181B',
        card: '#27272A',
        primary: '#FBBF24',
        secondary: '#CA8A04',
        accent: '#EA580C',
        textPrimary: '#FEF9C3',
        textSecondary: '#FDE047',
        border: '#854D0E'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Outfit', sans-serif" },
      decorationPack: 'mughal-arch',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'diwali-card-party-teen-patti',
      title: 'Diwali Taash Card Party & Cocktails',
      eventTypes: ['diwali-gathering', 'cocktail-party'],
      culturalStyles: ['party', 'modern'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'family', shape: 'hex', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#09090B',
        card: '#18181B',
        primary: '#EAB308',
        secondary: '#EF4444',
        accent: '#CA8A04',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#3F3F46'
      },
      typography: { heading: "'Cinzel', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'diwali-dual-pooja-and-party',
      title: 'Pooja by Day, Party by Night (Dual Photo)',
      eventTypes: ['diwali-gathering'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'pooja', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'party', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#FFF7ED',
        card: '#FFFFFF',
        primary: '#C2410C',
        secondary: '#D97706',
        accent: '#B45309',
        textPrimary: '#7C2D12',
        textSecondary: '#9A3412',
        border: '#FED7AA'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'diwali-botanical-lotus-radiance',
      title: 'Botanical Sacred Pink Lotus & Gold Diyas',
      eventTypes: ['diwali-gathering'],
      culturalStyles: ['botanical', 'sacred'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'family', shape: 'circle', fit: 'cover', position: 'center', border: 'lotus-pink' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#BE123C',
        secondary: '#D97706',
        accent: '#059669',
        textPrimary: '#881337',
        textSecondary: '#9F1239',
        border: '#FECDD3'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'diwali-fullbleed-diya-sea-night',
      title: 'Full Bleed Golden Diya Lights at Twilight',
      eventTypes: ['diwali-gathering'],
      culturalStyles: ['photo-led', 'cinematic'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'family', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-warm' }],
      palette: {
        background: '#1F060B',
        card: 'rgba(31, 6, 11, 0.82)',
        primary: '#FBBF24',
        secondary: '#F59E0B',
        accent: '#EF4444',
        textPrimary: '#FFFFFF',
        textSecondary: '#FEF3C7',
        border: 'rgba(251, 191, 36, 0.3)'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 14. CORPORATE & PRODUCT LAUNCH (10 Distinct Templates)
    // ==========================================
    {
      id: 'corporate-keynote-tech-minimal',
      title: 'Executive Keynote & Tech Elevation',
      eventTypes: ['corporate-launch', 'business-opening'],
      culturalStyles: ['modern', 'corporate'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'speaker', shape: 'portrait', fit: 'cover', position: 'top', border: 'blue' }],
      palette: {
        background: '#0B0F19',
        card: '#111827',
        primary: '#38BDF8',
        secondary: '#6366F1',
        accent: '#10B981',
        textPrimary: '#F9FAFB',
        textSecondary: '#CBD5E1',
        border: '#1F2937'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'corporate-grand-store-opening-gold',
      title: 'Grand Store Opening & Ribbon Cutting',
      eventTypes: ['corporate-launch', 'business-opening'],
      culturalStyles: ['luxury', 'celebratory'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'store', shape: 'hex', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#09090B',
        card: '#18181B',
        primary: '#EAB308',
        secondary: '#CA8A04',
        accent: '#FEF08A',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#3F3F46'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'corporate-annual-gala-black-tie',
      title: 'Annual Excellence Awards & Gala Dinner',
      eventTypes: ['corporate-launch'],
      culturalStyles: ['luxury', 'black-tie'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'logo', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#18181B',
        card: '#27272A',
        primary: '#FBBF24',
        secondary: '#E5E7EB',
        accent: '#38BDF8',
        textPrimary: '#FAFAFA',
        textSecondary: '#D4D4D8',
        border: '#3F3F46'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'corporate-clean-white-conference',
      title: 'Swiss Clean Typography Conference (No Photo)',
      eventTypes: ['corporate-launch'],
      culturalStyles: ['minimalist', 'swiss'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FFFFFF',
        card: '#F8FAFC',
        primary: '#0F172A',
        secondary: '#2563EB',
        accent: '#059669',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        border: '#E2E8F0'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'corporate-inauguration-pooja-brass',
      title: 'Office Inauguration & Auspicious Pooja',
      eventTypes: ['corporate-launch', 'business-opening'],
      culturalStyles: ['traditional', 'vedic'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'office', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#D97706',
        accent: '#15803D',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'kalash-diya',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'corporate-founder-fireside-dual',
      title: 'Fireside Chat & Founder Panel (Dual Photo)',
      eventTypes: ['corporate-launch'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'speaker1', shape: 'portrait', fit: 'cover', position: 'left', border: 'blue' },
        { id: 'speaker2', shape: 'portrait', fit: 'cover', position: 'right', border: 'blue' }
      ],
      palette: {
        background: '#0B0F19',
        card: '#1E293B',
        primary: '#38BDF8',
        secondary: '#818CF8',
        accent: '#10B981',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        border: '#334155'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'corporate-startup-demo-day-violet',
      title: 'Demo Day & Investor Pitch Mixer',
      eventTypes: ['corporate-launch'],
      culturalStyles: ['modern', 'vibrant'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'product', shape: 'portrait', fit: 'cover', position: 'top', border: 'violet' }],
      palette: {
        background: '#1E1B4B',
        card: '#312E81',
        primary: '#A855F7',
        secondary: '#38BDF8',
        accent: '#FBBF24',
        textPrimary: '#FAF5FF',
        textSecondary: '#E9D5FF',
        border: '#4338CA'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'corporate-charity-fundraiser-botanical',
      title: 'Annual Charity Gala & Botanical Wreath',
      eventTypes: ['corporate-launch'],
      culturalStyles: ['botanical', 'formal'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'cause', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#F0FDF4',
        card: '#FFFFFF',
        primary: '#166534',
        secondary: '#B45309',
        accent: '#15803D',
        textPrimary: '#14532D',
        textSecondary: '#374151',
        border: '#BBF7D0'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'corporate-heritage-anniversary-mandala',
      title: 'Company Silver/Golden Jubilee Heritage',
      eventTypes: ['corporate-launch', 'anniversary'],
      culturalStyles: ['royal', 'heritage'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'founder', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#09090B',
        card: '#18181B',
        primary: '#EAB308',
        secondary: '#CA8A04',
        accent: '#38BDF8',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#3F3F46'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mandala-center',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'corporate-fullbleed-innovation-stage',
      title: 'Full Bleed Product Unveiling & Stage',
      eventTypes: ['corporate-launch'],
      culturalStyles: ['photo-led', 'futuristic'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'stage', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-dark' }],
      palette: {
        background: '#030712',
        card: 'rgba(3, 7, 18, 0.82)',
        primary: '#38BDF8',
        secondary: '#818CF8',
        accent: '#FBBF24',
        textPrimary: '#FFFFFF',
        textSecondary: '#CBD5E1',
        border: 'rgba(255, 255, 255, 0.2)'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 15. WEDDING ANNIVERSARY (10 Distinct Templates)
    // ==========================================
    {
      id: 'anniversary-silver-jubilee-25',
      title: '25th Silver Jubilee & Sterling Shine',
      eventTypes: ['anniversary'],
      culturalStyles: ['luxury', 'celebratory'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'circle', fit: 'cover', position: 'center', border: 'silver' }],
      palette: {
        background: '#0B0F19',
        card: '#111827',
        primary: '#E2E8F0',
        secondary: '#94A3B8',
        accent: '#38BDF8',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        border: '#334155'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'anniversary-golden-jubilee-50',
      title: '50th Golden Jubilee & Royal Diadem',
      eventTypes: ['anniversary'],
      culturalStyles: ['royal', 'heritage'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#1F060B',
        card: '#300A12',
        primary: '#FBBF24',
        secondary: '#C5A059',
        accent: '#BE123C',
        textPrimary: '#FFF1F2',
        textSecondary: '#FDE68A',
        border: '#9F1239'
      },
      typography: { heading: "'Cinzel', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mandala-center',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'anniversary-french-romantic-roses',
      title: 'Years of Love: French Romance & Blooming Roses',
      eventTypes: ['anniversary'],
      culturalStyles: ['french-romantic', 'botanical'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'circle', fit: 'cover', position: 'center', border: 'rose' }],
      palette: {
        background: '#FFF1F2',
        card: '#FFFFFF',
        primary: '#BE123C',
        secondary: '#059669',
        accent: '#FB7185',
        textPrimary: '#881337',
        textSecondary: '#9F1239',
        border: '#FECDD3'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'anniversary-then-and-now-split',
      title: 'Wedding Day & Today (30 Years Apart)',
      eventTypes: ['anniversary'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'weddingDay', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'today', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#FDFBF7',
        card: '#FFFFFF',
        primary: '#78350F',
        secondary: '#D97706',
        accent: '#92400E',
        textPrimary: '#1E293B',
        textSecondary: '#475569',
        border: '#CBD5E1'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'anniversary-traditional-vedic-blessings',
      title: 'Auspicious Vedic Anniversary & Kalash Pooja',
      eventTypes: ['anniversary'],
      culturalStyles: ['traditional', 'vedic'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#FFFBEB',
        card: '#FFFFFF',
        primary: '#B45309',
        secondary: '#D97706',
        accent: '#15803D',
        textPrimary: '#78350F',
        textSecondary: '#92400E',
        border: '#FDE68A'
      },
      typography: { heading: "'Rozha One', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'kalash-diya',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'anniversary-minimal-love-story-typography',
      title: 'One Lifetime of Love (No Photo)',
      eventTypes: ['anniversary'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FAFAF9',
        card: '#FFFFFF',
        primary: '#1C1917',
        secondary: '#78716C',
        accent: '#D97706',
        textPrimary: '#1C1917',
        textSecondary: '#57534E',
        border: '#E7E5E4'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'anniversary-champagne-sunset-dinner',
      title: 'Champagne Sunset & Intimate Dinner',
      eventTypes: ['anniversary', 'cocktail-party'],
      culturalStyles: ['modern', 'romantic'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'portrait', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#1F1235',
        card: '#2F1B4B',
        primary: '#FBBF24',
        secondary: '#F43F5E',
        accent: '#E879F9',
        textPrimary: '#FAF5FF',
        textSecondary: '#E9D5FF',
        border: '#581C87'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Outfit', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'anniversary-mughal-palace-wine',
      title: 'Mughal Mehrab & Deep Velvet Wine',
      eventTypes: ['anniversary'],
      culturalStyles: ['mughal', 'royal'],
      layout: 'mughal-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#2B0E1B',
        card: '#42162B',
        primary: '#FBBF24',
        secondary: '#D4AF37',
        accent: '#BE123C',
        textPrimary: '#FFF1F2',
        textSecondary: '#FECDD3',
        border: '#701A75'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mughal-arch',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'anniversary-emerald-elegance-50',
      title: 'Emerald Ivy & Golden Vows Renewal',
      eventTypes: ['anniversary'],
      culturalStyles: ['luxury', 'botanical'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'portrait', fit: 'cover', position: 'top', border: 'emerald-gold' }],
      palette: {
        background: '#022C22',
        card: '#064E3B',
        primary: '#FBBF24',
        secondary: '#10B981',
        accent: '#D4AF37',
        textPrimary: '#ECFDF5',
        textSecondary: '#D1FAE5',
        border: '#059669'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'anniversary-fullbleed-golden-hour',
      title: 'Full Bleed Golden Hour Couple Portrait',
      eventTypes: ['anniversary'],
      culturalStyles: ['photo-led', 'cinematic'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'couple', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-warm' }],
      palette: {
        background: '#1C1917',
        card: 'rgba(28, 25, 23, 0.82)',
        primary: '#FBBF24',
        secondary: '#FED7AA',
        accent: '#FDE047',
        textPrimary: '#FFFFFF',
        textSecondary: '#FEF3C7',
        border: 'rgba(255, 255, 255, 0.25)'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 16. COCKTAIL & DINNER PARTY (10 Distinct Templates)
    // ==========================================
    {
      id: 'cocktail-martini-olive-noir',
      title: 'Martini Shaken & Noir Velvet',
      eventTypes: ['cocktail-party', 'dinner-party'],
      culturalStyles: ['luxury', 'art-deco'],
      layout: 'art-deco-frame',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'hex', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#09090B',
        card: '#18181B',
        primary: '#EAB308',
        secondary: '#CA8A04',
        accent: '#FEF08A',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#3F3F46'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'cocktail-rooftop-neon-sparkle',
      title: 'Rooftop Neon Sparkles & Beats',
      eventTypes: ['cocktail-party'],
      culturalStyles: ['neon', 'party'],
      layout: 'festive-banner',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'rounded', fit: 'cover', position: 'center', border: 'neon' }],
      palette: {
        background: '#0F172A',
        card: '#1E293B',
        primary: '#F43F5E',
        secondary: '#38BDF8',
        accent: '#A855F7',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        border: '#334155'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'cocktail-candlelight-dinner-wine',
      title: 'Intimate Candlelight Dinner & Pinot Noir',
      eventTypes: ['cocktail-party', 'dinner-party'],
      culturalStyles: ['romantic', 'french-romantic'],
      layout: 'floating-card',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'portrait', fit: 'cover', position: 'top', border: 'wine' }],
      palette: {
        background: '#20080B',
        card: '#350E14',
        primary: '#FBBF24',
        secondary: '#FB7185',
        accent: '#E11D48',
        textPrimary: '#FFF1F2',
        textSecondary: '#FECDD3',
        border: '#4C0519'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'calligraphic-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'cocktail-tropical-tiki-sunset',
      title: 'Tropical Tiki Drinks & Sunset Palms',
      eventTypes: ['cocktail-party', 'pool-party'],
      culturalStyles: ['tropical', 'vibrant'],
      layout: 'framed-portrait',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'top', border: 'coral' }],
      palette: {
        background: '#FFF7ED',
        card: '#FFFFFF',
        primary: '#EA580C',
        secondary: '#0D9488',
        accent: '#F59E0B',
        textPrimary: '#7C2D12',
        textSecondary: '#9A3412',
        border: '#FDBA74'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'cocktail-clean-typographic-drinks',
      title: 'Drinks, Bites & Beats Minimal (No Photo)',
      eventTypes: ['cocktail-party', 'dinner-party'],
      culturalStyles: ['minimalist', 'clean'],
      layout: 'typographic-bold',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#121214',
        card: '#18181B',
        primary: '#F4F4F5',
        secondary: '#A1A1AA',
        accent: '#EAB308',
        textPrimary: '#FAFAFA',
        textSecondary: '#D4D4D8',
        border: '#27272A'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'cocktail-botanical-garden-spritz',
      title: 'Botanical Garden Spritz & Sage Leaves',
      eventTypes: ['cocktail-party', 'dinner-party'],
      culturalStyles: ['botanical', 'european'],
      layout: 'botanical-wreath',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'center', border: 'sage' }],
      palette: {
        background: '#F0FDF4',
        card: '#FFFFFF',
        primary: '#166534',
        secondary: '#B45309',
        accent: '#15803D',
        textPrimary: '#14532D',
        textSecondary: '#374151',
        border: '#BBF7D0'
      },
      typography: { heading: "'Cormorant Garamond', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'botanical-wreath',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'cocktail-vintage-speakeasy-copper',
      title: '1920s Speakeasy & Aged Copper Bar',
      eventTypes: ['cocktail-party'],
      culturalStyles: ['vintage', 'speakeasy'],
      layout: 'temple-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'arch', fit: 'cover', position: 'top', border: 'copper' }],
      palette: {
        background: '#1C1917',
        card: '#292524',
        primary: '#F97316',
        secondary: '#D97706',
        accent: '#CA8A04',
        textPrimary: '#FEF3C7',
        textSecondary: '#FDE68A',
        border: '#44403C'
      },
      typography: { heading: "'Cinzel', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'diamond-divider',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'cocktail-dual-hosts-celebration',
      title: 'Co-Hosts Evening Mixer (Dual Photo)',
      eventTypes: ['cocktail-party'],
      culturalStyles: ['contemporary', 'photo-led'],
      layout: 'side-by-side',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [
        { id: 'host1', shape: 'portrait', fit: 'cover', position: 'left', border: 'gold' },
        { id: 'host2', shape: 'portrait', fit: 'cover', position: 'right', border: 'gold' }
      ],
      palette: {
        background: '#0F172A',
        card: '#1E293B',
        primary: '#FBBF24',
        secondary: '#38BDF8',
        accent: '#F43F5E',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        border: '#334155'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: true
    },
    {
      id: 'cocktail-golden-chandelier-soiree',
      title: 'Midnight Soirée & Golden Chandelier',
      eventTypes: ['cocktail-party', 'dinner-party'],
      culturalStyles: ['luxury', 'regal'],
      layout: 'royal-mandala',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#18181B',
        card: '#27272A',
        primary: '#EAB308',
        secondary: '#CA8A04',
        accent: '#FDE047',
        textPrimary: '#FEF08A',
        textSecondary: '#E4E4E7',
        border: '#52525B'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'mandala-center',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'cocktail-fullbleed-city-lights',
      title: 'Full Bleed City Skyline & Toast',
      eventTypes: ['cocktail-party'],
      culturalStyles: ['photo-led', 'cinematic'],
      layout: 'full-bleed-hero',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'full', fit: 'cover', position: 'background', overlay: 'gradient-dark' }],
      palette: {
        background: '#09090B',
        card: 'rgba(9, 9, 11, 0.8)',
        primary: '#FBBF24',
        secondary: '#38BDF8',
        accent: '#F43F5E',
        textPrimary: '#FFFFFF',
        textSecondary: '#CBD5E1',
        border: 'rgba(255, 255, 255, 0.2)'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 17. CHRISTMAS & HOLIDAY CELEBRATIONS
    // ==========================================
    {
      id: 'christmas-traditional-evergreen',
      title: 'Traditional Christmas Eve Dinner & Caroling',
      eventTypes: ['christmas-party', 'festivals'],
      culturalStyles: ['festive', 'traditional', 'botanical'],
      layout: 'centered-classic',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#0F382C', // Deep Evergreen
        card: '#164E3D',
        primary: '#FFFDF7', // Warm Cream
        secondary: '#D4AF37', // Restrained Gold
        accent: '#991B1B', // Cranberry Red
        textPrimary: '#FFFDF7',
        textSecondary: '#E2E8F0',
        border: '#D4AF37'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'holly-pine',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'christmas-cranberry-gold-soiree',
      title: 'Holiday Cocktail Soirée & Cranberry Mistletoe',
      eventTypes: ['christmas-party', 'festivals', 'cocktail-party'],
      culturalStyles: ['festive', 'art-deco'],
      layout: 'art-deco',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'circle', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#FFFDF9', // Warm Ivory
        card: '#FFFFFF',
        primary: '#881337', // Deep Cranberry
        secondary: '#C5A059', // Gilded Gold
        accent: '#15803D', // Pine Green
        textPrimary: '#4C0519',
        textSecondary: '#78350F',
        border: '#E5C378'
      },
      typography: { heading: "'Cinzel', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'art-deco-corner',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'christmas-winter-wonderland-silver',
      title: 'Winter Wonderland Gala & White Snowflake',
      eventTypes: ['christmas-party', 'festivals'],
      culturalStyles: ['minimalist', 'festive'],
      layout: 'minimal-modern',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'portrait', fit: 'cover', position: 'top', border: 'silver' }],
      palette: {
        background: '#0B192C', // Midnight Navy
        card: '#112542',
        primary: '#F8FAFC', // Snow White
        secondary: '#38BDF8', // Ice Cyan
        accent: '#E2E8F0', // Silver
        textPrimary: '#FFFFFF',
        textSecondary: '#CBD5E1',
        border: '#38BDF8'
      },
      typography: { heading: "'Outfit', sans-serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'festive-sparkles',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'christmas-holy-night-parchment',
      title: 'Silent Night Holy Christmas Blessing & Mass',
      eventTypes: ['christmas-party', 'festivals'],
      culturalStyles: ['traditional', 'festive'],
      layout: 'centered-classic',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FDFBF7', // Warm Parchment
        card: '#FFFFFF',
        primary: '#7F1D1D', // Deep Burgundy
        secondary: '#B45309', // Amber Gold
        accent: '#065F46', // Forest Green
        textPrimary: '#450A0A',
        textSecondary: '#78350F',
        border: '#D97706'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cormorant Garamond', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'holly-pine',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    },
    {
      id: 'christmas-family-gingerbread-gathering',
      title: 'Warm Hearth & Gingerbread Family Gathering',
      eventTypes: ['christmas-party', 'festivals'],
      culturalStyles: ['festive', 'boho'],
      layout: 'minimal-modern',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'arch', fit: 'cover', position: 'top', border: 'gold' }],
      palette: {
        background: '#23140C', // Warm Cinnamon
        card: '#321D12',
        primary: '#FED7AA', // Buttercream
        secondary: '#EA580C', // Spiced Orange
        accent: '#16A34A', // Holly Pine
        textPrimary: '#FFF7ED',
        textSecondary: '#FED7AA',
        border: '#EA580C'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Alex Brush', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'holly-pine',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },

    // ==========================================
    // 18. EID & ISLAMIC FESTIVALS
    // ==========================================
    {
      id: 'eid-crescent-moon-emerald',
      title: 'Eid Mubarak Crescent & Golden Minaret',
      eventTypes: ['eid-gathering', 'festivals'],
      culturalStyles: ['traditional', 'mughal', 'festive'],
      layout: 'mughal-arch',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [{ id: 'hero', shape: 'arch', fit: 'cover', position: 'center', border: 'gold' }],
      palette: {
        background: '#064E3B', // Deep Emerald
        card: '#085D47',
        primary: '#FEF3C7', // Warm Gold
        secondary: '#FBBF24',
        accent: '#10B981',
        textPrimary: '#FFFFFF',
        textSecondary: '#D1FAE5',
        border: '#FBBF24'
      },
      typography: { heading: "'Cinzel', serif", script: "'Great Vibes', cursive", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'crescent-star',
      supportsPhotoUpload: true,
      supportsMultiplePhotos: false
    },
    {
      id: 'eid-dawat-rose-water',
      title: 'Festive Eid Dawat & Royal Feast',
      eventTypes: ['eid-gathering', 'festivals', 'dinner-party'],
      culturalStyles: ['royal', 'festive'],
      layout: 'centered-classic',
      aspectRatios: ['4:5', '9:16', '1:1'],
      photoSlots: [],
      palette: {
        background: '#FFFAF0', // Warm Cream
        card: '#FFFFFF',
        primary: '#831843', // Deep Rose Wine
        secondary: '#D97706', // Amber Gold
        accent: '#047857', // Emerald
        textPrimary: '#500724',
        textSecondary: '#78350F',
        border: '#D97706'
      },
      typography: { heading: "'Playfair Display', serif", script: "'Cormorant Garamond', serif", body: "'Plus Jakarta Sans', sans-serif" },
      decorationPack: 'crescent-star',
      supportsPhotoUpload: false,
      supportsMultiplePhotos: false
    }
  ];

  // Helper dictionary mapping sub-events to their parent/related event (same domain only)
  const EVENT_FALLBACK_MAP = {
    'roka': 'engagement',
    'nischayathartham': 'engagement',
    'save-the-date': 'wedding',
    'bridal-shower': 'wedding',
    'wedding-itinerary': 'wedding',
    'destination-wedding': 'wedding',
    'varmala-ceremony': 'wedding',
    'tamil-wedding': 'wedding',
    'telugu-wedding': 'wedding',
    'kannada-wedding': 'wedding',
    'malayalam-wedding': 'wedding',
    'punjabi-wedding': 'wedding',
    'nikah-walima': 'wedding',
    'christian-wedding': 'wedding',
    'reception': 'wedding',
    'adult-birthday': 'milestone-birthday',
    'surprise-birthday': 'milestone-birthday',
    'retirement': 'milestone-birthday',
    'graduation': 'milestone-birthday',
    'kids-birthday': 'first-birthday',
    'bhoomi-pooja': 'housewarming',
    'cradle-ceremony': 'naming-ceremony',
    'valaikappu': 'baby-shower',
    'godh-bharai': 'baby-shower',
    'baptism': 'naming-ceremony',
    'silver-jubilee': 'anniversary',
    'golden-jubilee': 'anniversary',
    'family-reunion': 'anniversary',
    'ganesh-chaturthi': 'diwali-gathering',
    'navratri-garba': 'sangeet',
    'pongal-sankranti': 'diwali-gathering',
    'eid-gathering': 'diwali-gathering',
    'christmas-party': 'christmas-party',
    'business-opening': 'corporate-launch',
    'networking-event': 'corporate-launch',
    'awards-ceremony': 'corporate-launch',
    'dinner-party': 'cocktail-party',
    'pool-party': 'cocktail-party',
    'farewell-party': 'cocktail-party',
    'custom-event': 'cocktail-party'
  };

  // Layer B & C: Named Curated Color Systems (Accessible WCAG AA contrast)
  const CURATED_PALETTES = [
    {
      id: 'traditional-south-indian',
      name: 'Traditional South Indian',
      occasion: 'wedding',
      background: '#FFF9F0',
      card: '#FFFFFF',
      primary: '#800020', // Deep Maroon
      secondary: '#C5A059', // Antique Gold
      accent: '#15803D', // Restrained Green
      textPrimary: '#4A0E17',
      textSecondary: '#78350F',
      border: '#E5C378'
    },
    {
      id: 'royal-indian-wedding',
      name: 'Royal Indian Wedding',
      occasion: 'wedding',
      background: '#1A0B0E', // Rich Burgundy
      card: '#291016',
      primary: '#FBBF24', // Muted Gold
      secondary: '#BE123C', // Ruby
      accent: '#064E3B', // Forest Green
      textPrimary: '#FFFDF7',
      textSecondary: '#E2E8F0',
      border: '#FBBF24'
    },
    {
      id: 'haldi-celebration',
      name: 'Haldi Celebration',
      occasion: 'wedding',
      background: '#FEF3C7', // Turmeric Yellow
      card: '#FFFFFF',
      primary: '#B45309', // Marigold
      secondary: '#D97706',
      accent: '#15803D', // Leaf Green
      textPrimary: '#78350F',
      textSecondary: '#92400E',
      border: '#F59E0B'
    },
    {
      id: 'mehendi-emerald',
      name: 'Mehendi & Emerald',
      occasion: 'wedding',
      background: '#F7FEE7', // Henna Neutral
      card: '#FFFFFF',
      primary: '#365314', // Deep Olive
      secondary: '#4D7C0F',
      accent: '#C2410C', // Terracotta
      textPrimary: '#14532D',
      textSecondary: '#365314',
      border: '#65A30D'
    },
    {
      id: 'children-birthday',
      name: "Children's Birthday",
      occasion: 'birthday',
      background: '#FFFFFF',
      card: '#F0F9FF',
      primary: '#0284C7', // Sky Blue
      secondary: '#F59E0B', // Butter Yellow
      accent: '#F43F5E', // Coral
      textPrimary: '#0F172A',
      textSecondary: '#475569',
      border: '#BAE6FD'
    },
    {
      id: 'adult-milestone-gold',
      name: 'Adult Milestone Noir & Gold',
      occasion: 'birthday',
      background: '#09090B', // Charcoal Noir
      card: '#18181B',
      primary: '#FBBF24', // Champagne Gold
      secondary: '#EAB308',
      accent: '#A1A1AA', // Slate
      textPrimary: '#F8FAFC',
      textSecondary: '#CBD5E1',
      border: 'rgba(250, 204, 21, 0.4)'
    },
    {
      id: 'baby-shower-sage',
      name: 'Baby Shower Soft Sage & Rose',
      occasion: 'baby-shower',
      background: '#F8FAF8', // Soft Sage Tint
      card: '#FFFFFF',
      primary: '#166534', // Sage Green
      secondary: '#DB2777', // Soft Rose
      accent: '#854D0E', // Warm Gold
      textPrimary: '#1E293B',
      textSecondary: '#475569',
      border: '#BBF7D0'
    },
    {
      id: 'housewarming-terracotta',
      name: 'Housewarming Terracotta & Olive',
      occasion: 'housewarming',
      background: '#FFF7ED', // Warm Ivory
      card: '#FFFFFF',
      primary: '#9A3412', // Terracotta
      secondary: '#15803D', // Olive
      accent: '#D97706', // Marigold
      textPrimary: '#431407',
      textSecondary: '#78350F',
      border: '#FDBA74'
    },
    {
      id: 'corporate-navy-slate',
      name: 'Corporate Navy & White',
      occasion: 'corporate',
      background: '#FFFFFF',
      card: '#F8FAFC',
      primary: '#0F172A', // Slate 900
      secondary: '#2563EB', // Cobalt Accent
      accent: '#0284C7',
      textPrimary: '#0F172A',
      textSecondary: '#334155',
      border: '#CBD5E1'
    },
    {
      id: 'christmas-evergreen-cranberry',
      name: 'Christmas Evergreen & Cranberry',
      occasion: 'festivals',
      background: '#0F382C', // Evergreen
      card: '#164E3D',
      primary: '#FFFDF7', // Cream
      secondary: '#D4AF37', // Gold
      accent: '#991B1B', // Cranberry
      textPrimary: '#FFFDF7',
      textSecondary: '#E2E8F0',
      border: '#D4AF37'
    },
    {
      id: 'diwali-deep-plum-gold',
      name: 'Diwali Deep Plum & Marigold',
      occasion: 'festivals',
      background: '#2D0A27', // Deep Plum
      card: '#3D1236',
      primary: '#FBBF24', // Diya Gold
      secondary: '#EA580C', // Marigold
      accent: '#FB7185',
      textPrimary: '#FFFDF7',
      textSecondary: '#FEF08A',
      border: '#F59E0B'
    }
  ];

  // Bubbli 3.0: Enrich all templates with authentic sample assets and distinct layout archetypes
  RAW_TEMPLATES.forEach(function (t) {
    var id = (t.id || '').toLowerCase();
    var events = t.eventTypes || [];
    var styles = t.culturalStyles || [];

    // 1. Assign distinctive layout archetype
    if (events.includes('first-birthday') || events.includes('kids-birthday') || id.includes('safari') || id.includes('wild-one') || id.includes('princess')) {
      t.layout = 'playful-balloons';
    } else if (events.includes('housewarming') || id.includes('housewarming') || id.includes('griha') || id.includes('villa') || id.includes('kalash')) {
      t.layout = (id.includes('villa') || id.includes('modern')) ? 'split-screen' : 'illustrated-home';
    } else if (events.includes('baby-shower') || events.includes('naming-ceremony') || id.includes('baby') || id.includes('cradle') || id.includes('seemantham')) {
      t.layout = 'sweet-miracle';
    } else if (events.includes('corporate-launch') || events.includes('business-opening') || id.includes('corporate') || id.includes('keynote') || id.includes('summit')) {
      t.layout = 'corporate-keynote';
    } else if (id.includes('art-deco') || id.includes('milestone') || id.includes('30th') || id.includes('50th') || id.includes('jubilee')) {
      t.layout = 'art-deco-glam';
    } else if (id.includes('rajputana') || id.includes('royal') || id.includes('mandala')) {
      t.layout = 'royal-mandala';
    } else if (id.includes('editorial') || id.includes('cinematic') || id.includes('destination') || id.includes('hero')) {
      t.layout = 'cinematic-cover';
    } else if (id.includes('side-by-side') || id.includes('modern-split') || id.includes('contemporary')) {
      t.layout = 'split-screen';
    }

    // 2. Assign authentic sample photography and vector artwork
    if (id.includes('haldi')) {
      t.samplePhoto = 'assets/images/wedding-haldi-ceremony.svg';
    } else if (id.includes('mehendi') || id.includes('sangeet')) {
      t.samplePhoto = 'assets/images/wedding-mehendi-art.svg';
    } else if (id.includes('nikah') || id.includes('mughal') || id.includes('mehrab')) {
      t.samplePhoto = 'assets/images/wedding-ai-nikah.webp';
    } else if (id.includes('christian') || id.includes('matrimony') || id.includes('chapel')) {
      t.samplePhoto = 'assets/images/wedding-ai-chapel.webp';
    } else if (id.includes('safari') || id.includes('wild-one')) {
      t.samplePhoto = 'assets/images/birthday-safari-wild-one.svg';
    } else if (id.includes('princess') || id.includes('fairy')) {
      t.samplePhoto = 'assets/images/birthday-princess-castle.svg';
    } else if (id.includes('milestone') || id.includes('30th') || id.includes('50th') || id.includes('adult-birthday') || id.includes('cheers')) {
      t.samplePhoto = 'assets/images/birthday-milestone-gold.svg';
    } else if (id.includes('kalash') || id.includes('pooja') || id.includes('traditional-toran')) {
      t.samplePhoto = 'assets/images/housewarming-pooja-kalash.svg';
    } else if (id.includes('cradle') || id.includes('naming')) {
      t.samplePhoto = 'assets/images/babyshower-cradle-stars.svg';
    } else if (id.includes('diwali') || id.includes('deepavali')) {
      t.samplePhoto = 'assets/images/festival-diwali-grand.svg';
    } else if (id.includes('christmas') || id.includes('xmas')) {
      t.samplePhoto = 'assets/images/festival-christmas-cozy.svg';
    } else if (id.includes('anniversary') || id.includes('jubilee')) {
      t.samplePhoto = 'assets/images/anniversary-golden-jubilee.svg';
    } else if (id.includes('tech-minimal') || id.includes('abstract') || id.includes('summit')) {
      t.samplePhoto = 'assets/images/corporate-summit-abstract.svg';
    } else if (events.includes('wedding')) {
      if (styles.includes('south-indian') || styles.includes('tamil') || styles.includes('telugu') || styles.includes('kannada') || styles.includes('malayalam')) {
        t.samplePhoto = 'assets/images/wedding-ai-south-indian.webp';
      } else if (id.includes('rajputana') || id.includes('royal') || styles.includes('regal')) {
        t.samplePhoto = 'assets/images/wedding-ai-royal-courtyard.webp';
      } else {
        t.samplePhoto = 'assets/images/wedding-ai-south-indian.webp';
      }
    } else if (events.includes('engagement')) {
      t.samplePhoto = 'assets/images/wedding-ai-royal-courtyard.webp';
    } else if (events.includes('first-birthday') || events.includes('kids-birthday')) {
      t.samplePhoto = 'assets/images/birthday-baby-boy.jpg';
    } else if (events.includes('adult-birthday') || events.includes('milestone-birthday')) {
      t.samplePhoto = 'assets/images/birthday-milestone-gold.svg';
    } else if (events.includes('housewarming')) {
      t.samplePhoto = 'assets/images/housewarming-entrance.jpg';
    } else if (events.includes('baby-shower') || events.includes('valaikappu')) {
      t.samplePhoto = 'assets/images/babyshower-mother.jpg';
    } else if (events.includes('naming-ceremony') || events.includes('cradle-ceremony')) {
      t.samplePhoto = 'assets/images/babyshower-cradle-stars.svg';
    } else if (events.includes('corporate-launch') || events.includes('business-opening')) {
      t.samplePhoto = 'assets/images/corporate-keynote.jpg';
    } else if (events.includes('diwali-gathering')) {
      t.samplePhoto = 'assets/images/festival-diwali-grand.svg';
    } else if (events.includes('christmas-party')) {
      t.samplePhoto = 'assets/images/festival-christmas-cozy.svg';
    } else if (events.includes('anniversary')) {
      t.samplePhoto = 'assets/images/anniversary-golden-jubilee.svg';
    } else {
      t.samplePhoto = 'assets/images/wedding-ai-south-indian.webp';
    }
  });

  return {
    RAW_TEMPLATES: RAW_TEMPLATES,
    CURATED_PALETTES: CURATED_PALETTES,

    getAllTemplates: function () {
      return RAW_TEMPLATES;
    },

    getTemplateById: function (id) {
      return RAW_TEMPLATES.find(t => t.id === id) || null;
    },

    getTemplatesForEvent: function (eventId) {
      if (!eventId) return RAW_TEMPLATES;

      // 1. Direct match
      let matches = RAW_TEMPLATES.filter(t => t.eventTypes && t.eventTypes.includes(eventId));
      if (matches.length >= 10) {
        return matches;
      }

      // 2. Fallback to same-domain parent/sibling event
      const fallbackEvent = EVENT_FALLBACK_MAP[eventId];
      if (fallbackEvent) {
        const fallbackMatches = RAW_TEMPLATES.filter(t => t.eventTypes && t.eventTypes.includes(fallbackEvent));
        const combined = [...matches];
        fallbackMatches.forEach(item => {
          if (!combined.some(existing => existing.id === item.id)) {
            combined.push(item);
          }
        });
        return combined;
      }

      // 3. Return genuine direct matches (never dump wedding cards as default!)
      return matches;
    },

    filterTemplates: function (filters = {}) {
      let results = [...RAW_TEMPLATES];

      if (filters.eventId) {
        results = this.getTemplatesForEvent(filters.eventId);
      }

      if (filters.style) {
        results = results.filter(t => t.culturalStyles && t.culturalStyles.includes(filters.style));
      }

      if (filters.hasPhoto !== undefined) {
        results = results.filter(t => t.supportsPhotoUpload === filters.hasPhoto);
      }

      if (filters.aspectRatio) {
        results = results.filter(t => t.aspectRatios && t.aspectRatios.includes(filters.aspectRatio));
      }

      if (filters.query && filters.query.trim()) {
        const q = filters.query.toLowerCase().trim();
        results = results.filter(t =>
          t.title.toLowerCase().includes(q) ||
          (t.culturalStyles && t.culturalStyles.some(s => s.toLowerCase().includes(q))) ||
          (t.layout && t.layout.toLowerCase().includes(q))
        );
      }

      return results;
    }
  };
}));

