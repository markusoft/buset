'use strict';
// Both links point to the SAME BUSET listing after Google Play publication.
// Leave empty to show honest coming-soon labels instead of dead download links.
const playStoreLinks = { free: '', full: '' };
const artwork = {
  cartoon: { name: 'Cartoon', description: 'Soft painted textures and warm, rounded details. A welcoming place to start your next game.', free: true },
  'hand-drawn': { name: 'Hand Drawn', description: 'Bold ink outlines and gentle pencil textures, with the charm of a board drawn by hand.', free: true },
  drawing: { name: 'Kids Drawing', description: 'Simple shapes, cheerful colors and playful drawings. A lighter look for your island.', free: true },
  kingdom: { name: 'Kingdom', description: 'Rich painted countryside, mountain ranges and little details for an island full of character.', free: false },
  '3d': { name: '3D', description: 'Forests and mountains with a miniature, tabletop feel. A different perspective on the same island.', free: false }
};
const tabs = [...document.querySelectorAll('[data-art]')];
function selectArtwork(tab, focus = false) {
  const key = tab.dataset.art, style = artwork[key];
  if (!style) return;
  tabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; });
  document.querySelector('#art-panel').setAttribute('aria-labelledby', tab.id);
  document.querySelector('#art-name').textContent = style.name;
  document.querySelector('#art-description').textContent = style.description;
  document.querySelector('#art-access').textContent = style.free ? 'Included in Free & Full' : 'Included in Full';
  const screenshot = `assets/android-builder-${key}.webp`;
  const image = document.querySelector('#art-image');
  image.src = screenshot; image.alt = `${style.name} Fog Island in the Android map builder`;
  const preview = document.querySelector('#art-preview');
  preview.dataset.preview = screenshot; preview.dataset.caption = `Fog Island map builder · ${style.name} artwork`;
  preview.setAttribute('aria-label', `Enlarge ${style.name} artwork screenshot`);
  document.querySelectorAll('#tile-samples img').forEach((tile, index) => {
    tile.src = `assets/${key}-${['sheep-1', 'wheat-1', 'ore-1'][index]}.webp`;
    tile.alt = `${style.name} ${['pasture', 'fields', 'mountains'][index]}`;
  });
  if (focus) tab.focus({ preventScroll: true });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectArtwork(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectArtwork(tabs[next], true); tabs[next].scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
  });
});
const dialog = document.querySelector('#screenshot-dialog');
document.querySelectorAll('[data-preview]').forEach(button => button.addEventListener('click', () => {
  const image = document.querySelector('#screenshot-full');
  image.src = button.dataset.preview; image.alt = button.dataset.caption;
  document.querySelector('#screenshot-caption').textContent = button.dataset.caption;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-store]').forEach(label => {
  const value = playStoreLinks[label.dataset.store];
  if (!value) return;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.hostname !== 'play.google.com') return;
    const link = document.createElement('a'); link.href = url.href;
    link.className = 'availability store-link'; link.textContent = 'View on Google Play ↗';
    label.replaceWith(link);
  } catch { /* Keep the coming-soon label when a URL is incomplete. */ }
});
