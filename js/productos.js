import { productos } from './data.js';

const contenedor = document.getElementById("lista-productos");
const filtro = document.getElementById("filtroCategoria");

function mostrarProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <img src="${producto.imagen}">
            <h3>${producto.nombre}</h3>
            <p>S/. ${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">
                Agregar
            </button>
        `;

        contenedor.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const producto = productos.find(p => p.id === id);

    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado");
}

// FILTRO
filtro.addEventListener("change", () => {
    const categoria = filtro.value;

    if (categoria === "todos") {
        mostrarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === categoria);
        mostrarProductos(filtrados);
    }
});

// INICIO
mostrarProductos(productos);

// hacer accesible la función al HTML
window.agregarAlCarrito = agregarAlCarrito;
