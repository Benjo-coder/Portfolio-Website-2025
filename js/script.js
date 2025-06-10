let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let top = window.scrollY;

  sections.forEach(section => {
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  const header = document.querySelector('header');
  header.classList.toggle('sticky', top > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
  origin: 'top',
  distance: '30px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.home-img, .services-container .portfolio-box, .contact form', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.home-content h1, .about-img', {
  origin: 'left',
  distance: '30px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.home-content p, .about-content', {
  origin: 'right',
  distance: '30px',
  duration: 1000,
  delay: 200
});

const typed = new Typed('.multiple-text', {
  strings: ['Video Editor', 'Graphic Designer', 'Artist', 'Frontend Developer', 'Musician'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


