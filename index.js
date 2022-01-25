(function () {
    const hamburgerItem = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.nav-close');
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
    hamburgerItem.addEventListener('click', () => {
        menu.classList.add('nav-active');
    });
}());