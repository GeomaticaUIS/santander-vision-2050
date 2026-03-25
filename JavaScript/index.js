/* ── Dashboard portafolio de proyectos ───── */
(function () {
    const nodes = [
    { id: 'P38', title: 'Alianza Santander', level: 'fundacional', mission: 'M4', ring: 0, angle: 0, route: ['rc1', 'rc2', 'rc3', 'rc4'], detail: 'Pacto territorial multiactor y fondo de coinversión público-privada.', anchor: true },
    { id: 'P34', title: 'Plataforma de Datos', level: 'fundacional', mission: 'M4', ring: 1, angle: 270, route: ['rc1', 'rc3'], detail: 'Sistema interoperable de datos de los 87 municipios.', anchor: true },
    { id: 'P35', title: 'Consejo de Futuro', level: 'fundacional', mission: 'M4', ring: 1, angle: 90, route: ['rc4'], detail: 'Continuidad estratégica, sandbox y actualización prospectiva.', anchor: true },
    { id: 'P33', title: 'Internacionalización Verde', level: 'fundacional', mission: 'M3', ring: 1, angle: 185, route: ['rc4'], detail: 'Plataforma de atracción de inversión extranjera y exportaciones verdes.' },
    { id: 'P36', title: 'Catastro + POT', level: 'habilitador', mission: 'M4', ring: 2, angle: 315, route: ['rc1'], detail: 'Ordenamiento territorial de segunda generación.' },
    { id: 'P37', title: 'Fortalec. Municipal', level: 'habilitador', mission: 'M4', ring: 2, angle: 230, route: ['rc5'], detail: 'Capacidad técnica, gobierno digital y continuidad local.' },
    { id: 'P39', title: 'CTeI + Innovación', level: 'habilitador', mission: 'M4', ring: 2, angle: 250, route: ['rc4'], detail: 'Sistema de CTeI orientado a misiones.' },
    { id: 'P14', title: 'Fibra Óptica', level: 'habilitador', mission: 'M2', ring: 2, angle: 338, route: ['rc3', 'rc5'], detail: 'Conectividad digital y aldeas 5G.', anchor: true },
    { id: 'P40', title: 'Campus Territoriales', level: 'habilitador', mission: 'M5', ring: 2, angle: 208, route: ['rc3', 'rc5'], detail: 'Centros técnicos territoriales.', anchor: true },
    { id: 'P02', title: 'Fondo PSE', level: 'habilitador', mission: 'M1', ring: 2, angle: 22, route: ['rc1'], detail: 'Pagos por Servicios Ecosistémicos en cuencas y páramos.', anchor: true },
    { id: 'P04', title: 'Red Alerta Temprana', level: 'habilitador', mission: 'M1', ring: 2, angle: 48, route: ['rc1'], detail: '200 estaciones hidrometeorológicas IoT.', anchor: true },
    { id: 'P08', title: 'Distritos de Riego', level: 'habilitador', mission: 'M1', ring: 2, angle: 72, route: ['rc1'], detail: 'Riego con telemetría. 5.000 ha irrigadas.' },
    { id: 'P29', title: 'Mipyme 4.0', level: 'habilitador', mission: 'M3', ring: 2, angle: 138, route: ['rc4'], detail: 'Transformación digital de pymes santandereanas.' },
    { id: 'P44', title: 'Bilingüismo', level: 'habilitador', mission: 'M5', ring: 2, angle: 163, route: ['rc5'], detail: 'Programa de bilingüismo y habilidades globales.' },
    { id: 'P01', title: 'Plan Maestro Hídrico', level: 'tractor', mission: 'M1', ring: 3, angle: 0, route: ['rc1'], detail: 'Gestión hídrica en 7 cuencas estratégicas.', anchor: true },
    { id: 'P13', title: 'Red Vial Provincias', level: 'habilitador', mission: 'M2', ring: 3, angle: 30, route: ['rc3'], detail: '2.000 km resilientes para integrar provincias.', anchor: true },
    { id: 'P12', title: 'Soberanía Alimentaria', level: 'impacto', mission: 'M1', ring: 3, angle: 15, route: ['rc1'], detail: 'Huertas, semillas y mercados campesinos.' },
    { id: 'P23', title: 'Distrito Transición E.', level: 'tractor', mission: 'M3', ring: 3, angle: 55, route: ['rc2'], detail: 'Reconversión justa del Magdalena Medio.', anchor: true },
    { id: 'P24', title: 'Hidrógeno Verde', level: 'tractor', mission: 'M3', ring: 3, angle: 78, route: ['rc2'], detail: 'Primer hub de hidrógeno verde del nororiente.', anchor: true },
    { id: 'P25', title: 'Energías Rurales', level: 'impacto', mission: 'M3', ring: 3, angle: 92, route: ['rc2'], detail: '50 comunidades energéticas rurales.' },
    { id: 'P26', title: 'BioSantander 2050', level: 'tractor', mission: 'M3', ring: 3, angle: 115, route: ['rc4'], detail: 'Hub de bioeconomía avanzada en Guatiguará.', anchor: true },
    { id: 'P32', title: 'Clúster Agroexportador', level: 'impacto', mission: 'M3', ring: 3, angle: 132, route: ['rc4'], detail: 'Cacao, café y frutales con denominaciones de origen.', anchor: true },
    { id: 'P15', title: 'Logística Multimodal', level: 'impacto', mission: 'M2', ring: 3, angle: 148, route: ['rc3'], detail: 'Hub multimodal de Barrancabermeja.', anchor: true },
    { id: 'P16', title: 'Nodos Subregionales', level: 'tractor', mission: 'M2', ring: 3, angle: 165, route: ['rc3', 'rc5'], detail: 'Ciudades intermedias descentralizadas.' },
    { id: 'P19', title: 'Salud Digital', level: 'tractor', mission: 'M2', ring: 3, angle: 185, route: ['rc3', 'rc5'], detail: 'Red provincial de telemedicina en 87 municipios.' },
    { id: 'P41', title: 'Talento Global', level: 'impacto', mission: 'M5', ring: 3, angle: 210, route: ['rc5'], detail: 'Becas, retorno y primer empleo para jóvenes.', anchor: true },
    { id: 'P45', title: 'Economía del Cuidado', level: 'impacto', mission: 'M5', ring: 3, angle: 232, route: ['rc5'], detail: 'Gerontecnología, cuidado y salud mental.' },
    { id: 'P27', title: 'Agricultura Regenerativa', level: 'tractor', mission: 'M3', ring: 3, angle: 288, route: ['rc1', 'rc4'], detail: '50.000 ha en sistemas regenerativos.' },
    { id: 'P47', title: 'Relevo Rural', level: 'impacto', mission: 'M1', ring: 3, angle: 308, route: ['rc1', 'rc3', 'rc5'], detail: 'Tierra y financiación para jóvenes rurales.', anchor: true },
    { id: 'P07', title: 'Gestión Residuos', level: 'tractor', mission: 'M1', ring: 3, angle: 330, route: ['rc1'], detail: 'Parque tecnológico de residuos y biogás.', anchor: true },
    { id: 'P48', title: 'Corredor Turístico', level: 'impacto', mission: 'M5', ring: 3, angle: 348, route: ['rc3'], detail: 'Chicamocha, San Gil y Barichara.', anchor: true },
    { id: 'P03', title: 'Restauración Cuencas', level: 'tractor', mission: 'M1', ring: 4, angle: 7, route: ['rc1'], detail: '30.000 ha con agroforestería; 3.000 productores.' },
    { id: 'P10', title: 'Ordenamiento Agua', level: 'impacto', mission: 'M1', ring: 4, angle: 22, route: ['rc1'], detail: 'Criterios hídricos en los 87 POT municipales.' },
    { id: 'P11', title: 'Dist. Agroalimentario', level: 'impacto', mission: 'M1', ring: 4, angle: 37, route: ['rc1'], detail: 'Cadenas cortas y biorefinerías rurales.', anchor: true },
    { id: 'P28', title: 'Parque Industrial Verde', level: 'tractor', mission: 'M3', ring: 4, angle: 95, route: ['rc2', 'rc4'], detail: 'Reindustrialización en Barrancabermeja.' },
    { id: 'P30', title: 'Minería Circular', level: 'impacto', mission: 'M3', ring: 4, angle: 108, route: ['rc4'], detail: 'Vetas y California hacia minería sostenible.' },
    { id: 'P31', title: 'Fondo Innovación', level: 'impacto', mission: 'M3', ring: 4, angle: 121, route: ['rc4'], detail: 'Capital semilla para empresas de base tecnológica.' },
    { id: 'P17', title: 'Centros Ciudadanos', level: 'impacto', mission: 'M2', ring: 4, angle: 157, route: ['rc3', 'rc5'], detail: 'Servicios del Estado integrados por provincia.' },
    { id: 'P18', title: 'Transporte AMB', level: 'tractor', mission: 'M2', ring: 4, angle: 170, route: ['rc3'], detail: 'Sistema integrado de transporte metropolitano.' },
    { id: 'P20', title: 'Consejos Provinciales', level: 'tractor', mission: 'M2', ring: 4, angle: 183, route: ['rc3'], detail: 'Presupuesto participativo y planificación local.' },
    { id: 'P21', title: 'Electrificación Vehicular', level: 'tractor', mission: 'M2', ring: 4, angle: 196, route: ['rc3'], detail: 'Movilidad sostenible en el AMB.' },
    { id: 'P22', title: 'Vivienda Rural', level: 'tractor', mission: 'M2', ring: 4, angle: 209, route: ['rc3'], detail: 'Reubicación y mejoramiento de vivienda rural.' },
    { id: 'P43', title: 'Innovación Educativa', level: 'impacto', mission: 'M5', ring: 4, angle: 222, route: ['rc5'], detail: 'IA y datos para maestros y jóvenes provincianos.' },
    { id: 'P46', title: 'Escuela Habilidades', level: 'impacto', mission: 'M5', ring: 4, angle: 245, route: ['rc2', 'rc5'], detail: 'Trabajadores fósiles hacia empleos verdes.', anchor: true },
    { id: 'P50', title: 'Cultura y Ec. Naranja', level: 'impacto', mission: 'M5', ring: 4, angle: 265, route: ['rc3', 'rc5'], detail: 'Plan de cultura, creatividad y economía naranja.' },
    { id: 'P05', title: 'PTAR Bucaramanga', level: 'tractor', mission: 'M1', ring: 4, angle: 322, route: ['rc1'], detail: 'PTAR del AMB y plantas subregionales.', anchor: true },
    { id: 'P06', title: 'Protección Páramos', level: 'tractor', mission: 'M1', ring: 4, angle: 336, route: ['rc1'], detail: 'Santurbán, Almorzadero y Yariguíes protegidos.' },
    { id: 'P09', title: 'Acueductos Rurales', level: 'tractor', mission: 'M1', ring: 4, angle: 309, route: ['rc1'], detail: '50 acueductos sostenibles. 80.000 beneficiarios.' },
    { id: 'P49', title: 'Geoparque Chicamocha', level: 'impacto', mission: 'M5', ring: 4, angle: 350, route: ['rc3'], detail: 'Integración tecnológica del Cañón del Chicamocha.' }
    ];

    const routeMap = {
    rc1: { title: 'RC1 · Seguridad Hídrica y Soberanía Alimentaria', text: 'Sin gobernanza y datos no hay gestión del agua; sin gestión del agua no hay base ecológica para ningún otro motor. Es la ruta más larga y sistémica del banco.', steps: ['P38 Alianza', 'P34 Datos', 'P01 Plan Hídrico', 'P02 PSE + P03 Restauración', 'P27 Agricultura regenerativa', 'P11 Distrito agroalimentario + P47 Relevo rural'] },
    rc2: { title: 'RC2 · Transición Energética Justa del Magdalena Medio', text: 'Responde a la pregunta más crítica del territorio: cómo pasar de la dependencia fósil a una nueva economía energética sin fractura social.', steps: ['P38 Alianza', 'P23 Distrito de transición', 'P24 Hidrógeno + P46 Escuela de habilidades', 'P28 Parque industrial verde', 'P25 Comunidades energéticas rurales'] },
    rc3: { title: 'RC3 · Conectividad Territorial y Cierre de Brechas', text: 'La doble desconexión física y digital es el principal reproductor de la desigualdad territorial. Vías + fibra juntas potencian toda la transformación provincial.', steps: ['P38 Alianza', 'P13 Red vial + P14 Fibra óptica', 'P16 Nodos + P17 Centros + P19 Telemedicina + P40 Campus', 'P47 Relevo rural + P48 Turismo', 'Cohesión territorial'] },
    rc4: { title: 'RC4 · Sofisticación Productiva y Bioeconomía', text: 'Rompe la trampa de baja complejidad productiva. Convierte conocimiento en estructura económica territorial con BioSantander como nodo articulador.', steps: ['P39 CTeI + innovación', 'P26 BioSantander', 'P27 Agricultura + P29 Mipyme 4.0 + P31 Fondo', 'P32 Clúster agroexportador', 'P33 Internacionalización verde'] },
    rc5: { title: 'RC5 · Demografía, Cuidado y Retención de Talento', text: 'Gestiona el envejecimiento y la fuga de talento. Conectividad + formación + cuidado son las tres condiciones para mantener población productiva en el territorio.', steps: ['P14 Fibra + P40 Campus + P16 Nodos', 'P41 Talento global + P44 Bilingüismo + P19 Telemedicina + P45 Cuidado', 'P47 Relevo generacional'] }
    };

    const levelClass = { fundacional: 'dn-fund', habilitador: 'dn-hab', tractor: 'dn-tract', impacto: 'dn-imp' };

    const wrap = document.getElementById('ringsWrap');
    if (!wrap) return;

    const radii = { 0: 0, 1: 105, 2: 175, 3: 255, 4: 330 };

    function polar(cx, cy, r, angle) {
    const rad = (angle - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
    }

    const nodeEls = {};
    let currentLevel = 'all';
    let currentRoute = 'all';
    let currentMission = 'all';

    function buildNodes() {
    // Use fixed center based on wrap's actual rendered size
    const rect = wrap.getBoundingClientRect();
    const cx = rect.width > 100 ? rect.width / 2 : wrap.offsetWidth / 2 || 400;
    const cy = rect.height > 100 ? rect.height / 2 : wrap.offsetHeight / 2 || 350;
    // Half node dimensions for centering
    const hw = 50, hh = 22;
    nodes.forEach(n => {
        const pos = polar(cx, cy, radii[n.ring] || 0, n.angle);
        const div = document.createElement('div');
        div.className = 'dash-node ' + (levelClass[n.level] || '');
        div.dataset.level = n.level;
        div.dataset.mission = n.mission;
        div.dataset.routes = n.route.join(',');
        div.style.left = (pos.x - hw) + 'px';
        div.style.top = (pos.y - hh) + 'px';
        const anchor = n.anchor ? '<span style="color:var(--oro);font-size:.65rem">★</span> ' : '';
        div.innerHTML = '<span class="nd-code">' + n.id + '</span>' + anchor + n.title;
        div.addEventListener('click', () => focusNode(n));
        wrap.appendChild(div);
        nodeEls[n.id] = div;
    });
    }

    function focusNode(n) {
    Object.values(nodeEls).forEach(el => el.classList.remove('active'));
    nodeEls[n.id].classList.add('active');
    const orb = document.getElementById('centerOrb');
    orb.innerHTML = '<b>' + n.id + '</b><span>' + n.title + '</span><span style="margin-top:5px;font-size:.65rem;color:rgba(255,255,255,0.45)">' + n.detail + '</span>';
    }

    function applyFilters() {
    nodes.forEach(n => {
        const el = nodeEls[n.id];
        if (!el) return;
        const lm = currentLevel === 'all' || n.level === currentLevel;
        const rm = currentRoute === 'all' || n.route.includes(currentRoute);
        const mm = currentMission === 'all' || n.mission === currentMission;
        el.classList.toggle('dim', !(lm && rm && mm));
    });
    }

    function updateLevelContextCard() {
    const titleEl = document.getElementById('dlcTitle');
    const countEl = document.getElementById('dlcCount');
    const projectsEl = document.getElementById('dlcProjects');
    const descEl = document.getElementById('dlcDescription');
    if (!titleEl || !countEl || !projectsEl || !descEl) return;

    const levelInfo = {
        all: {
        title: 'Todos los niveles',
        count: '50 proyectos',
        projects: 'Selecciona un nivel en el filtro para ver su ficha detallada.',
        description: 'El portafolio esta organizado en cuatro niveles interdependientes. Usa el filtro de nivel para ver la logica estrategica especifica de Fundacional, Habilitador, Tractor o Impacto.'
        },
        fundacional: {
        title: 'Fundacional',
        count: '3 proyectos',
        projects: 'P34, P35, P38',
        description: 'Crean las condiciones de posibilidad del sistema completo. Sin ellos, la mayor parte del banco pierde viabilidad institucional, financiera o tecnica. Son la Alianza por Santander (P38), la Plataforma de Datos Territoriales (P34) y el Consejo de Futuro (P35). Deben arrancar antes que cualquier otro proyecto.'
        },
        habilitador: {
        title: 'Habilitador',
        count: '11 proyectos',
        projects: 'P4, P10, P13, P14, P31, P36, P37, P39, P40, P43, P46',
        description: 'Infraestructuras, plataformas o capacidades que habilitan la ejecucion y escalamiento de multiples proyectos materiales. La Fibra Optica (P14) habilita a 7 proyectos de otras misiones; la Red Vial (P13) activa la agroeconomia, el turismo y la logistica provinciales.'
        },
        tractor: {
        title: 'Tractor',
        count: '25 proyectos',
        projects: 'Mayoria de M1, M2 y M3',
        description: 'Modifican directamente la estructura territorial, productiva, ambiental o social. Son los proyectos de mayor volumen de inversion y mayor impacto fisico sobre el territorio. Incluyen los grandes clusters de seguridad hidrica, transicion energetica y bioeconomia.'
        },
        impacto: {
        title: 'Impacto',
        count: '11 proyectos',
        projects: 'P12, P17, P19, P33, P41, P45, P47, P48, P49, P50',
        description: 'Expresan resultados mas visibles en bienestar, sofisticacion productiva, cohesion territorial o posicionamiento regional. Son los productos finales de las rutas criticas. Emergen cuando los fundacionales y habilitadores estan activos.'
        }
    };

    const info = levelInfo[currentLevel] || levelInfo.all;
    titleEl.textContent = info.title;
    countEl.textContent = info.count;
    projectsEl.textContent = info.projects;
    descEl.textContent = info.description;
    }

    // Level filters
    document.querySelectorAll('#levelFilters .dash-chip').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#levelFilters .dash-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLevel = btn.dataset.level;
        applyFilters();
        updateLevelContextCard();
    });
    });

    // Mission filters
    document.querySelectorAll('#missionFilters .dash-chip').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#missionFilters .dash-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMission = btn.dataset.mission;
        applyFilters();
    });
    });

    // Route filters
    document.querySelectorAll('#routeFilters .dash-route-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#routeFilters .dash-route-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentRoute = btn.dataset.route;
        if (currentRoute === 'all') {
        document.getElementById('dashRouteTitle').textContent = 'Rutas críticas de implementación';
        document.getElementById('dashRouteText').textContent = 'Selecciona una ruta crítica para ver la secuencia causal y su lógica estratégica.';
        document.getElementById('dashRouteFlow').innerHTML = '';
        document.getElementById('dashRouteLogic').textContent = 'Estas rutas no son cronogramas. Son secuencias causales a través de las cuales los proyectos se activan mutuamente.';
        } else {
        renderRoute(currentRoute);
        }
        applyFilters();
    });
    });

    function renderRoute(key) {
    const r = routeMap[key];
    document.getElementById('dashRouteTitle').textContent = r.title;
    document.getElementById('dashRouteText').textContent = r.text;
    const flow = document.getElementById('dashRouteFlow');
    flow.innerHTML = '';
    r.steps.forEach((s, i) => {
        const step = document.createElement('div');
        step.className = 'dash-step'; step.textContent = s; flow.appendChild(step);
        if (i < r.steps.length - 1) { const arr = document.createElement('span'); arr.className = 'dash-arrow'; arr.textContent = '→'; flow.appendChild(arr); }
    });
    document.getElementById('dashRouteLogic').textContent = 'Ruta activa: los nodos asociados se resaltan en el mapa radial.';
    }

    // Tabs
    document.querySelectorAll('#dashTabs .dash-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('#dashTabs .dash-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.dash-panel').forEach(p => p.classList.remove('active'));
        document.getElementById('dash-panel-' + tab.dataset.tab).classList.add('active');
    });
    });

    // Build after layout
    // Wait for full layout before building nodes
    function tryBuild() {
    if (wrap.offsetWidth > 100) {
        buildNodes();
        focusNode(nodes[0]);
    } else {
        setTimeout(tryBuild, 80);
    }
    }
    setTimeout(tryBuild, 200);
    updateLevelContextCard();
})();

