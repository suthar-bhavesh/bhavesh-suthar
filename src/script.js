function togglemenu() {
    const mobileNav = document.querySelector('.mobile-nav')
    const menuOpen = document.querySelector('.menuOpen');


    mobileNav.classList.toggle('show');

    menuOpen.style.opacity = '0';
    menuOpen.style.transform = 'rotate(90deg)';

    setTimeout(() => {
        if (mobileNav.classList.contains('show')) {
            menuOpen.src = 'src/img/menu-close.png';
        } else {
            menuOpen.src = 'src/img/menu.png';
        }


        menuOpen.style.opacity = '1';
        menuOpen.style.transform = 'rotate(0deg)';
    }, 300)

}