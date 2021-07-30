import { renderizarProductosEnHTML } from "./script.js";

$(document).ready(() => {
    const productosDestacados = stockProductos.filter(stockProductos => stockProductos.destacado == true);
    renderizarProductosEnHTML(productosDestacados);
});