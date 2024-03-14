/*============================ scroll reveal ============================ */
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-container, projects-box', {origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*============================ typed js ============================ */
const typed = new Typed('.multiple-text', {
  strings: ['Back-end Developer', 'Java Developer'],
  typeSpeed: 70,
  backSpedd: 70,
  backDelay: 1000,
  loop: true,
})
