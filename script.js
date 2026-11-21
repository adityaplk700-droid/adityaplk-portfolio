// Accessible interactive career timeline.
const tabs = [...document.querySelectorAll('.timeline-item')];
const panels = [...document.querySelectorAll('.job-panel')];

function activate(tab) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
  });
  panels.forEach(panel => {
    const selected = panel.id === tab.dataset.panel;
    panel.classList.toggle('active', selected);
    panel.hidden = !selected;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activate(tab));
  tab.addEventListener('keydown', event => {
    if (['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault();
      const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1;
      const next = tabs[(index + direction + tabs.length) % tabs.length];
      activate(next);
      next.focus();
    }
  });
});

document.getElementById('printBtn').addEventListener('click', () => window.print());
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.textContent = opened ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
