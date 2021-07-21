/* ---------- Declaro Variables ---------- */
let carrito = [];
let precioTotal;

/* ---------- Selectores ---------- */
const listaProductos = document.querySelector("#lista-productos");

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
        /* const row = document.createElement("tr");*/
        //tablaCarrito.appendChild(row);
        precioTotal = precioTotal + precio;
        //precioCarrito.textContent = `$${precioTotal}`;
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
    console.table(carrito);
}