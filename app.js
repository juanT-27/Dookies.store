import { menu } from "./modules/menu.js";
import {createProductCard, productsInteraction} from "./modules/stores.js";

const productsContainer= document.querySelector("#products-container")

document.addEventListener("DOMContentLoaded", (e) => {
  document.addEventListener("click", (e) => {
    if (e.target === menu.menuDropdownBtn) {
      menu.showMenu(menu.dropdownMenu);
    } else if (e.target === menu.cartBtn) {
      menu.showHideElement(menu.cartInterface);
    } 
  });

  productsContainer.addEventListener("click", (e)=>{
    const productId= e.target.getAttribute("product-id")
   if( e.target.classList.contains("product-cartBtn")){
      productsInteraction(productId, "buyList")
    }
  })


  createProductCard()
});
