import { addToCart } from "../../data/cart.js";
import { renderCarNums } from "./renderCarNum.js";

export function renderProductGrid(products) {
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
              
            </div>
    `;
  });

  document.querySelector(".products").innerHTML = html;

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const productId = button.dataset.productId;
      addToCart(productId);
      renderCarNums();
    });
  });

  document.querySelector(".search-button").addEventListener("click", () => {
    const searchText = document.querySelector(".search-input").value;
    location.href = `/search.html?input=${searchText}`;
  });
}
