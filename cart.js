const cartShowcase = document.getElementById("cartShowcase");
const quantityInput = document.getElementById("quantity-input");
let cartList = [];
function fetchCart() {
  let rawData = localStorage.getItem("data");
  let tempList = JSON.parse(rawData);
  cartList = tempList;
  console.log(cartList);
  displayCart();
}

function displayCart() {
  let totalPrice = 0;
  cartList.map((cartItem) => {
    totalPrice += cartItem.price * cartItem.quantity;
    cartShowcase.innerHTML += `
       <div class="row">
        <div class="col-lg-3">
          <img
            src="${cartItem.image}"
            class="cart-image"
            alt=""
          />
        </div>
        <div class="col-lg-3 cart-item">${cartItem.name}</div>
        <div class="col-lg-3 cart-item">${cartItem.price}/-</div>
        <div class="col-lg-3 cart-item">${cartItem.quantity}</div>
      </div>
    `;
  });
  cartShowcase.innerHTML += `
    <div class="row total-detail">
      <div class="col-lg-8 showTotal">
        <h5>Total:</h5>
      </div>
      <div class="col-lg-4 showTotal">
        <h5>${totalPrice}/-</h5>
      </div>
    </div>
  `;
  console.log(totalPrice);
}
fetchCart();
