import productsData from "./productsBs.js";
import{renderBuyList, renderFavList, cartList, cartPrice} from "./cart.js"

const favList= [];


const productsCardTemplate = document.getElementById("product-template");
const productsContainer = document.getElementById("products-container");
const $fragment = document.createDocumentFragment();

function createProductCard() {
  productsData.forEach((product) => {
    const clone = document.importNode(productsCardTemplate.content, true);
    clone.querySelector(
      ".product-card-img"
    ).style.backgroundImage = `url(${product.img})`;
    clone.querySelector(".product-card-title").innerText = `${product.title}`;
    clone.querySelector(
      ".product-card-price"
    ).innerText = `$ ${product.price} cop`;
    const cartBtn = clone.querySelector(".product-cartBtn");
    const favBtn = clone.querySelector(".product-favBtn");

    cartBtn.setAttribute("product-id", `${product.id}`);
    favBtn.setAttribute("product-id", `${product.id}`);

    $fragment.appendChild(clone);
    productsContainer.appendChild($fragment);
  });
}

const findProductById = (id, data) => {
  try {
    const productFound = data.find((element) => element.id === id);
    if (productFound === undefined) {
      throw new Error("Product not found");
    }
    return productFound;
  } catch (error) {
    console.error(error.message);
  }
};

const productsInteraction = (id, action) => {
  const product = findProductById(id, productsData);
  
  if (action === "favoriteList") {
    favList.push(product);
  } else if (action === "buyList") {
    const productPassToCart = {
      product,
      units: 1,
    };

   const findPro= cartList.findIndex((element)=> (element.product.id === id))
   if(findPro !== -1){
    cartList[findPro].units+=1
    cartList[findPro].product.price= cartList[findPro].product.price * cartList[findPro].units

   } else { cartList.push(productPassToCart)}

   renderBuyList()
   renderFavList()
  }
  console.log(cartList);
  console.log(favList);
};

export { createProductCard, productsInteraction };
