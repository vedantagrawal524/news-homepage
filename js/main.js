const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const page = document.querySelector('.page');
const navLinks = document.querySelectorAll('.nav-links');

menuButton.addEventListener('click', () => {
     nav.classList.toggle('navActive');
     page.classList.toggle('navActive');
});

document.addEventListener('click', (e) => {
     if (
          nav.classList.contains('navActive') &&
          !e.target.closest('.menu-button') &&
          !e.target.closest('.navs')
     ) {
          nav.classList.remove('navActive');
          page.classList.remove('navActive');
     }
});

document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape' && nav.classList.contains('navActive')) {
          nav.classList.remove('navActive');
          page.classList.remove('navActive');
     }
});

navLinks.forEach((navLink) => {
     navLink.addEventListener('click', (e) => {
          if (nav.classList.contains('navActive')) {
               nav.classList.remove('navActive');
               page.classList.remove('navActive');
          }
     });
});
