import { getCartNum } from "../../data/cart.js";

export function renderCarNums() {
  const renderCarNum = `
   <span class="cart-num">${getCartNum()}</span>

`;

  document.querySelector(".cart-num").innerHTML = renderCarNum;
}
