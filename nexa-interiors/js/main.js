const headerElm = document.getElementById("header-section");
const mobileNavBtn = document.getElementById("btn-mobile-nav");

mobileNavBtn.addEventListener("click", () => {
  headerElm.classList.toggle("mobile-nav-open");
});
