// Modal de referentes por mision
(function () {
  const modal = document.getElementById('missionModal');
  const tagEl = document.getElementById('missionModalTag');
  const titleEl = document.getElementById('missionModalTitle');
  const summaryEl = document.getElementById('missionModalSummary');
  const linksEl = document.getElementById('missionModalLinks');
  const closeBtn = document.getElementById('missionModalClose');
  const triggerButtons = document.querySelectorAll('.submission-trigger');

  if (!modal || !tagEl || !titleEl || !summaryEl || !linksEl || !closeBtn || !triggerButtons.length) return;

  const missionReferentes = window.missionReferentes || {};

  function renderSummary(resumen) {
    const aliases = {
      'Tipo de caso': ['Tipo de caso'],
      'Problema equivalente': ['Problema equivalente'],
      '¿Que hicieron?': ['¿Que hicieron?', 'Que hicieron?', 'Que hicieron', '¿Qué hicieron?', 'Qué hicieron?', 'Qué hicieron'],
      'Instrumento central': ['Instrumento central'],
      'Resultados verificados': ['Resultados verificados', 'Resultados'],
      'Leccion transferible a Santander': ['Leccion transferible a Santander', 'Leccion transferible', 'Lección transferible a Santander', 'Lección transferible'],
      'Conexion en Santander 2050': ['Conexion en Santander 2050', 'Conexión en Santander 2050']
    };
    const ordered = [
      'Tipo de caso',
      'Problema equivalente',
      '¿Que hicieron?',
      'Instrumento central',
      'Resultados verificados',
      'Leccion transferible a Santander',
      'Conexion en Santander 2050'
    ];

    const aliasToCanonical = {};
    const allAliases = [];
    Object.keys(aliases).forEach(function (canonical) {
      aliases[canonical].forEach(function (alias) {
        aliasToCanonical[alias] = canonical;
        allAliases.push(alias);
      });
    });

    const labelRegex = allAliases
      .map(function (label) { return label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); })
      .join('|');
    const re = new RegExp('(' + labelRegex + '):\\s*', 'g');

    const matches = [];
    let m;
    while ((m = re.exec(resumen)) !== null) {
      matches.push({
        label: aliasToCanonical[m[1]] || m[1],
        start: m.index,
        valueStart: re.lastIndex
      });
    }

    function normalizeParagraphStart(text) {
      if (!text) return '';
      const t = text.trim();
      if (!t) return '';
      return t.charAt(0).toUpperCase() + t.slice(1);
    }

    if (!matches.length) {
      return '<div class="mission-summary-item mission-summary-item-full"><h5>Resumen</h5><p>' + normalizeParagraphStart(resumen) + '</p></div>';
    }

    const extracted = {};
    matches.forEach(function (item, idx) {
      const end = idx + 1 < matches.length ? matches[idx + 1].start : resumen.length;
      const value = normalizeParagraphStart(resumen.slice(item.valueStart, end));
      if (value && !extracted[item.label]) extracted[item.label] = value;
    });

    const blocks = ordered.map(function (label) {
      const value = extracted[label] || 'No especificado en esta ficha.';
      return '<div class="mission-summary-item"><h5>' + label + '</h5><p>' + value + '</p></div>';
    });

    return blocks.join('');
  }

  function openMissionModal(missionKey) {
    const mission = missionReferentes[missionKey];
    if (!mission) return;

    tagEl.textContent = mission.tipo;
    titleEl.textContent = mission.titulo.replace(/^M\d+\.\d+\s*/, '');
    summaryEl.innerHTML = renderSummary(mission.resumen);
    linksEl.innerHTML = '';

    if (!mission.enlaces.length) {
      const empty = document.createElement('li');
      empty.textContent = 'Pendiente de cargar enlaces de referentes para esta mision.';
      linksEl.appendChild(empty);
    } else {
      mission.enlaces.forEach(function (item) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = item.titulo;
        li.appendChild(a);
        if (item.nota) {
          const note = document.createElement('span');
          note.className = 'mission-link-note';
          note.textContent = item.nota;
          li.appendChild(note);
        }
        linksEl.appendChild(li);
      });
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMissionModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggerButtons.forEach(function (btn) {
    btn.textContent = btn.textContent.replace(/^M\d+\.\d+\s*/, '');
    btn.addEventListener('click', function () {
      openMissionModal(btn.dataset.submission);
    });
  });

  closeBtn.addEventListener('click', closeMissionModal);
  modal.addEventListener('click', function (event) {
    if (event.target && event.target.hasAttribute('data-close-modal')) {
      closeMissionModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeMissionModal();
    }
  });
})();
