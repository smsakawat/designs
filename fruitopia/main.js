const menuBtn = document.querySelector(".btn-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open-close");
  document.querySelector(".mobile-nav").classList.toggle("active");
});
