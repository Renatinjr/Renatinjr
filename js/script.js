const btn_menu = document.querySelector(".header__btn-menu-wrapper");
const menu_mobile = document.querySelector(".header__mobile-menu-wrapper");
const btn_close = document.querySelector(".btn--close");

btn_menu.addEventListener("click", () => {
  if (menu_mobile.classList.contains("mobile--hidden")) {
    menu_mobile.classList.remove("mobile--hidden");
    btn_menu.classList.add("hidden");
  }
});

btn_close.addEventListener("click", () => {
  if (!menu_mobile.classList.contains("mobile--hidden")) {
    menu_mobile.classList.add("mobile--hidden");
    setTimeout(() => {
      btn_menu.classList.remove("hidden");
    }, "500");
  }
});
