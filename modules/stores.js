import productsData from "./productsBs.js";

const productsCardTemplate= document.getElementById("product-template");
const productsContainer= document.getElementById("products-container");
const $fragment= document.createDocumentFragment();

function createProductCard() {
productsData.forEach(product => {
    const clone= document.importNode(productsCardTemplate.content, true);
    clone.querySelector(".product-card-img").style.backgroundImage= `url(${product.img})`
    clone.querySelector(".product-card-title").innerText=`  ${product.title}`
    clone.querySelector(".product-card-price").innerText=`$ ${product.price} cop`
    const cartBtn= clone.querySelector(".product-cartBtn")
    const favBtn= clone.querySelector(".product-favBtn")

    cartBtn.setAttribute("product-id", `${product.id}`)
    favBtn.setAttribute("product-id", `${product.id}`)

    $fragment.appendChild(clone)
    productsContainer.appendChild($fragment)
});

};

// const renderProducts = ()=>{
//     const product= renderProducts()
//     console.log(product)
    
// }

export default createProductCard