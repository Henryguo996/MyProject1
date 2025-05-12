import { cart, addToCart, getCartNum } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { renderCarNums } from "../components/renderCarNum.js";

renderCarNums();

let html = "";
products.forEach((product) => {
  html += `
            <div class="product">
              <a href="product.html#${product.id}">
                <img
                  title="product_image1"
                  src="${product.img}"
                  alt="product_image1"
                />
                <p class="product-name">${product.name}</p>
                <p class="discount-price">$${product.discountPrice}</p>
                <p class="origin-price">${
                  product.originPrice ? "$" + product.originPrice : " "
                }</p>
                
              </a>
                <div class="add-success hidden-element js-add-success-${
                  product.id
                }">
                <img class="check-icon" src="images/icons/check.png" />
                <p class="add-success-p">加入購物車</p>
              </div>
                <img data-product-id=${
                  product.id
                } class="add-to-cart" src="images/icons/cart.png" />
              
            </div>
    `;
});

function showAddSuccess(productId) {
  const successElement = document.querySelector(`.js-add-success-${productId}`);
  if (successElement.classList.contains("hidden-element")) {
    successElement.classList.remove("hidden-element");
    successElement.classList.add("visible-element");

    setTimeout(() => {
      successElement.classList.remove("visible-element");
      successElement.classList.add("hidden-element");
    }, 1000);
  }
}

document.querySelector(".products").innerHTML = html;

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const productId = button.dataset.productId;
    addToCart(productId);
    renderCarNums();
    showAddSuccess(productId);
    //const cartNum = getCartNum();
    //document.querySelector(".cart-num").innerHTML = cartNum;
  });
});
