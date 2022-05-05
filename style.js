const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("click", mobileMenu);
