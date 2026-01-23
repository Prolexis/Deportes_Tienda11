const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contenedor = document.getElementById("carrito-container");

let total = 0;

function mostrarCarrito() {
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>Tu carrito está vacío 🛒</p>";
        return;
    }

    carrito.forEach((p) => {
        total += p.precio;
        contenedor.innerHTML += `
            <div class="item-carrito">
                <span>${p.nombre}</span>
                <span>S/. ${p.precio}</span>
            </div>
        `;
    });

    contenedor.innerHTML += `
        <div class="total">
            Total a pagar: S/. ${total}
        </div>
    `;
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    location.reload();
}

mostrarCarrito();
