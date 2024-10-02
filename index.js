// javascript

const btnMenu = document.querySelector(".btn-menu"),
  btnExit = document.querySelector(".btn-exit"),
  menu = document.querySelector("nav ul");

btnMenu.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});
btnExit.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
});
