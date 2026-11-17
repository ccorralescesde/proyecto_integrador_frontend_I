//Codigo realizado en la primera entrega del proyecto integrador
// Código de inicio de sesión

const listausuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

let contador = 0;
let intentosMax = 3;

window.addEventListener("DOMContentLoaded", () => {
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
    inputNombre.focus();
    return;
  }

  /* 3. Verificar si existe un usuario registrado en localStorage
  const usuarioGuardadoJSON = localStorage.getItem("usuarioRegistrado");

  if (!usuarioGuardadoJSON) {
    alert("Usuario no registrado.");
    return;
  }

  const usuarioGuardado = JSON.parse(usuarioGuardadoJSON);*/

  setTimeout(() => {

    // 4. Comparamos el correo y la contraseña correctos
  const usuariosEncontrado = listausuarios.find( user => user.email === correoIngresado && user.password === passwordIngresado);
    if ( usuariosEncontrado ) {
      // Guardar indicadores de sesión activa (usamos el nombre guardado del objeto para saludar después)
      localStorage.setItem("usuarioAutenticado", "true");
      localStorage.setItem("nombreUsuario", usuariosEncontrado.nombre);

      mensajeAlerta.textContent = "Acceso concedido. Entrando...";
      window.location.href = "Bienvenido.html";
    } else {
      contador++;
      console.log("Credenciales incorrectas");

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
