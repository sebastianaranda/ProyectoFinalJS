import { renderizarProductosHTML } from "./script.js";
let carrito = [];
let precioTotal;

$(document).ready(() => {
    const productosDestacados = stockProductos.filter(stockProductos => stockProductos.destacado == true);
    renderizarProductosHTML(productosDestacados);
});