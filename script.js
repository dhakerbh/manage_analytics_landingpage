const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".topmenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("activee");
  menu.classList.toggle("active");
});

document.querySelectorAll(".topmenu").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("activee");
    menu.classList.remove("active");
  })
);
