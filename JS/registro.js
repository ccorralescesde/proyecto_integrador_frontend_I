document.addEventListener("DOMContentLoaded", () => {
  const formularioRegistro = document.getElementById("formulario-registro");

  // Función para iniciar la aplicación y cargar usuarios desde 
  // un archivo JSON si no existen en localStorage
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
 iniciarApp();

  if (formularioRegistro) {
    formularioRegistro.addEventListener("submit", (e) => {
      e.preventDefault();

      const tipoUsuario = document.getElementById("tipo-usuario").value;
      const inputsRegistro = formularioRegistro.querySelectorAll("input");

      let camposCompletos = true;
      inputsRegistro.forEach((input) => {
        if (input.value.trim() === "") {
          camposCompletos = false;
        }
      });

      if (tipoUsuario === "") {
        alert("Por favor, selecciona un tipo de usuario.");
        return;
      }

      if (!camposCompletos) {
        alert("Por favor, llena todos los campos del formulario de registro.");
        return;
      }

      const passwords = formularioRegistro.querySelectorAll(
        'input[type="password"]',
      );
      if (passwords.length >= 2) {
        if (passwords[0].value !== passwords[1].value) {
          alert("Las contraseñas no coinciden. Por favor verifícalas.");
          passwords[1].focus(); 
          return;
        }
      }

// Capturar los datos del formulario de registro y guardarlos en localStorage
const nombre = formularioRegistro.querySelector("input[type='text']");
const email = formularioRegistro.querySelector("input[type='email']");
const password = passwords[0].value.trim();

//Obtenemos la lista de usuarios desde localStorage, si no existe, inicializamos un array vacío
  const listausuarios = JSON.parse(localStorage.getItem("listausuarios") || "[]");

  //verificamos si el correo ya está registrado
const usuarioExistente = listausuarios.find(user => user.email === email.value.trim());
if (usuarioExistente) {
  alert("El correo electrónico ya está registrado. Por favor, utiliza otro.");
  return;
}

// Creamos un nuevo objeto de usuario con los datos del formulario
  const nuevoUsuario = {
    nombre : nombre.value.trim(),
    email : email.value.trim(),
    password : password,
    tipo : tipoUsuario
  };

  // Agregamos el nuevo usuario a la lista y la guardamos en localStorage
  listausuarios.push(nuevoUsuario);
  localStorage.setItem("listausuarios", JSON.stringify(listausuarios));

  alert("¡Usuario registrado con éxito!");
  formularioRegistro.reset();

  window.location.href = "login.html";
    });
  }
});


