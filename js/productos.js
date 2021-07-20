import { renderizarProductosHTML } from "./script.js"
let carrito = [];
let precioTotal;

/* Selectores */
const listaProductos = document.querySelector("#lista-productos");

/* Listeners */
//listaProductos.addEventListener("click", agregarProducto);


/* ---------- JQuery para subMenu de Carrito----------*/
$(".nav__carrito").hover(() => {
    $(".nav__submenu").slideDown();
}, () => {
    $(".nav__submenu").slideUp();
});


/* ---------- JQuery para el Storage----------*/
$(document).ready(() => {
    /* if (JSON.parse(localStorage.getItem("carrito"))) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        insertarCarritoHTML();
    } */

    //Cargar productos
    renderizarProductosHTML(stockProductos);
});