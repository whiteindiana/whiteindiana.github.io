'use strict';

// All content is present in HTML; these controls progressively enhance it.
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
header.classList.add('js-ready');

function closeMenu(restoreFocus = false) {
  const wasOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  if (restoreFocus && wasOpen) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu(true);
});
document.addEventListener('click', (event) => {
  if (!header.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 851px)').addEventListener('change', () => closeMenu());

const publications = [...document.querySelectorAll('.publication')];
const years = [...new Set(publications.map((item) => item.dataset.year))].sort((a, b) => Number(b) - Number(a));
const yearRange = years.length > 1 ? `${years.at(-1)}–${years[0]}` : (years[0] || 'All years');
const filterGroup = document.querySelector('.year-filters');
const filters = ['all', ...years].map((year) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.year = year;
  button.setAttribute('aria-pressed', String(year === 'all'));
  button.textContent = year === 'all' ? 'All years ' : year;
  if (year === 'all') {
    const total = document.createElement('span');
    total.textContent = String(publications.length);
    button.append(total);
  }
  return button;
});
filterGroup.replaceChildren(...filters);
const search = document.querySelector('#publication-search');
const emptyState = document.querySelector('.empty-state');
const results = document.querySelector('#results-count');
let selectedYear = 'all';
const normalize = (text) => text.toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[–—−]/g, '-');
const searchableText = new Map(publications.map((item) => [item, normalize(item.textContent)]));

function updatePublications() {
  const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
  let count = 0;
  for (const publication of publications) {
    const matchesYear = selectedYear === 'all' || publication.dataset.year === selectedYear;
    const matchesText = terms.every((term) => searchableText.get(publication).includes(term));
    publication.hidden = !(matchesYear && matchesText);
    if (!publication.hidden) count++;
  }
  for (const button of filters) {
    button.setAttribute('aria-pressed', String(button.dataset.year === selectedYear));
  }
  emptyState.hidden = count > 0;
  results.textContent = `${count} ${count === 1 ? 'entry' : 'entries'} · ${selectedYear === 'all' ? yearRange : selectedYear}`;
}

for (const button of filters) {
  button.addEventListener('click', () => {
    selectedYear = button.dataset.year;
    updatePublications();
  });
}
search.addEventListener('input', updatePublications);
document.querySelector('#reset-search').addEventListener('click', () => {
  selectedYear = 'all';
  search.value = '';
  updatePublications();
  search.focus();
});
document.querySelector('.publication-controls').hidden = false;
results.hidden = false;
updatePublications();

// Keep the current section identifiable without changing keyboard focus.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigation.querySelectorAll('a')) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -65% 0px' });
  for (const section of document.querySelectorAll('section[id], footer[id]')) observer.observe(section);
}
document.querySelector('#copyright-year').textContent = String(new Date().getFullYear());
