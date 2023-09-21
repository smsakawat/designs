// Make mobile navigation works for click event
const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// Add Listener on menu button
navBtnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Set the current year in copyright text
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Adding scroll behavior smooth for all browsers using event delegation
document.body.addEventListener("click", function (event) {
  // Scroll back to top
  if (
    event.target.tagName === "IMG" &&
    event.target.classList.contains("logo")
  ) {
    event.preventDefault();

    // We also have to use a polyfill for this which is added in index.html
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Scrolling for other links with smooth behavior
  if (event.target.tagName === "A" && event.target.hasAttribute("href")) {
    const href = event.target.getAttribute("href");

    if (href !== "#" && href.startsWith("#") && document.querySelector(href)) {
      event.preventDefault();
      const targetEl = document.querySelector(href);
      targetEl.scrollIntoView({ behavior: "smooth" });

      // Closing  mobile navbar
      if (event.target.classList.contains("main-nav-link"))
        headerEl.classList.toggle("nav-open");
    }
  }
});

// Sticky Navigation using Intersection Observer API
const observer = new IntersectionObserver(
  (entries) => {
    const entObj = entries[0];
    console.log(entObj.isIntersecting);
    if (!entObj.isIntersecting) {
      document.body.classList.add("sticky");
    } else if (entObj.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // Options
    root: null,
    threshold: 0,
    rootMargin: "-76px",
  }
);
const heroSectionEl = document.querySelector(".section-hero");
// Observing hero section
observer.observe(heroSectionEl);

//Submit form using AJAX in netlify
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

document.querySelector("cta-form").addEventListener("submit", handleSubmit);
