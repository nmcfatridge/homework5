const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  siteHeader.classList.toggle("nav-open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    siteHeader.classList.remove("nav-open");
  }
});