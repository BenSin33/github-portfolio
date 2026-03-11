document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar: highlight active link on scroll ──
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 80) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  // ── Hamburger menu ──
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    const s = hamburger.querySelectorAll('span');
    if (open) {
      s[0].style.transform = 'translateY(7px) rotate(45deg)';
      s[1].style.opacity   = '0';
      s[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      s[0].style.transform = s[1].style.opacity = s[2].style.transform = '';
    }
  });

  mobileMenu.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const s = hamburger.querySelectorAll('span');
      s[0].style.transform = s[1].style.opacity = s[2].style.transform = '';
    });
  });

  // ── Contact form (simulated) ──
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form && form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled  = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    setTimeout(() => {
      btn.disabled  = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      success.classList.add('show');
      form.reset();
      setTimeout(() => success.classList.remove('show'), 4000);
    }, 1000);
  });

});
