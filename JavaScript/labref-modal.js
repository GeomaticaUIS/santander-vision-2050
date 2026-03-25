/* ── Laboratorios: referentes y modal ───── */
(function () {
    const modal = document.getElementById('labReferenteModal');
    if (!modal) return;

    const closeBtn = document.getElementById('labRefModalClose');
    const tipoEl = document.getElementById('labRefModalTipo');
    const titleEl = document.getElementById('labRefModalTitle');
    const summaryEl = document.getElementById('labRefModalSummary');
    const linksEl = document.getElementById('labRefModalLinks');
    const dialogEl = modal.querySelector('.labref-modal__dialog');

    if (!closeBtn || !tipoEl || !titleEl || !summaryEl || !linksEl || !dialogEl) return;

    let lastFocusedElement = null;

    const labReferentes = window.labReferentes || {};

    const summaryMarkers = [
        'Tipo de referente:',
        'Problema equivalente:',
        '¿Qué hicieron?:',
        'Instrumento central:',
        'Resultados verificados:',
        'Lección transferible al sandbox:',
        'Conexión en Santander 2050:'
    ];

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function renderSummary(text) {
        if (!text) return '';
        const points = [];

        for (let i = 0; i < summaryMarkers.length; i++) {
            const marker = summaryMarkers[i];
            const nextMarker = summaryMarkers[i + 1];
            const startIdx = text.indexOf(marker);
            if (startIdx === -1) continue;

            const contentStart = startIdx + marker.length;
            const endIdx = nextMarker ? text.indexOf(nextMarker, contentStart) : -1;
            const content = text.slice(contentStart, endIdx === -1 ? undefined : endIdx).trim();
            points.push('<p><strong>' + escapeHtml(marker) + '</strong> ' + escapeHtml(content) + '</p>');
        }

        if (!points.length) {
            return '<p>' + escapeHtml(text) + '</p>';
        }

        return points.join('');
    }

    function getFocusableElements() {
        return dialogEl.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    }

    function openModal(refKey) {
        const data = labReferentes[refKey];
        if (!data) return;

        lastFocusedElement = document.activeElement;

        tipoEl.textContent = data.tipo || '';
        titleEl.textContent = data.titulo || 'Referente';
        summaryEl.innerHTML = renderSummary(data.resumen || '');
        linksEl.innerHTML = '';

        (data.enlaces || []).forEach(link => {
            if (!link || !link.url) return;
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = link.titulo || link.url;
            li.appendChild(a);
            linksEl.appendChild(li);
        });

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        closeBtn.focus();
    }

    function closeModal() {
        if (!modal.classList.contains('is-open')) return;

        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');

        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    }

    document.querySelectorAll('.lab-ref-trigger').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.dataset.ref));
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if (!modal.classList.contains('is-open')) return;

        if (event.key === 'Escape') {
            closeModal();
            return;
        }

        if (event.key === 'Tab') {
            const focusable = getFocusableElements();
            if (!focusable.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });
})();
