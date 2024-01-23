const productsTemplate = {
  category: "",
  ingredients: [""],
  price: 0,
  recommended: ["medianos", "pequeños", "grandes"],
  weight: 0,
  img: "url",
};

const productsData = [
  {
    category: "Galletas",
    id: "Gall-Hig",
    title:"Galletas de higado",
    ingredients: ["higado", "avena", "zanahoria"],
    price: 8500,
    recommended: [ "pequeños"],
    weight: 0,
    img: "../src/30Galletas.jpg",
  },
  {
    category: "Galletas",
    title:"Galletas de pollo",
    id: "Gall-pollo",
    ingredients: ["Pollo", "Avena", "Calabacín"],
    price: 20000,
    recommended: ["medianos", "grandes"],
    weight: 300,
    img: "../src/100Galletas.jpg",
  },
  {
    category:"Helado",
    title:"Helado de Pollo",
    id: "helado-01",
    ingredients:["Pollo", "Zanahoria"],
    price:5000,
    recommended:["grandes"],
    weight:100,
    img:"../src/icecream.jpg"
},
{
    category:"Pastel",
    id: "pastel-o1",
    title:"Pastel de higado",
    ingredients:["Pollo", "Avena", "huevo", ],
    price:15000,
    recommended:["medianos", "pequeños","grandes"],
    weight:200,
    img:"../src/birthday.avif"
}
];


export default productsData