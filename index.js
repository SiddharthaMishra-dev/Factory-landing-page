const bottomPanel = document.querySelector(".bottom-panel");

const products = [
  {
    id: "p1",
    image: "https://m.media-amazon.com/images/I/71CA2d53yML._SL1500_.jpg",
    name: "Hero",
    price: 10000,
  },
  {
    id: "p2",
    image: "https://m.media-amazon.com/images/I/81wGn2TQJeL._SL1500_.jpg",
    name: "Hercules",
    price: 12000,
  },
  {
    id: "p3",
    image: "https://m.media-amazon.com/images/I/61cb+YxJrML._SL1200_.jpg",
    name: "Avon",
    price: 13000,
  },
];

const cart = [];
function addToCart(id) {
  let rawCart = {
    id: "p3",
    image: "https://m.media-amazon.com/images/I/61cb+YxJrML._SL1200_.jpg",
    name: "SamratXX",
    price: 13000,
    quantity: 1,
  };
  let foundProduct = cart.find((product) => product.id === products[id].id);
  let foundProductIndex = cart.findIndex(
    (product) => product.id === products[id].id
  );
  if (foundProduct) {
    cart.map((product) => {
      if (product === foundProduct) {
        product.quantity = product.quantity + 1;
        rawCart = product;
      }
    });
    cart[foundProductIndex] = rawCart;
    localStorage.setItem("data", JSON.stringify(cart));
  } else {
    rawCart = { ...products[id], quantity: 1 };
    cart.push(rawCart);
    localStorage.setItem("data", JSON.stringify(cart));
  }
  let totalItem = 0;
  cart.forEach(function (product) {
    totalItem += product.quantity;
  });
  bottomPanel.innerHTML = `<h3 class="cart-content"><a href="./cart.html" class="link" ><i class="fa-solid fa-cart-shopping"></i> ${totalItem}</a></h3>`;
}
