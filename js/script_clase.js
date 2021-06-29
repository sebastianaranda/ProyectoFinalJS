let carrito = [];

class Producto {
    constructor(nombre, precio, id, imagen, cantidad) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.id = Number(id);
        this.imagen = imagen;
        this.cantidad = Number(cantidad);
    }
}
/* Selectores */
const listaProductos = document.querySelector("#lista-productos");
const precioCarrito = document.querySelector(".nav__cart__precio");

/* Listeners */
listaProductos.addEventListener("click", agregarProducto);

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
        cardProducto.querySelector('a').getAttribute('data-id'),
        cardProducto.querySelector(".producto__imagenProducto").src,
        1);

    const existe = carrito.some(producto => producto.id === productoAgregado.id);

    if (existe) {
        const productos = carrito.map(producto => {
            if (producto.id === productoAgregado.id) {
                producto.cantidad++;
                producto.precio = `$${Number(productoAgregado.precio) * producto.cantidad}`;
            }
            return producto;
        });
        carrito = [...productos];
    } else {
        carrito = [...carrito, productoAgregado];
    }
}