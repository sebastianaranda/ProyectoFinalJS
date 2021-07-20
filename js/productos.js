import { renderizarProductosHTML } from "./script.js"
let carrito = [];
let precioTotal;

/* Selectores */
const listaProductos = document.querySelector("#lista-productos");
const botonCarrito = $(".nav__carrito");
//const estiloBotonCarrito = $(".nav__cart");
const subMenuCarrito = $(".nav__submenu");
const filtroCategorias = document.querySelector("#menuCategorias");

/* Listeners */
//listaProductos.addEventListener("click", agregarProducto);
filtroCategorias.addEventListener("change", filtrarCategorias);

/* ---------- JQuery para subMenu de Carrito----------*/
botonCarrito.hover(() => {
    if (carrito.length != 0) {
        subMenuCarrito.slideDown();
    }
}, () => {
    subMenuCarrito.slideUp();
});


/* ---------- JQuery para el Storage----------*/
$(document).ready(() => {
    /* if (JSON.parse(localStorage.getItem("carrito"))) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        insertarCarritoHTML();
    } */
    //Cargar todos productos
    renderizarProductosHTML(stockProductos);
});

function filtrarCategorias(e) {
    e.preventDefault();
    const categorias = filtroCategorias.options;
    //const categoriaSeleccionada = categorias[filtroCategorias.selectedIndex].text;
    const categoriaSeleccionada = categorias[filtroCategorias.selectedIndex].value;
    console.log(categoriaSeleccionada);
    //console.log(categoriaSeleccionada);
}