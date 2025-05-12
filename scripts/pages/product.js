import { getProduct } from "../../data/products.js";
import { renderCarNums } from "../components/renderCarNum.js";
import { addToCart } from "../../data/cart.js";

renderCarNums();

const productId = location.hash.substring(1);
const product = getProduct(productId);
console.log(product);

const html = `

          <div class="product-block">
            <img
              class="product-image"
              src="${product.img}"
            />
            <div class="product-information">
              <h1 class="product-name">${product.name}</h1>

              <div class="product-price">
              ${
                product.originPrice
                  ? '<p class="origin-price">$' + product.originPrice + "</p>"
                  : ""
              }
                <p class="discount-price">$${product.discountPrice}</p>
              </div>

              <div class="buy-num-row">
                <p class="num-p">數量</p>
                <select class="buy-num">
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <button class="add-to-cart">加入購物車</button>
              <div class="add-success hidden-element">
                <img class="check-icon" src="images/icons/check.png" />
                <p class="add-success-p">加入購物車</p>
              </div>
            </div>
          </div>
          <div class="description-block">
            <p class="description-p">商品描述</p>
            <p class="product-description">${product.description}
            </p>
          </div>
  
`;

function showAddSuccess() {
  const successElement = document.querySelector(".add-success");
  if (successElement.classList.contains("hidden-element")) {
    successElement.classList.remove("hidden-element");
    successElement.classList.add("visible-element");

    setTimeout(() => {
      successElement.classList.remove("visible-element");
      successElement.classList.add("hidden-element");
    }, 1000);
  }
}

document.querySelector(".js-product-info").innerHTML = html;

document.querySelector(".add-to-cart").addEventListener("click", () => {
  const buyNum = Number(document.querySelector(".buy-num").value);

  addToCart(productId, buyNum);
  renderCarNums();
  showAddSuccess();
});
