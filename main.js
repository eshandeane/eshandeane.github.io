// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });
})();

// Scroll reveal (progressive enhancement; no-JS and reduced-motion get static content)
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('js');
  var els = document.querySelectorAll(
    '.section-head, .case-card, .ai-item, .stat, .step-card, .domain-card, .contact-card, .bg-row, .result-grid .r'
  );
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
    io.observe(el);
  });
})();
