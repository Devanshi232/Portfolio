// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
gsap.from(".gsap-reveal", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".unslate_co--section",
    start: "top 80%",
  }
});

gsap.from(".gsap-reveal-img", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".unslate_co--section",
    start: "top 80%",
  }
});

// FAQ toggle (accordion style)
document.querySelectorAll(".faq-item h4").forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("show");
  });
});

