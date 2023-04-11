document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
  
    window.onscroll = function () {
      if (window.scrollY > 50) {
        navbar.classList.add("solid");
      } else {
        navbar.classList.remove("solid");
      }
    };
  });
  