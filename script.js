var hamburguerMenu = document.getElementById("hamburguer-menu");
var nav = document.getElementById("nav");
var menuIcon = document.getElementById("menu-icon");
var listItems = document.querySelectorAll(".list-item");

hamburguerMenu.addEventListener('click', function() {
    nav.classList.toggle('mobile-menu');
    menuIcon.classList.toggle('mobile-menu');
    
    if(nav.classList.contains('mobile-menu')) {
        menuIcon.src = "./assets/svg/Hamburguer-menu-close.svg";
    } else {
        menuIcon.src = "./assets/svg/Hamburguer-menu.svg";
    }
})

listItems.forEach(element => {
    element.addEventListener('click', function() {
        nav.classList.toggle('mobile-menu');
        
        if(nav.classList.contains('mobile-menu')) {
            menuIcon.src = "./assets/svg/Hamburguer-menu-close.svg";
        } else {
            menuIcon.src = "./assets/svg/Hamburguer-menu.svg";
        }
    })
})

ScrollReveal().reveal(".slide-left", {
    duration: 2000,
    origin: "right",
    distance: "1000px",
    easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-right", {
    duration: 2000,
    origin: "left",
    distance: "1000px",
    easing: "ease-in-out"
});
