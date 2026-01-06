function togglemenu() {
    const mobileNav = document.querySelector('.mobile-nav')
    const menuOpen = document.querySelector('.menuOpen');


    mobileNav.classList.toggle('show');

    menuOpen.style.opacity = '0';
    menuOpen.style.transform = 'rotate(90deg)';


    if (mobileNav.classList.contains('show')) {
        menuOpen.src = 'src/img/menu-close.png';
    } else {
        menuOpen.src = 'src/img/menu.png';
    }
    menuOpen.style.opacity = '1';
    menuOpen.style.transform = 'rotate(0deg)';



}

const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.remove("opacity-0", "translate-x-50");
            }, 100);
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});