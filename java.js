const backTop = document.querySelector('.backTop');
var menu = document.getElementById('menu');
var nav = document.querySelector('#Navbar ul');
let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
}

// Change slide every 5 seconds
setInterval(changeSlide, 5000);

// Initialize the first slide
changeSlide();

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        backTop.classList.add("active");
    } else {
        backTop.classList.remove("active");
    }
});

menu.onclick = function() {
    menu.classList.toggle('open-menu');
    nav.classList.toggle('view')
};