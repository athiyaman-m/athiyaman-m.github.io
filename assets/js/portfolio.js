(function () {
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.mobile-menu');

  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      const isOpen = document.body.classList.toggle('menu-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menu.setAttribute('aria-hidden', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        menuButton.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (element) {
    observer.observe(element);
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}());
