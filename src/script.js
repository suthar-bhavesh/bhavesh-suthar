function togglemenu() {
    const mobileNav = document.getElementById('navMenu');
    const menuIcon = document.getElementById('menuIcon');

    mobileNav.classList.toggle('-translate-y-full');
    mobileNav.classList.toggle('translate-y-0');

    const isOpen = mobileNav.classList.contains('translate-y-0');

    if (isOpen) {
        menuIcon.src = 'src/img/menu-close.png';
        menuIcon.style.transform = 'rotate(90deg)';
    } else {
        menuIcon.src = 'src/img/menu.png';
        menuIcon.style.transform = 'rotate(0deg)';
    }
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


// const user1 = { name: "Ava", meta: { age: 21 } };
// const user2 = user1;

// const user3 = { ...user2 }; 

// user2.name = "Liam";
// user3.meta.age = 30;

// console.log(user1.name);
// console.log(user1.meta.age);
// console.log(user2.meta.age);
// console.log(user3.name);