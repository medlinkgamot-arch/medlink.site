
  // Tailwind config
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          navy: { DEFAULT: '#0D2C53', deep: '#081C36', 50: '#EAF0F6' },
          teal: { DEFAULT: '#208A85', light: '#5FBDB6', 50: '#EAF6F5' },
          ink: '#20303F',
          paper: '#F5F8F7'
        },
        fontFamily: {
          display: ['"Fraunces"', 'serif'],
          body: ['"Inter"', 'sans-serif']
        }
      }
    }
  }

  // Header background on scroll
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-navy-deep/95', 'backdrop-blur', 'shadow-md');
    } else {
      header.classList.remove('bg-navy-deep/95', 'backdrop-blur', 'shadow-md');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
