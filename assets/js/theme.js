(function () {
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var sun = document.querySelector('#dark-mode-toggle .sun-icon');
    var moon = document.querySelector('#dark-mode-toggle .moon-icon');
    if (sun) sun.style.display = theme === 'dark' ? 'none' : 'block';
    if (moon) moon.style.display = theme === 'dark' ? 'block' : 'none';
  }

  function initThemeToggle() {
    var button = document.getElementById('dark-mode-toggle');
    if (!button) return;

    var stored = 'light';
    try { stored = localStorage.getItem('theme') || 'light'; } catch (e) {}
    applyTheme(stored);

    button.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