/* ── Carrusel hero ────────────────────────── */
(function () {
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const dots = Array.from(document.querySelectorAll('.c-dot'));
    let current = 0;
    let isAnimating = false;
    let timer;

    function goTo(idx) {
    if (isAnimating) return;
    const next = (idx + slides.length) % slides.length;
    if (next === current) return;

    isAnimating = true;

    const prevSlide = slides[current];
    const nextSlide = slides[next];

    // Actualizar dots
    dots[current].classList.remove('active');
    dots[next].classList.add('active');

    // Marcar saliente y reiniciar animación del siguiente
    prevSlide.classList.add('leaving');

    // Forzar reflow para que la animación kenburns reinicie
    nextSlide.classList.remove('active');
    void nextSlide.offsetWidth; // reflow
    nextSlide.classList.add('active');

    current = next;

    // Limpiar clase leaving tras la transición
    setTimeout(() => {
        prevSlide.classList.remove('active', 'leaving');
        isAnimating = false;
    }, 1500);

    resetTimer();
    }

    function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 6000);
    }

    document.getElementById('carouselNext')
    .addEventListener('click', () => goTo(current + 1));
    document.getElementById('carouselPrev')
    .addEventListener('click', () => goTo(current - 1));

    dots.forEach(dot => {
    dot.addEventListener('click', () => goTo(parseInt(dot.dataset.idx)));
    });

    // Iniciar con primer slide activo y arrancar timer
    slides[0].classList.add('active');
    resetTimer();
})();

