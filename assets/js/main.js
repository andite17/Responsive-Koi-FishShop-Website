// ======= Toggle menu button ============
const btnMenu = document.querySelector(".icon-menu"),
  navMenu = document.querySelector(".nav__menu"),
  btnClose = document.querySelector(".icon-close");

if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
  if (btnClose) {
    btnClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.querySelector(".nav__menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
