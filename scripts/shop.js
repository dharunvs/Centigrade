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
  price.appendChild(document.createTextNode(p));
  text_div.appendChild(name);
  text_div.appendChild(price);
  text_div.appendChild(removeBtn)
  image_container.appendChild(image);

  div.appendChild(image_container);
  div.appendChild(text_div);
  display.appendChild(div);

  removeBtn.addEventListener('click', () => {
    console.log(i)
    display.removeChild(div)
  })
};

String.prototype.format = function () {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k]);
  }
  return a;
};

remove = () => {
  console.log('Removed')
}

displayCart = () => {};
