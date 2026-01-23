const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contenedor = document.getElementById("carrito-container");

let total = 0;

if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío</p>";
} else {
    carrito.forEach(p => {
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
            Total: S/. ${total}
        </div>
    `;
}
