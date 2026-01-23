function agregarAlCarrito(nombre) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const producto = productos.find(p => p.nombre === nombre);
    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}
export { agregarAlCarrito };