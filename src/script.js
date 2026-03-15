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
                entry.target.classList.remove("opacity-0", "translate-y-50");
            }, 100);
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


    const MyForm = document.querySelector('.myForm');
    const Userinput = document.querySelectorAll('.UserField')
    const Submitbtn = document.querySelector('.BtnSubmit');
    const Error = document.querySelectorAll('.error');


    MyForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let FormValid = true;
        let FormData = {};

        Userinput.forEach((Inputs) => {

            const Value = Inputs.value.trim();
            const FieldName = Inputs.getAttribute('name') || Inputs.placeholder;

            if (Value === "") {
                FormValid = false;
                Inputs.style.border = "2px solid red";
            } else {
                Inputs.style.border = "2px solid green";
                FormData[FieldName] = Value;
            };

        });

        if (FormValid) {
            Error.forEach((Inputerror) => {
                Inputerror.textContent = "";
            });

            alert('Form Submitted Successfully');
            MyForm.reset();

            Userinput.forEach(inputs => inputs.style.border = "1px solid #ccc");

        } else {
            Error.forEach((Inputerror) => {
                Inputerror.textContent = "Please fill required ields";
                Inputerror.style.color = "red";
            });
        }

    });

});