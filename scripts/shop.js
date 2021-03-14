let bannerPages = ["bd1", , "bd2", "bd3", "bd4"];

bannerAnimate = (page) => {
  var distance = 0;
  if (page == "bd1") {
    distance = 0;
  }
  if (page == "bd2") {
    distance = -100;
  }
  if (page == "bd3") {
    distance = -200;
  }
  if (page == "bd4") {
    distance = -300;
  }
  tl.to(".banner-gallery", { x: "" + distance + "%", duration: 1 });
};

cartAnimate = () => {
  let bill = document.getElementsByClassName("bill");
  bill[0].classList.toggle("bill-active");
};

let items = [];
getItem = (n, i, p) => {
  items.push([n, i, p]);

  let display = document.getElementById("cart-mini-display");

  // console.log(items[i][0], items[i][1], items[i][2])
  let div = document.createElement("div");
  div.classList.add("item");
  let image_container = document.createElement("div");
  image_container.classList.add("cart-image-container");
  let image = document.createElement("img");
  image.src = i;

  let text_div = document.createElement("div");
  text_div.classList.add("cart-item-text");
  let name = document.createElement("h3");
  let price = document.createElement("p");

  let removeBtn = document.createElement('button')
  removeBtn.innerText = "Remove"
  removeBtn.classList.add("remove-button")


  name.appendChild(document.createTextNode(n));
  price.appendChild(document.createTextNode('₹'+p));
  text_div.appendChild(name);
  text_div.appendChild(price);
  text_div.appendChild(removeBtn)
  image_container.appendChild(image);

  div.appendChild(image_container);
  div.appendChild(text_div);
  display.appendChild(div);

  removeBtn.addEventListener('click', () => {
    display.removeChild(div)
    items.pop([n, i, p])
    priceUpdate()

    
    
  })

  priceUpdate()
  addedAnimation()

};

String.prototype.format = function () {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k]);
  }
  return a;
};

priceUpdate = () => {
  let price = document.getElementById('insert-price')
  let discount = document.getElementById('insert-discount')
  let charges = document.getElementById('insert-dcharges')
  let total = document.getElementById('insert-total')

  var price_value = 0
  for (i in items){
    price_value += items[i][2]
  }
  var discount_value = 20
  var charges_value = 'FREE'

  var total_value = price_value - (price_value*20/100)

  

  price.innerText = "₹"+price_value+""
  discount.innerText = ""+discount_value+"%"
  charges.innerText = ""+charges_value+""
  total.innerText = "₹"+total_value+""

  if (items.length == 0){
    price.innerText = ''
    discount.innerText = ''
    charges.innerText = ''
    total.innerText = ''
  }
}

addedAnimation = () => {
  const submit = document.querySelector(".added");
  submit.classList.add("show")
  setTimeout(() => {
      submit.classList.remove("show");
    }, 5000);
}