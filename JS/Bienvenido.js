document.addEventListener("DOMContentLoaded", () => {
  // esto es una simualciaon de datos que son fijos por el momento
  const datosEstudiante = {
    materiasMatriculadas: 6,
    promedioAcademico: "4.3",
    asistenciaGeneral: "92%",
  };

  // targeta parte de los numeros
  const cardNumbers = document.querySelectorAll(".card .number");

  if (cardNumbers.length >= 3) {
    cardNumbers[0].textContent = datosEstudiante.materiasMatriculadas;
    cardNumbers[1].textContent = datosEstudiante.promedioAcademico;
    cardNumbers[2].textContent = datosEstudiante.asistenciaGeneral;
  }

  // Saludos bienvenido usuario
  const nombreGuardado = localStorage.getItem("nombreUsuario");
  const tituloBienvenida = document.querySelector(".Bienvenido h1");

  if (nombreGuardado && tituloBienvenida) {
    tituloBienvenida.textContent = `Hola, ${nombreGuardado}`;
  }
  // Cerrar sesión
  const btnCerrarSesion = document.querySelector(".CerrarSe");

  if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener("click", (e) => {
      e.preventDefault();
      const confirmar = confirm("¿Estás seguro de que deseas cerrar sesión?");
      if (confirmar) {
        // se limpian datos en caso d eque se usaron
        localStorage.removeItem("usuarioAutenticado");
        localStorage.removeItem("nombreUsuario");
        window.location.href = "login.html";
      }
    });
  }
});
