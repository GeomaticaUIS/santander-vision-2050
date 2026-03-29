    const USUARIO   = 'admin_svp';
    const PASSWORD  = 'Stder_pR05_2050';
    const REDIRECT  = 'home.html';
 
    const btnLogin  = document.getElementById('btnLogin');
    const userInput = document.getElementById('username');
    const pwInput   = document.getElementById('password');
    const errorMsg  = document.getElementById('errorMsg');
    const togglePw  = document.getElementById('togglePw');
    const eyeIcon   = document.getElementById('eyeIcon');
    const overlay   = document.getElementById('successOverlay');
 
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
 
    /* Login */
    btnLogin.addEventListener('click', doLogin);
 
    function doLogin() {
      const u = userInput.value.trim();
      const p = pwInput.value;
 
      if (!u || !p) {
        shake();
        return;
      }
 
      btnLogin.classList.add('loading');
      btnLogin.disabled = true;
 
      setTimeout(() => {
        if (u === USUARIO && p === PASSWORD) {
          localStorage.setItem('svp_auth', '1');
          overlay.classList.add('show');
          setTimeout(() => { try { window.location.assign(REDIRECT); } catch(e) { window.location.replace(REDIRECT); } setTimeout(() => { var lnk = document.getElementById('manualLink'); if(lnk) lnk.style.display='inline-block'; }, 2000); }, 2000);
        } else {
          btnLogin.classList.remove('loading');
          btnLogin.disabled = false;
          errorMsg.classList.remove('visible');
          void errorMsg.offsetWidth; // reflow para re-trigger animation
          errorMsg.classList.add('visible');
          userInput.classList.add('input-error');
          pwInput.classList.add('input-error');
          pwInput.value = '';
          pwInput.focus();
        }
      }, 900);
    }
 
    function shake() {
      const card = document.querySelector('.login-card');
      card.style.animation = 'shakeX 0.4s ease';
      setTimeout(() => card.style.animation = '', 400);
    }
