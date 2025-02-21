document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero").classList.add("visible");

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    let scrollY = window.scrollY;

    // Augmente le flou en fonction du scroll
    let blurValue = Math.min(scrollY / 50, 10); // Limite à 10px
    navbar.style.backdropFilter = `blur(${blurValue}px)`;
    navbar.style.webkitBackdropFilter = `blur(${blurValue}px)`;
  });
});
