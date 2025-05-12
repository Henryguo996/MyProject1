export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [];
}

function updateStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let cartItem;
  cart.forEach((item) => {
    if (item.id === productId) {
      cartItem = item;
    }
  });
  if (cartItem) {
    cartItem.num += 1;
  } else {
    cart.push({
      id: productId,
      num: 1,
      deliveryId: "1",
    });
  }
  updateStorage();
}

export function getCartNum() {
  let cartNum = 0;
  cart.forEach((item) => {
    cartNum += item.num;
  });
  return cartNum;
}

export function deleteFromCart(productId) {
  const newCart = [];
  cart.forEach((item) => {
    if (item.id !== productId) {
      newCart.push(item);
    }
  });
  cart = newCart;
  updateStorage();
}

export function updateCart(productId, deliveryId, buyNum) {
  cart.forEach((item) => {
    if (item.id === productId) {
      if (deliveryId) {
        item.deliveryId = deliveryId;
      }

      if (buyNum) {
        item.num = buyNum;
      }
    }
  });
  updateStorage();
}
