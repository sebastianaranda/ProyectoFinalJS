let carrito = [];
let precioTotal;
class Producto {
    constructor(nombre, precio, precioUnidad, id, imagen, cantidad) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.precioUnidad = Number(precioUnidad);
        this.id = Number(id);
        this.imagen = imagen;
        this.cantidad = Number(cantidad);
    }
}
/* Selectores */
const nav = document.querySelector(".nav");
const listaProductos = document.querySelector("#lista-productos");
const precioCarrito = document.querySelector(".nav__cart__precio");
const tablaCarrito = document.querySelector(".lista__carrito tbody");

/* Creo alertas */
const alerta = document.createElement("div");
alerta.classList.add("alert", "alert-dismissible", "fade", "show", "alerta");

function alertaProductoAgregado(texto) {
    alerta.textContent = texto;
    /* Modifico propiedades del elemento y lo agrego al html */
    alerta.classList.add("alert-success");
    alerta.classList.remove("alert-danger", "alert-primary", "alert-warning", "alerta-hidden");
    alerta.style.display = "block";
    nav.appendChild(alerta);
    /* Muestro alerta y la oculto automaticamente con animacion */
    $(".alert-success").animate({
        opacity: 1
    }, 350, function () {
        setTimeout(function () {
            $(".alert-success").animate({
                opacity: 0
            }, 350)
        }, 3000)
    });
}
function alertaProductoEliminado(texto) {
    alerta.textContent = texto;
    /* Modifico propiedades del elemento y lo agrego al html */
    alerta.classList.add("alert-danger");
    alerta.classList.remove("alert-success", "alert-primary", "alert-warning", "alerta-hidden");
    alerta.style.display = "block";
    nav.appendChild(alerta);
    /* Muestro alerta y la oculto automaticamente con animacion */
    $(".alert-danger").animate({
        opacity: 1
    }, 350, function () {
        setTimeout(function () {
            $(".alert-danger").animate({
                opacity: 0
            }, 350)
        }, 3000)
    });
}

/* Listeners */
listaProductos.addEventListener("click", agregarProducto);
tablaCarrito.addEventListener("click", borrarProducto);

/* ---------- JQuery para el Storage----------*/
$(document).ready(() => {
    if (JSON.parse(localStorage.getItem("carrito"))) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        insertarCarritoHTML();
    }
});

/* ---------- JQuery para subMenu de Carrito----------*/
$(".nav__carrito").hover(() => {
    $(".nav__submenu").slideDown();
}, () => {
    $(".nav__submenu").slideUp();
});

function borrarProducto(e) {
    e.preventDefault();
    if (e.target.parentElement.classList.contains("borrar-producto")) {
        const productoId = e.target.parentElement.getAttribute("data-id");
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == productoId) {
                if (carrito[i].cantidad > 1) {
                    carrito[i].cantidad = carrito[i].cantidad - 1;
                    carrito[i].precio = carrito[i].precio - carrito[i].precioUnidad;
                } else {
                    carrito.splice(i, 1);
                }
            }
        }
        alertaProductoEliminado("El producto fue eliminado correctamente.")
        insertarCarritoHTML();
    }
}

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains("producto__imagenProducto")) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        obtenerDatosProducto(productoSeleccionado);
        alertaProductoAgregado("Producto agregado correctamente.");
    }
}

function obtenerDatosProducto(cardProducto) {
    const productoAgregado = new Producto(
        cardProducto.querySelector(".producto__nombre").textContent,
        cardProducto.querySelector(".producto__precio").textContent.slice(1),
        cardProducto.querySelector(".producto__precio").textContent.slice(1),
        cardProducto.querySelector('a').getAttribute('data-id'),
        cardProducto.querySelector(".producto__imagenProducto").src,
        1);

    const existe = carrito.some(producto => producto.id === productoAgregado.id);
    if (existe) {
        const productos = carrito.map(producto => {
            if (producto.id === productoAgregado.id) {
                producto.cantidad = producto.cantidad + 1;
                producto.precio = productoAgregado.precio * producto.cantidad;
            }
            return producto;
        });
        carrito = [...productos];
    } else {
        carrito = [...carrito, productoAgregado];
    }
    insertarCarritoHTML();
}

function insertarCarritoHTML() {
    borrarCarritoHTML();
    precioTotal = 0;

    if (precioTotal == 0) {
        precioCarrito.textContent = `$${precioTotal}`;
    }

    carrito.forEach(producto => {
        const { nombre, precio, precioUnidad, id, imagen, cantidad } = producto;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="lista__carrito__imagen">
                <img src="${imagen}">
            </td>
            <td class="lista__carrito__producto">
                <p>${nombre}</p>
            </td>
            <td class="lista__carrito__cantidad">
                <p>x${cantidad}</p>
            </td>
            <td class="lista__carrito__precio">
                <p>$${precio}</p>
            </td>
            <td class="lista__carrito__delete">
                <a href="#" class="borrar-producto" data-id="${id}"><i class="fas fa-times"></i></a>
            </td>`;
        tablaCarrito.appendChild(row);
        precioTotal = precioTotal + precio;
        precioCarrito.textContent = `$${precioTotal}`;
    });
    console.table(carrito);
    guardarCarritoStorage();
}

function borrarCarritoHTML() {
    while (tablaCarrito.firstChild) {
        tablaCarrito.removeChild(tablaCarrito.firstChild);
    }
}

function guardarCarritoStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}