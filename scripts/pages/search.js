import { searchProduct } from "../../data/products.js";
import { renderProductGrid } from "../components/productGrid.js";
import { renderCarNums } from "../components/renderCarNum.js";

renderCarNums();

const params = new URLSearchParams(location.search);
const products = searchProduct(params.get("input"));
renderProductGrid(products);
