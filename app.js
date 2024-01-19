import { menu } from "./modules/menu.js";
import createProductCard from "./modules/stores.js";

document.addEventListener("DOMContentLoaded", (e) => {
  document.addEventListener("click", (e) => {
    if (e.target === menu.menuDropdownBtn) {
      menu.showMenu(menu.dropdownMenu);
    } else if (e.target === menu.cartBtn) {
      menu.showHideElement(menu.cartInterface);
    } else if (e.target === menu.favBtn) {
      menu.showHideElement(menu.favInterface);
    }
  });

  createProductCard()
});
