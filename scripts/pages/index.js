import { cart, addToCart, getCartNum } from "../../data/cart.js";
import { products } from "../../data/products.js";

let html = "";
products.forEach((product) => {
  html += `
            <div class="product">
              <a href="#">
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
                <div class="add-success hidden-element">
                <img class="check-icon" src="images/icons/check.png" />
                <p class="add-success-p">加入購物車</p>
              </div>
                <img data-product-id=${
                  product.id
                } class="add-to-cart" src="images/icons/cart.png" />
              
            </div>
    `;
});

document.querySelector(".products").innerHTML = html;

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let productId = button.dataset.productId;
    addToCart(productId);

    const cartNum = getCartNum();
    document.querySelector(".cart-num").innerHTML = cartNum;
    //console.log(cartNum);
    //console.log(cart);
  });
});
