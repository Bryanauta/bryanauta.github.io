var hamburguerMenu = document.getElementById("hamburguer-menu");
var nav = document.getElementById("nav");
var menuIcon = document.getElementById("menu-icon");
var listItem = document.querySelectorAll(".list-item");

hamburguerMenu.addEventListener('click', function() {
    nav.classList.toggle('mobile-menu');
    menuIcon.classList.toggle('mobile-menu');
    
    if(nav.classList.contains('mobile-menu')) {
        menuIcon.src = "./assets/svg/Hamburguer-menu-close.svg";
    } else {
        menuIcon.src = "./assets/svg/Hamburguer-menu.svg";
    }
})

listItem.forEach(element => {
    element.addEventListener('click', function() {
        nav.classList.toggle('mobile-menu');
        
        if(nav.classList.contains('mobile-menu')) {
            menuIcon.src = "./assets/svg/Hamburguer-menu-close.svg";
        } else {
            menuIcon.src = "./assets/svg/Hamburguer-menu.svg";
        }
    })
})

ScrollReveal().reveal('.home-section', { delay: 500 });
ScrollReveal().reveal('.about-me-section', { delay: 500 });
ScrollReveal().reveal('.skills-section', { delay: 500 });
ScrollReveal().reveal('.projects-section', { delay: 500 });
ScrollReveal().reveal('.contact-section', { delay: 500 });