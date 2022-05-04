const hamburger = document.querySelector(".hamburger");
const navlink= document.querySelector(".nav__links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navlink.classList.toggle("active");
}

const barlink = document.querySelectorAll(".bar-link");

barlink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navlink.classList.remove("active");
}