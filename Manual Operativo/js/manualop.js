// Nav toggle
(function () {
  const navToggle = document.getElementById('navToggle');
  if (!navToggle) return;
  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
  });
})();

// Scroll reveal
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();

// Tabs arquitectura
(function () {
  const tabs = document.querySelectorAll('.arq-dtab');
  const panels = document.querySelectorAll('.arq-dpanel');
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('arqdp-' + tab.dataset.panel);
      if (target) target.classList.add('active');
    });
  });
})();

// ZOOM MEJORADO (MODIFICADO)
(function () {
  const img = document.getElementById('diagrama-img');
  if (!img) return;

  const overlay = document.createElement('div');
  overlay.className = 'diagram-zoom-overlay';

  const zoomImg = document.createElement('img');
  zoomImg.className = 'diagram-zoom-image';

  overlay.appendChild(zoomImg);
  document.body.appendChild(overlay);

  function closeOverlay() {
    overlay.classList.remove('is-open');
  }

  img.addEventListener('click', function () {
    zoomImg.src = img.src;
    overlay.classList.add('is-open');
  });

  overlay.addEventListener('click', closeOverlay);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeOverlay();
    }
  });
})();
