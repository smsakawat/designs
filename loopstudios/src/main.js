const btn = document.getElementById("btn-menu")
const headerEl = document.getElementById("header")

btn.addEventListener("click", function () {
  btn.classList.toggle("open-close")
  headerEl.classList.toggle("nav-open")
})
