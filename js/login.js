const form = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

// USUARIO DE PRUEBA
const usuario = {
    email: "admin@walon.com",
    password: "123456"
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === usuario.email && password === usuario.password) {
        localStorage.setItem("login", "true");

        mensaje.style.color = "green";
        mensaje.textContent = "Inicio de sesión correcto";

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1000);
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos";
    }
});
