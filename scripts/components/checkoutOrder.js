import { cart, deleteFromCart, updateCart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";

export function renderCheckoutOrder() {
  function generateDeliveryOptions(productId, deliveryId) {
    let html = "";
    deliveryOptions.forEach((option) => {
      html += `
       <div class="delivery-option">
                  <input
                    ${option.id === deliveryId ? "checked" : ""}
                    type="radio" 
                    class="delivery-option-input" 
                    name="delivery-option-${productId}"
                    data-product-id=${productId}
                    data-delivery-id=${option.id}
                      >
                  <p class="delivery-option-name">${option.name} </p>
                  <p class="delivery-option-price">$${option.price}</p>
                </div>
       `;
    });
    return html;
  }

  let html = "";
  cart.forEach((item) => {
    const productId = item.id;
    let cartItem;

    products.forEach((product) => {
      if (product.id === productId) {
        cartItem = product;
      }
    });
    html += `
          <div class="product-row js-product-row-${cartItem.id}">
            <img class="product-image" src="${cartItem.img}" />
            <div class="product-information">
                <p class="product-name">${cartItem.name}</p>
                <div class="product-detail">
                    <div class="product-detail-left">
                        <div class="product-price">
                            ${
                              cartItem.originPrice
                                ? '<p class="origin-price">$' +
                                  cartItem.originPrice +
                                  "</p>"
                                : ""
                            }
                            <p class="discount-price">$${
                              cartItem.discountPrice
                            }</p>
                        </div>
                        <div class="buy-num-row">
                            <p class="num-p">數量</p>
                            <input class="buy-num" value="${item.num}"
                            data-product-id=${cartItem.id}
                            >
                        </div>
                    </div>
                    <div class="product-detail-right">
                        <button data-product-id=${
                          cartItem.id
                        } class="delete-from-cart">刪除</button>
                    </div>
                </div>
                <hr class="product-information-hr">
                <div class="delivery-options">
                    <p class="delivery-option-p">運送方式</p>
                    ${generateDeliveryOptions(cartItem.id, item.deliveryId)}
                </div>             
            </div>
        </div>
    `;
  });

  document.querySelector(".checkout-left").innerHTML = html;

  document.querySelectorAll(".delete-from-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      deleteFromCart(productId);
      document.querySelector(`.js-product-row-${productId}`).remove();
    });
  });

  document.querySelectorAll(".delivery-option-input").forEach((input) => {
    input.addEventListener("click", () => {
      const productId = input.dataset.productId;
      const deliveryId = input.dataset.deliveryId;
      updateCart(productId, deliveryId, false);
    });
  });

  document.querySelectorAll(".buy-num").forEach((input) => {
    input.addEventListener("change", () => {
      const productId = input.dataset.productId;
      const buyNum = Number(input.value);
      updateCart(productId, false, buyNum);
    });
  });
}
