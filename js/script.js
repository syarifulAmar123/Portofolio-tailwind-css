// Navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger Menu

const hamburger = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// dark mode
let theme = "light";
function toggleDarkTheme() {
  if (sessionStorage.getItem("theme") === "light") {
    sessionStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  } else {
    sessionStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  }
}
document
  .querySelector(".toggle-circle")
  .addEventListener("click", toggleDarkTheme);
if (sessionStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}
