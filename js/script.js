const btn_menu = document.querySelector(".header__btn-menu-wrapper");
const menu_mobile = document.querySelector(".header__mobile-menu-wrapper");

btn_menu.addEventListener("click", () => {
  if (menu_mobile.classList.contains("mobile--hidden")) {
    menu_mobile.classList.remove("mobile--hidden");
  } else {
    menu_mobile.classList.add("mobile--hidden");
  }
});