/* ── Menú móvil ───────────────────────────── */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

/* ── Nav activo en scroll ─────────────────── */
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
});

/* ── Diagnóstico: layer tabs ──────────────── */
const layerTabs = document.querySelectorAll('.diag-tab');

layerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
    const layer = tab.dataset.layer;
    layerTabs.forEach(t => t.classList.remove('active'));
    // Ocultar solo los paneles dentro de la sección diagnóstico
    document.querySelectorAll('#diagnostico .diag-layer').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById('layer-' + layer);
    if (target) target.classList.add('active');
    });
});

/* ── Acordeón problemáticas ──────────────── */
document.querySelectorAll('.acord-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
    const item = trigger.closest('.acord-item');
    const isOpen = item.classList.contains('open');
    // Cerrar todos
    document.querySelectorAll('.acord-item.open').forEach(i => i.classList.remove('open'));
    // Abrir el clickeado (toggle)
    if (!isOpen) item.classList.add('open');
    });
});

/* ── Portafolio: filtros de misión y nivel ── */
(function () {
    const missionBtns = document.querySelectorAll('.port-mission-btn');
    const levelBtns = document.querySelectorAll('.pf-btn');
    const cards = document.querySelectorAll('.port-card');
    const counter = document.getElementById('portCount');

    let activeMission = 'todos';
    let activeLevel = 'todos';

    function filterCards() {
    let visible = 0;
    cards.forEach(card => {
        const mMatch = activeMission === 'todos' || card.dataset.mission === activeMission;
        const lMatch = activeLevel === 'todos' || card.dataset.level === activeLevel;
        const show = mMatch && lMatch;
        card.classList.toggle('hidden', !show);
        if (show) visible++;
    });
    if (counter) counter.textContent = visible + ' proyecto' + (visible !== 1 ? 's' : '');
    }

    missionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        missionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeMission = btn.dataset.mission;
        filterCards();
    });
    });

    levelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        levelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeLevel = btn.dataset.level;
        filterCards();
    });
    });
})();

/* ── Laboratorios: tabs ─────────────────── */
document.querySelectorAll('#labTabs .lab-tab').forEach(tab => {
    tab.addEventListener('click', () => {
    document.querySelectorAll('#labTabs .lab-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.lab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById('labp-' + tab.dataset.lab);
    if (panel) panel.classList.add('active');
    });
});

/* ── Laboratorios: nav tabs ─────────────── */
document.querySelectorAll('.lab-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
    document.querySelectorAll('.lab-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.lab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById('lab-' + btn.dataset.lab);
    if (panel) panel.classList.add('active');
    });
});

/* ── Arquitectura: tabs Capacidades/Retos/Misiones/Motores ── */
document.querySelectorAll('#arqDetailTabs .arq-dtab').forEach(tab => {
    tab.addEventListener('click', () => {
    document.querySelectorAll('#arqDetailTabs .arq-dtab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.arq-dpanel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById('arqdp-' + tab.dataset.panel);
    if (panel) panel.classList.add('active');
    });
});

/* ── Scroll reveal ────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
    if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
    }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));