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
    const Error = document.querySelectorAll('.error');

    MyForm.addEventListener('submit', (e) => {
        e.preventDefault();


        const FormconfirmBox = document.createElement('div');
        FormconfirmBox.className = "inset-0 bg-opacity-50 z-50 absolute w-full left-0 flex justify-center items-center bg-black-60 backdrop-blur-sm z-50"

        FormconfirmBox.innerHTML = `
            <div class="success-message bg-[#222222] rounded-2xl p-5 text-center transform-all scale-100 animate-fade-in duration-300 transition-all max-w-sm gap-3 flex flex-col items-center absolute top-48">
            
                <div class="success-icon flex flex-col items-center border-4 rounded-full border-white w-30 bg-transparent h-30 relative animate-Circle-Rotate delay-300">

                    <span class="line-tick-long w-15 translate -rotate-45 border-2 bg-white rounded-full absolute top-13 left-9 animate-draw-check delay-300"></span>

                    <span class="line-tick-short w-10 border-2 bg-white rounded-full absolute translate rotate-45 top-15 left-3"></span>
                </div>
                    <p>Your Enquiry has been submitted</p>

                    <button class="closeBtn bg-red-500 w-17 rounded-md p-2 cursor-pointer">Ok</button>
            </div>`


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
                MyForm.append(FormconfirmBox)


                MyForm.reset();

                Userinput.forEach(inputs => inputs.style.border = "1px solid #ccc");


                const CloseBtn = FormconfirmBox.querySelector('.closeBtn')

                CloseBtn.addEventListener('click', () => {
                    FormconfirmBox.remove();
                })
            });



        } else {
            Error.forEach((Inputerror) => {
                Inputerror.textContent = "Please fill required ields";
                Inputerror.style.color = "red";
            });
            return;
        }

    });

});