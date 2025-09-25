const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header_menu-list');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');      
  hamburger.classList.toggle('active');
});
