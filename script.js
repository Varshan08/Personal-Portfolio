(function () {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  const onScroll = () => {
    if (window.scrollY > 6) {
      navbar.classList.add('elevated');
    } else {
      navbar.classList.remove('elevated');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Simple parallax for elements with data-parallax-speed
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax-speed]'));
  const parallax = () => {
    const y = window.scrollY;
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0');
      const translate = Math.round(y * speed);
      el.style.transform = `translateY(${translate}px)`;
    });
  };
  window.addEventListener('scroll', parallax, { passive: true });
  parallax();

  // Mobile menu
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobileNav.setAttribute('aria-hidden', open ? 'false' : 'true');
    });
    // Close after navigation click
    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  document.querySelectorAll('.stagger').forEach((container) => {
    Array.from(container.children).forEach((child, idx) => {
      child.style.setProperty('--i', idx.toString());
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Tilt effect (skip on touch/coarse pointers)
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  if (isFinePointer) {
    const maxTilt = 6; // degrees
    const tiltEls = document.querySelectorAll('.tilt');
    tiltEls.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        const rx = (-dy * maxTilt).toFixed(2);
        const ry = (dx * maxTilt).toFixed(2);
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
})();

(function () {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  const onScroll = () => {
    if (window.scrollY > 6) {
      navbar.classList.add('elevated');
    } else {
      navbar.classList.remove('elevated');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Simple parallax for elements with data-parallax-speed
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax-speed]'));
  const parallax = () => {
    const y = window.scrollY;
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0');
      const translate = Math.round(y * speed);
      el.style.transform = `translateY(${translate}px)`;
    });
  };
  window.addEventListener('scroll', parallax, { passive: true });
  parallax();

  // Mobile menu
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobileNav.setAttribute('aria-hidden', open ? 'false' : 'true');
    });
    // Close after navigation click
    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  document.querySelectorAll('.stagger').forEach((container) => {
    Array.from(container.children).forEach((child, idx) => {
      child.style.setProperty('--i', idx.toString());
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Tilt effect (skip on touch/coarse pointers)
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  if (isFinePointer) {
    const maxTilt = 6; // degrees
    const tiltEls = document.querySelectorAll('.tilt');
    tiltEls.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        const rx = (-dy * maxTilt).toFixed(2);
        const ry = (dx * maxTilt).toFixed(2);
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
})();
