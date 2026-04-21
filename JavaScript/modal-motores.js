// Modal de referentes por motor
(function () {
  const modal = document.getElementById('motorModal');
  const tagEl = document.getElementById('motorModalTag');
  const titleEl = document.getElementById('motorModalTitle');
  const summaryEl = document.getElementById('motorModalSummary');
  const linksEl = document.getElementById('motorModalLinks');
  const closeBtn = document.getElementById('motorModalClose');
  const triggerButtons = document.querySelectorAll('.motor-trigger');

  if (!modal || !tagEl || !titleEl || !summaryEl || !linksEl || !closeBtn || !triggerButtons.length) return;

  const motorReferentes = window.motorReferentes || {};

  function renderSummary(resumen) {
    const aliases = {
      'Tipo de caso': ['Tipo de caso'],
      'Problema equivalente': ['Problema equivalente'],
      '¿Que hicieron?': ['¿Que hicieron?', 'Que hicieron?', 'Que hicieron', '¿Qué hicieron?', 'Qué hicieron?'],
      'Instrumento central': ['Instrumento central'],
      'Resultados verificados': ['Resultados verificados', 'Resultados'],
      'Leccion transferible a Santander': ['Leccion transferible a Santander', 'Leccion transferible', 'Lección transferible a Santander', 'Lección transferible'],
      'Conexion en Santander 2050': ['Conexion en Santander 2050', 'Conexión en Santander 2050']
    };
    const ordered = ['Tipo de caso', 'Problema equivalente', '¿Que hicieron?', 'Instrumento central', 'Resultados verificados', 'Leccion transferible a Santander', 'Conexion en Santander 2050'];

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

    if (!matches.length) {
      return '<div class="mission-summary-item mission-summary-item-full"><h5>Resumen</h5><p>' + resumen + '</p></div>';
    }

    const extracted = {};
    matches.forEach(function (item, idx) {
      const end = idx + 1 < matches.length ? matches[idx + 1].start : resumen.length;
      const value = resumen.slice(item.valueStart, end).trim();
      if (value && !extracted[item.label]) extracted[item.label] = value;
    });

    const blocks = ordered.map(function (label) {
      const value = extracted[label] || 'No especificado en esta ficha.';
      return '<div class="mission-summary-item"><h5>' + label + '</h5><p>' + value + '</p></div>';
    });

    return blocks.join('');
  }

  function openMotorModal(motorKey) {
    const motor = motorReferentes[motorKey];
    if (!motor) return;

    tagEl.textContent = motor.tipo;
    titleEl.textContent = motor.titulo;
    summaryEl.innerHTML = renderSummary(motor.resumen);
    linksEl.innerHTML = '';

    if (!motor.enlaces.length) {
      const empty = document.createElement('li');
      empty.textContent = 'Pendiente de cargar enlaces de referentes para este motor.';
      linksEl.appendChild(empty);
    } else {
      motor.enlaces.forEach(function (item) {
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

  function closeMotorModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggerButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const motorKey = btn.dataset.motorRef || btn.dataset.motor;
      openMotorModal(motorKey);
    });
  });

  closeBtn.addEventListener('click', closeMotorModal);
  modal.addEventListener('click', function (event) {
    if (event.target && (event.target.hasAttribute('data-close-motor-modal') || event.target.hasAttribute('data-close-modal'))) {
      closeMotorModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeMotorModal();
    }
  });
})();
