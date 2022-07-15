let sidebar = document.querySelector('#sidebar');
let sidebarBtn = document.querySelector('#menuBarBtn i');
let overlay = document.querySelector('#overlay');
let body = document.querySelector('body');
let closeSidebar = document.querySelector('#closeSidebar i');

sidebarBtn.addEventListener('click', () => {
  sidebar.style.left = '0';
  overlay.classList.add('active');
  body.classList.add('overflow_hidden');
});

overlay.addEventListener('click', CloseSidebar, false);

closeSidebar.addEventListener('click', CloseSidebar, false);

function CloseSidebar() {
  sidebar.style.left = '-150%';
  overlay.classList.remove('active');
  body.classList.remove('overflow_hidden');
}

let preload = document.querySelector('#preload');

window.addEventListener('load', () => {
  preload.style.display = 'none';
});
