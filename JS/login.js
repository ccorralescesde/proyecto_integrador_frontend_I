//Codigo realizado en la primera entrega del proyecto integrador
// Código de inicio de sesión

let contador = 0;
let intentosMax = 3;
// Función para iniciar la aplicación y cargar usuarios desde un archivo 
// JSON si no existen en localStorage
async function iniciarApp() {
    if (!localStorage.getItem("listausuarios")) {
      try {
        const response = await fetch("usuarios.json");
        const usuariosIniciales = await response.json();
        localStorage.setItem("listausuarios", JSON.stringify(usuariosIniciales));
        console.log("Status del fetch:", response.status);
        console.log("Usuarios cargados:", usuariosIniciales);
      localStorage.setItem("listausuarios", JSON.stringify(usuariosIniciales));
    } catch (error) {
    console.error("Error en iniciarApp:", error);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  iniciarApp();

  const estaAutenticado = localStorage.getItem("usuarioAutenticado");
  if (estaAutenticado === "true") {
    window.location.href = "Bienvenido.html";
    return;
  }
});
const formulario = document.querySelector("#formulario");
const inputUsuario = document.querySelector("#userName");
const inputPassword = document.querySelector("#userPassword");
const mensajeAlerta = document.querySelector("#mensajeAlerta");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const correoIngresado = inputUsuario.value.trim();
  const passwordIngresado = inputPassword.value.trim();

  // 1. Validar campos vacíos
  if (correoIngresado === "" || passwordIngresado === "") {
    alert("Por favor completa todos los campos");
    return;
  }

  // 2. Validar formato de correo
  if (!correoIngresado.includes("@")) {
    alert("Por favor, ingresa un correo electrónico válido que contenga '@'.");
    inputUsuario.focus();
    return;
  }

  // leer la lista mas reciente de usuarios desde localStorage
  const listausuarios = JSON.parse(localStorage.getItem("listausuarios") || "[]");


  setTimeout(() => {

    // 4. Comparamos el correo y la contraseña correctos
  const usuariosEncontrado = listausuarios.find( user => user.email === correoIngresado && user.password === passwordIngresado);
    if ( usuariosEncontrado ) {
      // Guardar indicadores de sesión activa (usamos el nombre guardado del objeto para saludar después)
      localStorage.setItem("usuarioAutenticado", "true");
      localStorage.setItem("nombreUsuario", usuariosEncontrado.nombre);

      mensajeAlerta.textContent = "Acceso concedido.";
      window.location.href = "Bienvenido.html";
    } else {
      contador++;

      if (contador < intentosMax) {
        alert(
          "Credenciales incorrectas, quedan " +
            (intentosMax - contador) +
            " intentos",
        );
      } else {
        alert("Acceso bloqueado, ha superado los 3 intentos permitidos");
        // Opcional: deshabilitar el botón si llega al límite
        document.getElementById("btnAcceso").disabled = true;
      }
    }
  }, 1500);
});
