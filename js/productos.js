const contenedor = document.getElementById("lista-productos");
const filtro = document.getElementById("filtroCategoria");

function mostrarProductos(lista) {
    contenedor.innerHTML = "";
    lista.forEach(p => {
        contenedor.innerHTML += `
            <div class="producto" data-categoria="${p.categoria}">
                <h3>${p.nombre}</h3>
                <img src="${p.img}">
                <p>S/. ${p.precio}</p>
                <button onclick="agregarAlCarrito('${p.nombre}')">Agregar</button>
            </div>
        `;
    });
}

mostrarProductos(productos);

filtro.addEventListener("change", () => {
    const cat = filtro.value;
    if (cat === "todos") {
        mostrarProductos(productos);
    } else {
        mostrarProductos(productos.filter(p => p.categoria === cat));
    }
});
