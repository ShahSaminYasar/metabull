// DOM
const header = document.getElementById("header");
const navOpenBtn = document.querySelector(".nav_open_btn");
const navCloseBtn = document.querySelector(".nav_close_btn");
const navMenu = document.getElementById("nav_menu");
const navLinks = navMenu.querySelectorAll("a");
window.addEventListener("scroll", () => {
  let scrollOffset = 100;

  if (
    window.scrollY > scrollOffset ||
    document.documentElement.scrollTop > scrollOffset
  ) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const navMenuTL = gsap.timeline({
  paused: true,
});

gsap.matchMedia().add("(max-width: 768px", () => {
  navMenuTL
    .from(navMenu, {
      translateX: "-100%",
      opacity: 0,
      pointerEvents: "none",
      duration: 0.4,
      delay: 0,
    })
    .from(
      navLinks,
      {
        x: -50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
      },
      "-=0.1"
    );

  return () => {
    navMenuTL.kill();
  };
});

navOpenBtn.addEventListener("click", () => {
  navMenuTL.play();
});

navCloseBtn.addEventListener("click", () => {
  navMenuTL.reverse();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenuTL.reverse();
  });
});
