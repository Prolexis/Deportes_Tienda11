// Main JavaScript file
console.log('Page loaded');                     
import { productos } from   './data.js';  
import { agregarAlCarrito } from './productos.js';      

<script defer src="js/main.js"></script>


function cerrarSesion() {
    localStorage.removeItem("login");
    window.location.href = "pages/login.html";
}
