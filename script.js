var hamburguerMenu = document.getElementById("hamburguer-menu");
var nav = document.getElementById("nav");
var menuIcon = document.getElementById("menu-icon");
var listItem = document.querySelectorAll(".list-item");

hamburguerMenu.addEventListener('click', function() {
    nav.classList.toggle('mobile-menu');
    menuIcon.classList.toggle('mobile-menu');
    
    if(menuIcon.classList.contains('mobile-menu')) {
        menuIcon.src = "./assets/svg/Hamburguer-menu-close.svg";
    } else {
        menuIcon.src = "./assets/svg/Hamburguer-menu.svg";
    }
})

listItem.addEventListener('click', function(){
    window.alert("list item");
})

