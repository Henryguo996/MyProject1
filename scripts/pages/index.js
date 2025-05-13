// import { cart, addToCart, getCartNum } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { renderCarNums } from "../components/renderCarNum.js";
import { renderProductGrid } from "../components/productGrid.js";

renderCarNums();
renderProductGrid(products);
