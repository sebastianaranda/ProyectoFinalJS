import { renderizarProductosHTML, insertarCarritoHTML } from "./main.js"
let carrito = [];
let precioTotal;

/* Selectores */
const botonCarrito = $(".nav__cart");
const subMenuCarrito = $(".nav__submenu");
const filtroCategorias = document.querySelector("#menuCategorias");

/* Listeners */
filtroCategorias.addEventListener("change", filtrarCategorias);

/* ---------- JQuery para subMenu de Carrito----------*/
botonCarrito.click((e) => {
    if (menuOpen) {
        subMenuCarrito.slideUp();
        menuOpen = false;
    } else {
        subMenuCarrito.slideDown();
        menuOpen = true;
    }
})

/* ---------- JQuery para el Storage----------*/
$(document).ready(() => {
    //Cargar todos productos
    renderizarProductosHTML(stockProductos);
});

function filtrarCategorias(e) {
    e.preventDefault();
    const categorias = filtroCategorias.options;
    const categoriaSeleccionada = categorias[filtroCategorias.selectedIndex].value;
    if (categoriaSeleccionada == "todos") {
        //Cargar todos productos
        renderizarProductosHTML(stockProductos);
    } else {
        //Muestro solo los productos filtrados
        const productosFiltrados = stockProductos.filter(stockProductos => stockProductos.categoria == categoriaSeleccionada);
        renderizarProductosHTML(productosFiltrados);
        console.log(categoriaSeleccionada);
    }
}