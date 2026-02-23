// Over Lay Function JS
const hamBurgerIcon = document.getElementById("hamburger-menu");
const headerActionList = document.querySelector(".header-navigation-wrapper");
const overlay = document.getElementById("overlay");

const toggleMenu = () => {
  hamBurgerIcon.classList.toggle("active");
  headerActionList.classList.toggle("show");
  overlay.classList.toggle("active");
};

// Toggle on hamburger click
hamBurgerIcon.addEventListener("click", toggleMenu);

// Close everything when clicking on the overlay
overlay.addEventListener("click", toggleMenu);
