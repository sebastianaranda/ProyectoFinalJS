/* ---------- Declaro Variables ---------- */
let carrito = [];
let precioTotal;

/* ---------- Selectores ---------- */
const listaProductos = document.querySelector("#lista-productos");
const form = document.querySelector(".needs-validation");
const precioCompra = document.querySelector("#precio__total");
const listaProvincia = document.querySelector("#selectProvincia");
const listaCiudades = document.querySelector("#selectCiudad");

/* ---------- Listeners ---------- */
form.addEventListener("submit", validarForm);
listaProvincia.addEventListener("change", validarCiudad);

/* ---------- JQuery para el Storage ---------- */
$(document).ready(() => {
    if (JSON.parse(localStorage.getItem("carrito"))) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        insertarCarritoCheckout();
    }
    pedirProvincias();
    listaProvincia.innerHTML = `<option selected disabled value="">Seleccionar provincia...</option>`;
    listaCiudades.setAttribute("disabled", "");
    listaCiudades.innerHTML = `<option selected disabled value="">Seleccionar ciudad...</option>`;
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
            <article class="checkout__producto">
                <img class="checkout__producto__imagen" src="${imagen}" alt="">
                <div class="checkout__producto__detalle">
                    <p class="checkout__producto__nombre">${nombre}</p>
                    <div class="checkout__producto__unidades">
                        <p class="checkout__producto__cantidad">Cantidad: ${cantidad}</p>
                        <p class="checkout__producto__precio">$${precio}</p>
                    </div>
                </div>
            </article>
        `;
        listaProductos.appendChild(divCard);
    });
    precioCompra.textContent = `Total: $${precioTotal}`;
}

function validarForm(e) {
    e.preventDefault();
    if (!form.checkValidity()) {
        e.stopPropagation();
    } else {
        //Creo la sweetAlert
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        //Muestro la alerta de confirmacion de compra
        swalWithBootstrapButtons.fire({
            title: '¡Gracias por tu compra!',
            text: "En unos minutos recibirás un email con los detalles de tu pedido.",
            icon: 'success',
            confirmButtonText: 'LISTO',
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then((result) => {
            //Vacio el carrito de compra y redirijo al usuario al index
            if (result.isConfirmed) {
                carrito = [];
                localStorage.setItem("carrito", JSON.stringify(carrito));
                window.location = "./index.html";
            };
        });
    }
    form.classList.add('was-validated');
}

function pedirProvincias() {
    $.ajax({
        url: "https://apis.datos.gob.ar/georef/api/provincias",
        method: "GET",
        dataType: "JSON",
        success: function (result, status, jqXHR) {
            //Llamo a la funcion para renderizar las provincias en el select
            renderizarProvincias(result.provincias);
        },
        error: function (jqXHR, status, error) {
            console.log(jqXHR);
            console.log(status);
            console.log(error);
        }
    });
}

function renderizarProvincias(provincias) {
    //Ordeno el array de forma alfabetica
    provincias.sort((a, b) => a.nombre.localeCompare(b.nombre));
    provincias.forEach(provincia => {
        let { id, nombre } = provincia;
        const optionProvincia = document.createElement("option");
        optionProvincia.setAttribute("data-id", id);
        optionProvincia.innerHTML = nombre;
        listaProvincia.appendChild(optionProvincia);
    });
}

function validarCiudad() {
    const provincias = listaProvincia.options;
    const provinciaSeleccionada = provincias[listaProvincia.selectedIndex].getAttribute("data-id");
    pedirCiudades(provinciaSeleccionada);
}

function pedirCiudades(id) {
    $.ajax({
        url: `https://apis.datos.gob.ar/georef/api/localidades?provincia=${id}&max=5000`,
        method: "GET",
        dataType: "JSON",
        success: function (result, status, jqXHR) {
            //Llamo la funcion para renderizar las ciudades en el select
            renderizarCiudades(result.localidades);
        },
        error: function (jqXHR, status, error) {
            console.log(jqXHR);
            console.log(status);
            console.log(error);
        }
    });
}

function renderizarCiudades(ciudades) {
    //listaCiudades.innerHTML = "";
    listaCiudades.innerHTML = `<option selected disabled value="">Seleccionar ciudad...</option>`;
    //Remuevo el attributo disabled para habilitar el select de ciudades
    listaCiudades.removeAttribute("disabled");
    //Ordeno el array de forma alfabetica
    ciudades.sort((a, b) => a.nombre.localeCompare(b.nombre));
    ciudades.forEach(ciudad => {
        let { id, nombre } = ciudad;
        const optionCiudad = document.createElement("option");
        optionCiudad.setAttribute("data-id", id);
        optionCiudad.innerHTML = nombre;
        listaCiudades.appendChild(optionCiudad);
    });
}