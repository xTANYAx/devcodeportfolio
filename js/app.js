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
const about = document.getElementById('aboutme');
const hero = document.getElementById('theme-hero');

const after = document.querySelector(":root");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.style.background = '#222222';
        body.style.transition = '1s';

        about.style.background = '#1f1f1f';
        about.style.color = 'white';

        hero.style.color = 'white';
        after.style.setProperty("--darkgray", '#222222');
    }else{
        body.style.background = 'white';
        body.style.transition = '1s';

        about.style.background = '#f1f1f1';
        about.style.color = '#222222';

        hero.style.color = '#222222';
        after.style.setProperty("--darkgray", 'white');
    }
});
