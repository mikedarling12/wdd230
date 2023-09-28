const mainNav = document.querySelector('#navigation');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    menuButton.classList.toggle('show');
})