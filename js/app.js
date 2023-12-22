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


// Toggle Theme
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

const root = document.querySelector(":root");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.style.background = '#222222';
        body.style.transition = '0.32s';
        root.style.setProperty("--txtanimation", '#222222');

        root.style.setProperty("--darkgray", '#222222');
        root.style.setProperty("--dark", '#1F1F1F');
        root.style.setProperty("--red", '#F26C4F');
        root.style.setProperty("--white", '#ffffff');
        root.style.setProperty("--offwhite", '#f7f7f7');
        root.style.setProperty("--name", '#f7f7f7');
        root.style.setProperty("--red-box", '#f7f7f7');

    }else{
        body.style.background = 'white';
        body.style.transition = '0.32s';
        root.style.setProperty("--txtanimation", 'white');
        root.style.setProperty("--red", '#F26C4F');

        root.style.setProperty("--darkgray", '#f7f7f7');
        root.style.setProperty("--dark", '#f7f7f7');
        root.style.setProperty("--white", '#222222');
        root.style.setProperty("--name", '#222222');
        root.style.setProperty("--red-box", 'white');
    }
});
