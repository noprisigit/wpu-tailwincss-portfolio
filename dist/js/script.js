// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Dropdown Navbar
const dropdownButton = document.querySelector("#dropdownButton");
const dropdownNavbar = document.querySelector("#dropdownNavbar");
const dropdownNavbarHidden = document.querySelector("#dropdownNavbar .hidden");

dropdownButton.addEventListener("click", function() {
  dropdownNavbar.classList.toggle("hidden");
});

const navigation = document.querySelectorAll("nav a");
navigation.forEach(function(nav) {
  nav.addEventListener("click", function() {
    dropdownNavbar.classList.add("hidden");
  });
})

document.addEventListener("click", function(event) {
  if (event.target != dropdownButton && event.target.parentNode != dropdownButton) {
    dropdownNavbar.classList.add("hidden");
  }
});

// Hamburger
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector('#nav');

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("hidden");
});