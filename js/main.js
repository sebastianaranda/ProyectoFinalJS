/* ---------- Declaro Variables ---------- */
let carrito = [];
let precioTotal;
let menuOpen = false;
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
/* ---------- Selectores ---------- */
const listaProductos = document.querySelector("#lista-productos");
const tablaCarrito = document.querySelector(".lista__carrito tbody");
const precioCarrito = document.querySelector(".nav__cart__precio");
const botonCarrito = $(".nav__cart");
const subMenuCarrito = $(".nav__submenu");
const navMobile = document.querySelector(".nav__icoMobile");
const iconoMobile = document.getElementById("iconoMenu");
const menuMobile = document.querySelector(".nav__menuMobile");
const menuFooter = document.querySelector(".footer__menu ul");
const cantCarrito = document.querySelector(".nav__carrito__cant");
const botonEliminarCarrito = document.querySelector(".eliminar__carrito");

/* ---------- Listeners ---------- */
listaProductos.addEventListener("click", agregarProducto);
tablaCarrito.addEventListener("click", borrarProducto);
navMobile.addEventListener("click", accionarMenuMobile);
menuFooter.addEventListener("click", checkMenuFooter);
botonEliminarCarrito.addEventListener("click", vaciarCarrito);
botonCarrito.click(accionarSubMenuCarrito);

/* ---------- Creo alerta ---------- */
const alertaProducto = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

/* ---------- JQuery para el Storage ---------- */
$(document).ready(() => {
    if (JSON.parse(localStorage.getItem("carrito"))) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        insertarCarritoEnHTML();
    }
    checkBotonCarrito();
});

/* ---------- JQuery para subMenu de Carrito ---------- */
function accionarSubMenuCarrito() {
    if (carrito.length != 0) {
        if (menuOpen) {
            subMenuCarrito.slideUp();
            menuOpen = false;
        } else {
            subMenuCarrito.slideDown();
            menuOpen = true;
        }
    }
}

function accionarMenuMobile(e) {
    e.preventDefault();
    if (menuMobile.style.display != "block") {
        menuMobile.style.display = "block";
        iconoMobile.src = "./resources/icons/menu_open.svg";
    } else {
        menuMobile.style.display = "none";
        iconoMobile.src = "./resources/icons/menu.svg";
    }
}

/* ---------- Funci??n que habilita o deshabilita el carrito ---------- */
function checkBotonCarrito() {
    if (carrito.length == 0) {
        botonCarrito.addClass("disabled");
        cantCarrito.style.display = "none";
        subMenuCarrito.slideUp();
        menuOpen = false;
    } else {
        botonCarrito.removeClass("disabled");
        cantCarrito.style.display = "flex";
    }
}

export function renderizarProductosEnHTML(productos) {
    listaProductos.innerHTML = "";
    productos.forEach(producto => {
        const { imagen, nombre, precio, id } = producto;
        const divCard = document.createElement("div");
        divCard.classList.add("col");
        divCard.innerHTML = `
            <article class="producto">
                <img class="producto__imagenProducto" src="${imagen}" loading="lazy" alt="">
                <div class="producto__detalle">
                    <p class="producto__nombre">${nombre}</p>
                    <p class="producto__precio">${precio}</p>
                </div>
                <div>
                    <button class="producto__btn__agregarCarrito" data-id="${id}">
                        <i class="fas fa-shopping-cart"></i>
                        Agregar producto
                    </button>
                </div>
            </article>
        `;
        listaProductos.appendChild(divCard);
    });
}

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
        alertaProducto.fire({
            icon: 'warning',
            title: 'El producto fue eliminado correctamente.'
        });
        insertarCarritoEnHTML();
    }
}

function vaciarCarrito(e) {
    e.preventDefault();
    carrito = [];
    insertarCarritoEnHTML();
    alertaProducto.fire({
        icon: 'warning',
        title: 'El carrito fue vaciado correctamente.'
    });
}

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains("producto__btn__agregarCarrito")) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        obtenerDatosProducto(productoSeleccionado);
        alertaProducto.fire({
            icon: 'success',
            title: 'Producto agregado correctamente.'
        });
    }
}

function obtenerDatosProducto(cardProducto) {
    const productoAgregado = new Producto(
        cardProducto.querySelector(".producto__nombre").textContent,
        cardProducto.querySelector(".producto__precio").textContent.slice(1),
        cardProducto.querySelector(".producto__precio").textContent.slice(1),
        cardProducto.querySelector(".producto__btn__agregarCarrito").getAttribute('data-id'),
        cardProducto.querySelector(".producto__imagenProducto").src,
        1);
    const existe = carrito.some(producto => producto.id === productoAgregado.id);
    if (existe) {
        const productos = carrito.map(producto => {
            if (producto.id === productoAgregado.id) {
                producto.cantidad = producto.cantidad + 1;
                producto.precio = productoAgregado.precioUnidad * producto.cantidad;
            }
            return producto;
        });
        carrito = [...productos];
    } else {
        carrito = [...carrito, productoAgregado];
    }
    insertarCarritoEnHTML();
}

export function insertarCarritoEnHTML() {
    borrarCarritoHTML();
    precioTotal = 0;
    let cantTotal = 0;
    if (precioTotal == 0) {
        precioCarrito.textContent = `$${precioTotal}`;
    }
    carrito.forEach(producto => {
        const { nombre, precio, precioUnidad, id, imagen, cantidad } = producto;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="lista__carrito__imagen">
                <img src="${imagen}" loading="lazy" alt="">
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
        cantTotal = cantTotal + cantidad;
    });
    cantCarrito.textContent = cantTotal;
    guardarCarritoStorage();
    checkBotonCarrito();
}

function borrarCarritoHTML() {
    while (tablaCarrito.firstChild) {
        tablaCarrito.removeChild(tablaCarrito.firstChild);
    }
}

function guardarCarritoStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function checkMenuFooter(e) {
    e.preventDefault();
    switch (e.target.textContent) {
        case "ProKit":
            localStorage.setItem("seleccion", "prokit");
            window.location = "./productos.html";
            break;
        case "Lifestyle":
            localStorage.setItem("seleccion", "lifestyle");
            window.location = "./productos.html";
            break;
        case "Accesorios":
            localStorage.setItem("seleccion", "accesorios");
            window.location = "./productos.html";
            break;
        default: break;
    }
}