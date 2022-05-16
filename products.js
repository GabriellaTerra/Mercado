const tagBody = document.querySelector("body")
const tagNav = document.createElement("nav")
tagBody.append(tagNav)

const tagImagem = document.createElement("img")
tagImagem.src = "./img/brand/logo.svg"
tagImagem.alt="Imagem da logotipo do Virtual Market de cor preta"
tagImagem.title="Imagem da logotipo do Virtual Market de cor preta"
tagNav.appendChild(tagImagem)


const tagMain1 = document.createElement("main")
tagMain1.classList.add("container")
tagBody.appendChild(tagMain1)


const tagSection = document.createElement("section")
tagSection.classList.add("products-section")
tagMain1.appendChild(tagSection)

const tagH1 = document.createElement("h1")
tagH1.innerText = "Frutas"
tagSection.appendChild(tagH1)

const tagMain2 = document.createElement("main")
tagMain2.classList.add("products-content")
tagSection.appendChild(tagMain2)

const tagUl = document.createElement("ul")
tagMain2.appendChild(tagUl)

const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

function criarLista (produts){
  for(let i = 0; i < produts.length; i++){
   
  const tagLi =  document.createElement("li")
  tagLi.classList.add("product")
  const  tagImg = document.createElement("img")
if(products[i].image === undefined){
   products[i].image = src="no-img.svg"
}
  tagImg.title = products[i].title
  tagImg.alt = products[i].imageDescription
  tagImg.src = products[i].image
  tagImg.appendChild(tagLi)
  tagImg.classList.add("product-img")
  
  const tagMain3 = document.createElement("main")
  tagMain3.classList.add("product-main")
  
const tagTitulo = document.createElement("h1")
tagTitulo.classList.add("product-title")
tagTitulo.innerText = products[i].title
tagMain3.appendChild(tagTitulo)

const tagTitulo2 = document.createElement("h5")
tagTitulo2.classList.add("product-category")
tagTitulo2.innerText = products[i].category
tagMain3.appendChild(tagTitulo2)

tagLi.appendChild(tagMain3)

const tagStrong = document.createElement("strong")
tagStrong.classList.add ("product-price")
tagStrong.innerText = products[i].price 
tagMain3.appendChild(tagStrong)
tagLi.appendChild(tagMain3)

tagUl.appendChild(tagLi)

  }
} criarLista(products)