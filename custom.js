let humburger = document.querySelector('.humbarger');
let menuList = document.querySelector('.menu-list');
let links = document.querySelectorAll('a[href^="#"]');

humburger.addEventListener('click', toggleMobileMenu);
links.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (menuList.style.display === 'block') {
      menuList.style.display = 'none';
    } else {
      menuList.style.display = 'block';
    }
  });
});

function toggleMobileMenu(e) {
  e.preventDefault();
  if (menuList.style.display === 'block') {
    menuList.style.display = 'none';
  } else {
    menuList.style.display = 'block';
  }
}
