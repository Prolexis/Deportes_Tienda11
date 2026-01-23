// Obtener carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contenedor = document.getElementById("carrito-container");
const totalPrecioSpan = document.getElementById("total-precio");

// Función para mostrar carrito
function mostrarCarrito() {
    contenedor.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>Tu carrito está vacío 🛒</p>";
        totalPrecioSpan.textContent = "S/. 0.00";
        return;
    }

    carrito.forEach((p, index) => {
        total += p.precio;
        const div = document.createElement("div");
        div.className = "carrito-item";
        div.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <div class="carrito-item-info">
                <h3>${p.nombre}</h3>
                <p>S/. ${p.precio.toFixed(2)}</p>
                <button onclick="eliminarProducto(${index})">Eliminar</button>
            </div>
        `;
        contenedor.appendChild(div);
    });

    totalPrecioSpan.textContent = `S/. ${total.toFixed(2)}`;
}

// Función para eliminar producto
function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Vaciar carrito completo
document.getElementById("vaciar-carrito").addEventListener("click", () => {
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
});

// Inicializar
mostrarCarrito();
