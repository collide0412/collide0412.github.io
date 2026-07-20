(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const themeLabel = themeToggle?.querySelector('.theme-label');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  const readStoredTheme = () => {
    try {
      return localStorage.getItem('theme');
    } catch (error) {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      // The selected theme still applies for this page view.
    }
  };

  const updateThemeControl = () => {
    if (!themeToggle || !themeLabel) return;
    const isDark = root.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeLabel.textContent = 'Dark theme';
  };

  updateThemeControl();

  themeToggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    saveTheme(nextTheme);
    updateThemeControl();
  });

  if (!readStoredTheme()) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      if (readStoredTheme()) return;
      root.dataset.theme = event.matches ? 'dark' : 'light';
      updateThemeControl();
    });
  }

  const closeMenu = (restoreFocus = false) => {
    if (!navToggle || !navMenu) return;
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.querySelector('.sr-only').textContent = 'Open navigation';
    if (restoreFocus) navToggle.focus();
  };

  navToggle?.addEventListener('click', () => {
    const willOpen = !navMenu.classList.contains('is-open');
    navMenu.classList.toggle('is-open', willOpen);
    navToggle.setAttribute('aria-expanded', String(willOpen));
    navToggle.querySelector('.sr-only').textContent = willOpen ? 'Close navigation' : 'Open navigation';
  });

  navMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu?.classList.contains('is-open')) {
      closeMenu(true);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
})();
