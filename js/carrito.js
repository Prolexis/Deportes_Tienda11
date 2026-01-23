let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado");
}

const contenedor = document.getElementById("carrito-container");

if (contenedor) {
    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>Carrito vacío</p>";
    } else {
        carrito.forEach(p => {
            contenedor.innerHTML += `<p>${p}</p>`;
        });
    }
}
