const menuBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-menu");
const nav = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {

    nav.classList.add("active");

});

closeBtn.addEventListener("click", () => {

    nav.classList.remove("active");

});