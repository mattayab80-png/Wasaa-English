/* ============================================================================
   ICONS.JS — Sprite d'icônes SVG inline, dessinées à la main (style "stroke"
   cohérent, 24x24, stroke-width 2). Évite toute dépendance externe (police
   d'icônes, CDN) afin que l'app reste 100% autonome et rapide à charger.
   ========================================================================== */

const ICONS = {
  house: `<svg viewBox="0 0 24 24"><path d="M3 11.5L12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9"/><path d="M9.5 20v-6h5v6"/></svg>`,
  heart: `<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.7-9.8-9.4C.8 7.2 2.4 4 5.6 3.4 8 3 10 4.2 12 6.6 14 4.2 16 3 18.4 3.4c3.2.6 4.8 3.8 3.4 7.2C19.5 15.3 12 20 12 20z"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 5H5a2 2 0 0 0 0 4h.5"/><path d="M16 5h3a2 2 0 0 1 0 4h-.5"/><path d="M9 20h6"/><path d="M12 13v4"/><path d="M9 20c0-2 1.3-3 3-3s3 1 3 3"/></svg>`,
  globe: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24"><path d="M5 15c0-6 5-11 14-11 0 9-5 14-11 14-2 0-3-1-3-3z"/><path d="M5 15c3-1 6-3 8-6"/></svg>`,
  speech: `<svg viewBox="0 0 24 24"><path d="M4 5h16v10H9l-4 4v-4H4V5z"/><path d="M8 9h8"/><path d="M8 12h5"/></svg>`,
  book: `<svg viewBox="0 0 24 24"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13z"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5c.8 0 1.5-.7 1.5-1.5v-13z"/></svg>`,
  plane: `<svg viewBox="0 0 24 24"><path d="M3 13l8-2 4-9 2 1-2 8 6 3-1 2-7-1-3 6-2-1 1-6-7-2 1-2z"/></svg>`,
  puzzle: `<svg viewBox="0 0 24 24"><path d="M9 4h3a1.5 1.5 0 1 1 0 3v1h4a1 1 0 0 1 1 1v4h-1a1.5 1.5 0 1 0 0 3h1v1a1 1 0 0 1-1 1h-4v-1a1.5 1.5 0 1 0-3 0v1H6a1 1 0 0 1-1-1v-4h1a1.5 1.5 0 1 0 0-3H5V9a1 1 0 0 1 1-1h3V7a1.5 1.5 0 0 1 0-3z"/></svg>`,
  flask: `<svg viewBox="0 0 24 24"><path d="M9 3h6"/><path d="M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3"/><path d="M7.5 15h9"/></svg>`,
  graduation: `<svg viewBox="0 0 24 24"><path d="M2 8l10-5 10 5-10 5-10-5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 8v6"/></svg>`,
  chip: `<svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 2v3M12 2v3M15 2v3M9 19v3M12 19v3M15 19v3M2 9h3M2 12h3M2 15h3M19 9h3M19 12h3M19 15h3"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24"><rect x="3" y="7.5" width="18" height="12" rx="1.5"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/></svg>`,
  layers: `<svg viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>`,
  star: `<svg viewBox="0 0 24 24"><path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.3 6.6 20.4l1-6.1-4.4-4.3 6.1-.9L12 3.5z"/></svg>`,
  flame: `<svg viewBox="0 0 24 24"><path d="M12 3c1 3-3 4-3 7.5a3 3 0 1 0 6 0c0-1 0-2-1-3 1.5.5 3.5 2.5 3.5 5.5a5.5 5.5 0 1 1-11 0C6.5 8.5 10 6.5 12 3z"/></svg>`,
  medal: `<svg viewBox="0 0 24 24"><circle cx="12" cy="15" r="6"/><path d="M9.5 9.5L7 2.5h3l2 5"/><path d="M14.5 9.5L17 2.5h-3l-2 5"/><path d="M12 12v6"/></svg>`,
  spark: `<svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>`,
  seed: `<svg viewBox="0 0 24 24"><path d="M12 22c-5-1-8-5-8-10C9 8 12 4 12 2c0 2 3 6 8 10 0 5-3 9-8 10z"/></svg>`,
  check: `<svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`,
  cross: `<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  lock: `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  flag: `<svg viewBox="0 0 24 24"><path d="M5 21V4"/><path d="M5 4h13l-3 4 3 4H5"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>`,
  user: `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
  settings: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 13a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V19a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H10a1.7 1.7 0 0 0 1-1.5V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V10c.3.4.8.7 1.5.8h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  bell: `<svg viewBox="0 0 24 24"><path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 6.5H4.5C4.5 14.5 6 13 6 9z"/><path d="M9.5 19a2.5 2.5 0 0 0 5 0"/></svg>`,
  volume: `<svg viewBox="0 0 24 24"><path d="M4 9.5v5h3.5L13 19V5L7.5 9.5H4z"/><path d="M16.5 9a3.5 3.5 0 0 1 0 6"/><path d="M18.8 6.7a7 7 0 0 1 0 10.6"/></svg>`,
  download: `<svg viewBox="0 0 24 24"><path d="M12 3v12M7 11l5 5 5-5"/><path d="M5 19h14"/></svg>`,
  upload: `<svg viewBox="0 0 24 24"><path d="M12 21V9M7 13l5-5 5 5"/><path d="M5 5h14"/></svg>`,
  trash: `<svg viewBox="0 0 24 24"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24"><path d="M20 11A8 8 0 1 0 18.5 16"/><path d="M20 5v6h-6"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"/></svg>`,
  compass: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2z"/></svg>`,
};

function getIcon(name, extraClass = "") {
  const svg = ICONS[name] || ICONS.star;
  return svg.replace("<svg ", `<svg class="icon ${extraClass}" aria-hidden="true" `);
}

window.ICONS = ICONS;
window.getIcon = getIcon;
