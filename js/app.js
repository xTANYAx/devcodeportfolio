const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');        
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const fadeupElements = document.querySelectorAll('.fadeup');
fadeupElements.forEach((el) => observer.observe(el));

const fadedownElements = document.querySelectorAll('.fadedown');
fadedownElements.forEach((el) => observer.observe(el));

const faderightElements = document.querySelectorAll('.faderight');
faderightElements.forEach((el) => observer.observe(el));

const fadeinElements = document.querySelectorAll('.fadein');
fadeinElements.forEach((el) => observer.observe(el));
