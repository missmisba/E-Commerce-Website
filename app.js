const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 500,
    colors:[
      {
        code: "black",
        img: "./IMAGES/air.png",
      },
      {
        code: "darkblue",
        img: "IMAGES/air2.png",
      },
    ],
  },

  {
    id: 2,
    title: "Air Jordan",
    price: 199,
    colors:[
      {
        code: "lightgray",
        img: "./IMAGES/jordan.png",
      },
      {
        code: "green",
        img: "IMAGES/jordan2.png",
      },
    ],
  },

  {
    id: 3,
    title: "Blazer",
    price: 350,
    colors:[
      {
        code: "lightgray",
        img: "./IMAGES/blazer.png",
      },
      {
        code: "green",
        img: "IMAGES/blazer2.png",
      },
    ],
  },

  {
    id: 4,
    title: "Crater",
    price: 200,
    colors:[
      {
        code: "black",
        img: "./IMAGES/crater.png",
      },
      {
        code: "lightgray",
        img: "IMAGES/crater2.png",
      },
    ],
  },

  {
    id: 5,
    title: "Hippie",
    price: 299,
    colors:[
      {
        code: "gray",
        img: "./IMAGES/hippie.png",
      },
      {
        code: "darkblue",
        img: "IMAGES/hippie2.png",
      },
    ],
  },  

];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", () => {
      //change the current slide  
      wrapper.style.transform = 'translateX(${-100 * index}vw)';

      //change the choosen product
      choosenProduct = products[index];

      //change texts of currentProduct
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;

      //assign new colors
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
   });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index)=>{
  size.addEventListener("click", ()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white";
      size.style.color="black";
    });
    size.style.backgroundColor="black";
    size.style.color="white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
  payment.style.display="flex";
});

close.addEventListener("click", ()=>{
  payment.style.display="none";
});

/*
const buyButton = document.querySelector(".buyButton");
const product = document.querySelector(".product");

buyButton.addEventListener("click", ()=>{
  product.style.display="flex";
});
*/