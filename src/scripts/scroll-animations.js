export function initScrollAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        e.target.classList.add('in-view');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(
    '.aos:not(.is-visible), .anim-from-right, .anim-from-left, .anim-from-bottom, .std-photo'
  ).forEach((el) => obs.observe(el));
}