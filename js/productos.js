import { renderizarProductosEnHTML } from "./main.js";
let menuOpen = false;
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
    let productosFiltrados;
    let menuFooter = localStorage.getItem("seleccion");
    if (menuFooter != "") {
        switch (menuFooter) {
            case "prokit":
                filtroCategorias.value = "prokit";
                productosFiltrados = stockProductos.filter(stockProductos => stockProductos.categoria == "prokit");
                break;
            case "lifestyle":
                filtroCategorias.value = "lifestyle";
                productosFiltrados = stockProductos.filter(stockProductos => stockProductos.categoria == "lifestyle");
                break;
            case "accesorios":
                filtroCategorias.value = "accesorios";
                productosFiltrados = stockProductos.filter(stockProductos => stockProductos.categoria == "accesorios");
                break;
            default: break;
        }
        //Cargo solo los productos filtrados por la opcion elegida del menu
        renderizarProductosEnHTML(productosFiltrados);
        localStorage.setItem("seleccion", "");
    } else {
        //Cargar todos productos
        renderizarProductosEnHTML(stockProductos);
    }

});

function filtrarCategorias(e) {
    e.preventDefault();
    const categorias = filtroCategorias.options;
    const categoriaSeleccionada = categorias[filtroCategorias.selectedIndex].value;
    if (categoriaSeleccionada == "todos") {
        //Cargar todos productos
        renderizarProductosEnHTML(stockProductos);
    } else {
        //Muestro solo los productos filtrados
        const productosFiltrados = stockProductos.filter(stockProductos => stockProductos.categoria == categoriaSeleccionada);
        renderizarProductosEnHTML(productosFiltrados);
    }
}