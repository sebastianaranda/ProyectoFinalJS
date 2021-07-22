/* ---------- Declaro Variables ---------- */
let carrito = [];
let precioTotal;

/* ---------- Selectores ---------- */
const listaProductos = document.querySelector("#lista-productos");
const form = document.querySelector(".needs-validation");
const precioCompra = document.querySelector("#precio__total");

/* ---------- Listeners ---------- */
form.addEventListener("submit", validarForm);


/* ---------- JQuery para el Storage ---------- */
$(document).ready(() => {
    if (JSON.parse(localStorage.getItem("carrito"))) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        insertarCarritoCheckout();
    }
    //renderizarProductosHTML(productosDestacados);
});


function insertarCarritoCheckout() {
    precioTotal = 0;
    listaProductos.innerHTML = "";

    carrito.forEach(producto => {
        const { nombre, precio, precioUnidad, id, imagen, cantidad } = producto;
        precioTotal = precioTotal + precio;
        const divCard = document.createElement("div");
        divCard.classList.add("col");
        divCard.innerHTML = `
            <div class="checkout__producto">
                <img class="checkout__producto__imagen" src="${imagen}" alt="">
                <div class="checkout__producto__detalle">
                    <p class="checkout__producto__nombre">${nombre}</p>
                    <div class="checkout__producto__unidades">
                        <p class="checkout__producto__cantidad">Cantidad: ${cantidad}</p>
                        <p class="checkout__producto__precio">$${precio}</p>
                    </div>
                </div>
            </div>
        `;
        listaProductos.appendChild(divCard);
    });
    precioCompra.textContent = `Total: $${precioTotal}`;
    console.table(carrito);
}

function validarForm(e) {
    e.preventDefault();
    if (!form.checkValidity()) {
        e.stopPropagation();
    } else {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: '¡Gracias por tu compra!',
            text: "En unos minutos recibirás un email con los detalles de tu pedido.",
            icon: 'success',
            confirmButtonText: 'LISTO',
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                carrito = [];
                localStorage.setItem("carrito", JSON.stringify(carrito));
                window.location = "./index.html";
            };
        });
    }
    form.classList.add('was-validated');
}