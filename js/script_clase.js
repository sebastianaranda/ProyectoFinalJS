let carrito = [];

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
const listaProductos = document.querySelector("#lista-productos");
const precioCarrito = document.querySelector(".nav__cart__precio");
const tableCarrito = document.querySelector(".lista__carrito tbody");

/* Listeners */
listaProductos.addEventListener("click", agregarProducto);
tableCarrito.addEventListener("click", borrarProducto);
document.addEventListener("DOMContentLoaded", () => {
    if (JSON.parse(localStorage.getItem("carrito"))) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        insertarCarritoHTML();
    }
});

function borrarProducto(e) {
    e.preventDefault();
    if (e.target.parentElement.classList.contains("borrar-producto")) {
        console.log(e.target);
        console.table(carrito);
        const productoId = e.target.parentElement.getAttribute("data-id");
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == productoId) {
                console.log("el producto esta en el carrito");
                if (carrito[i].cantidad > 1) {
                    carrito[i].cantidad = carrito[i].cantidad - 1;
                    carrito[i].precio = carrito[i].precio - carrito[i].precioUnidad;
                } else {
                    carrito.splice(i, 1);
                }
            }
        }
        console.table(carrito);
        insertarCarritoHTML();
    }
}

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains("producto__imagenProducto")) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        obtenerDatosProducto(productoSeleccionado);
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
                producto.cantidad++;
                producto.precio = `${Number(productoAgregado.precio) * Number(producto.cantidad)}`;
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
        tableCarrito.appendChild(row);
    });
    guardarCarritoStorage();
}

function borrarCarritoHTML() {
    while (tableCarrito.firstChild) {
        tableCarrito.removeChild(tableCarrito.firstChild);
    }
}

function guardarCarritoStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}