import { renderizarProductosEnHTML } from "./main.js";

$(document).ready(() => {
    localStorage.setItem("seleccion", "");
    const productosDestacados = stockProductos.filter(stockProductos => stockProductos.destacado == true);
    renderizarProductosEnHTML(productosDestacados);
});