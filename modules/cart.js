const $cartProductTemplate = document.querySelector("#cart-product-template");
const $cartContainer = document.querySelector(".renderProducts");
const $fragment = document.createDocumentFragment();
const $totalCartPrice= document.querySelector(".totalCartPrice")

let cartList = [];
let cartTotalPrice = 0;

const multiplyData = (units, price) => {
  return units * price;
};

const renderBuyList = () => {
  $cartContainer.innerHTML = "";

  cartList.forEach((element) => {
    const $clone = document.importNode($cartProductTemplate.content, true);
    $clone.querySelector(".img").src = `${element.product.img}`;
    $clone.querySelector(".title").innerText = `${element.product.title} `;
    $clone.querySelector(".productPrice").innerText = `${multiplyData(element.units, element.product.price)} `;

    const unitsInput = $clone.querySelector(".productUnits");
    unitsInput.value = `${element.units}`;
    unitsInput.addEventListener("keyup", (e) => {
      element.units = parseInt(unitsInput.value);
      renderBuyList();
    });

    $fragment.appendChild($clone);
  });
  $cartContainer.appendChild($fragment);
  calculateTotalPrice()
};

const renderFavList = () => {};

const calculateTotalPrice = () => {
    const prices=[]
  for (let index = 0; index < cartList.length; index++) {
    let price = cartList[index].product.price;
    let units = cartList[index].units;
    prices.push(multiplyData(price, units));
  }

 cartTotalPrice= prices.reduce(function(last, actual){
    return last + actual
  })
 
  $totalCartPrice.innerHTML= cartTotalPrice;
};

export { renderBuyList, renderFavList, cartList, cartTotalPrice };
