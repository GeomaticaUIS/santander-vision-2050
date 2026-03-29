    import { initializeApp }        from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
    import { getAnalytics }         from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
    import { getAuth, signInWithEmailAndPassword, onAuthStateChanged }
                                    from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
 
    /* ── Configuración Firebase ── */
    const firebaseConfig = {
      apiKey:            "AIzaSyAEeVufxA0HbPszowPa3hMy43oQt8L7OkE",
      authDomain:        "svp2050-76825.firebaseapp.com",
      projectId:         "svp2050-76825",
      storageBucket:     "svp2050-76825.firebasestorage.app",
      messagingSenderId: "612719255804",
      appId:             "1:612719255804:web:2cb2773e154d4c92227779",
      measurementId:     "G-VXS6SN8KRE"
    };
 
    const app       = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth      = getAuth(app);
 
    const REDIRECT  = 'home.html';
 
    const btnLogin  = document.getElementById('btnLogin');
    const userInput = document.getElementById('username');
    const pwInput   = document.getElementById('password');
    const errorMsg  = document.getElementById('errorMsg');
    const togglePw  = document.getElementById('togglePw');
    const eyeIcon   = document.getElementById('eyeIcon');
    const overlay   = document.getElementById('successOverlay');
 
    /* Si ya hay sesión activa, redirigir directo */
    onAuthStateChanged(auth, user => {
      if (user) window.location.replace(REDIRECT);
    });
 
    /* Toggle visibilidad contraseña */
    togglePw.addEventListener('click', () => {
      const show = pwInput.type === 'password';
      pwInput.type = show ? 'text' : 'password';
      eyeIcon.innerHTML = show
        ? `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`
        : `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
    });
 
    /* Limpiar error al escribir */
    [userInput, pwInput].forEach(el => {
      el.addEventListener('input', () => {
        errorMsg.classList.remove('visible');
        el.classList.remove('input-error');
      });
    });
 
    /* Enter para submit */
    [userInput, pwInput].forEach(el => {
      el.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
    });
 
    btnLogin.addEventListener('click', doLogin);
 
    async function doLogin() {
      const usuario = userInput.value.trim();
      const clave   = pwInput.value;
 
      if (!usuario || !clave) { shake(); return; }
 
      btnLogin.classList.add('loading');
      btnLogin.disabled = true;
 
      /* Firebase usa email — el usuario se registró como admin_svp@svp2050.com */
      const email = usuario + '@svp2050.com';
 
      try {
        await signInWithEmailAndPassword(auth, email, clave);
        /* Éxito — mostrar overlay y redirigir */
        overlay.classList.add('show');
        setTimeout(() => window.location.replace(REDIRECT), 2000);
 
      } catch (err) {
        btnLogin.classList.remove('loading');
        btnLogin.disabled = false;
        errorMsg.classList.remove('visible');
        void errorMsg.offsetWidth;
        errorMsg.classList.add('visible');
        userInput.classList.add('input-error');
        pwInput.classList.add('input-error');
        pwInput.value = '';
        pwInput.focus();
      }
    }
 
    function shake() {
      const card = document.querySelector('.login-card');
      card.style.animation = 'shakeX 0.4s ease';
      setTimeout(() => card.style.animation = '', 400);
    }
