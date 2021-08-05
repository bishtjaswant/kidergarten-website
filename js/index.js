let navbar = document.querySelector(".navbar");
let  menu= document.querySelector('#menu');


menu.addEventListener("click", function() {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('navbar__toggle')
});


window.onscroll= function() {

    menu.classList.remove('fa-times');
    navbar.classList.remove('navbar__toggle');
}