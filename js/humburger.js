var hamburger = document.querySelector('.hamburger__menu');
var miniMenu = document.querySelector('.mini-menu');

hamburger.onclick = function () {
    hamburger.classList.toggle('menu-active');
    miniMenu.classList.toggle('mini-menu-active');
}
