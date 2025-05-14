import { getCartNum } from "../../data/cart.js";
import { checkLogin } from "./checkMember.js";

export function renderCarNums() {
  if (checkLogin === null) {
    const renderCarNum = `
          <nav class="checkmen">
        <ul>
          <li>
            <a href="index.html"><i class="fa-solid fa-house"></i> 回首頁</a>
          </li>
          <li>
            <a href="login.html"
              ><i class="fa-regular fa-user"></i>
              <span>會員登入</span></a
            >
          </li>
          <li>
            <a href="login.html"
              ><i class="fa-solid fa-receipt"></i> 訂單查詢</a
            >
          </li>
          <li>
            <a href="login.html"
              ><i class="fa-solid fa-cart-shopping"></i> 購物車(<span
                >0</span
              >)</a
            >
          </li>
        </ul>
      </nav>`;
    document.querySelector(".checkmen").innerHTML = renderCarNum;
  } else {
    const renderCarNum = `
          <nav class="checkmen">
        <ul>
          <li>
            <a href="index.html"><i class="fa-solid fa-house"></i> 回首頁</a>
          </li>
          <li>
            <a href="member.html"
              ><i class="fa-regular fa-user"></i>
              <span>會員</span></a
            >
          </li>
          <li>
            <a href="queryorder.html"
              ><i class="fa-solid fa-receipt"></i> 訂單查詢</a
            >
          </li>
          <li>
            <a href="checkout.html"
              ><i class="fa-solid fa-cart-shopping"></i> 購物車(<span
                >${getCartNum()}</span
              >)</a
            >
          </li>
        </ul>
      </nav>`;
    document.querySelector(".checkmen").innerHTML = renderCarNum;
  }
}
