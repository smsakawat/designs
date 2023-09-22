const headerElement = document.getElementById("header-section");
const mobileNavBtn = document.getElementById("btn-mobile-nav");

mobileNavBtn.addEventListener("click", () => {
  headerElement.classList.toggle("mobile-nav-open");
});
