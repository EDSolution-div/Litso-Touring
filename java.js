const backTop = document.querySelector('.backTop');
var menu = document.getElementById('menu');
var nav = document.querySelector('#Navbar ul');

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