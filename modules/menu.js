const menuDropdownBtn = document.getElementById("dropdownBtn"),
  dropdownMenu = document.querySelector(".header-main-nav"),
  searchBarBtn = document.getElementById("search-barBtn"),
  searchBar = document.getElementById("search-bar"),
  cartBtn = document.getElementById("cartBtn"),
  cartInterface = document.querySelector(".cart");
  


const showMenu = (hideElement) => {
  const visibilityState = getComputedStyle(hideElement).visibility;
  const isVisible = visibilityState === "hidden" ? "visible" : "hidden";
  hideElement.style.visibility = isVisible;
};

const showHideElement = (hideElement) => {
  hideElement.classList.toggle("displayHidden");
  
  hideElement.addEventListener("mouseleave", ()=>{
    hideElement.classList.add("displayHidden")
  })
};


const menu = {
  menuDropdownBtn,
  dropdownMenu,
  searchBar,
  searchBarBtn,
  showMenu,
  showHideElement,
  cartBtn,
  cartInterface,
  
};
export { menu };
