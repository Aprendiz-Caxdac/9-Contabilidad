// Contraseña de acceso
const PASSWORD = "Caxdac2026*";

// Oculta todo el contenido hasta validar
document.body.style.display = "none";

// Verifica si ya se ingresó la contraseña en esta sesión
if (sessionStorage.getItem("accesoPermitido") === "true") {
    document.body.style.display = "block"; // mostrar contenido
} else {
    const intento = prompt("Ingresa la contraseña para acceder al sitio:");
    if (intento === PASSWORD) {
        sessionStorage.setItem("accesoPermitido", "true");
        document.body.style.display = "block"; // mostrar contenido
    } else {
        document.body.innerHTML = "<h1>Acceso denegado</h1>";
    }
}