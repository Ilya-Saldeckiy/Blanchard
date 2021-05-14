
window.addEventListener('DOMContentLoaded', function() {

    let burger = document.querySelector('.header__burger');
    let menuItem = document.querySelector('.menu-nav__item');
    let burgerClose = document.querySelector('.burger-close');
    let navMenu = document.querySelector('.menu-nav');

    let search = document.querySelector('.search-button');
    let form = document.querySelector('.header__search-tablet')

    burger.addEventListener('click', function () {
        navMenu.classList.toggle('tablet-menu__active')
    })

    menuItem.addEventListener('click', function () {
        navMenu.classList.remove('tablet-menu__active')
    })

    burgerClose.addEventListener('click', function () {
        navMenu.classList.remove('tablet-menu__active')
    })

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            navMenu.classList.remove('tablet-menu__active')
        }
    })

    search.addEventListener('click', function() {
        form.classList.add('search-active')
    })
})