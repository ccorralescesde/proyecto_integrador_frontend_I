document.addEventListener("DOMContentLoaded", () => {
    // esto es una simualciaon de datos que son fijos por el momento
    const datosEstudiante = {
        materiasMatriculadas: 6,
        promedioAcademico: "4.3",
        asistenciaGeneral: "92%"
    };

// targeta parte de los numeros 
    const cardNumbers = document.querySelectorAll(".card .number");
    
    if (cardNumbers.length >= 3) {
        cardNumbers[0].textContent = datosEstudiante.materiasMatriculadas;
        cardNumbers[1].textContent = datosEstudiante.promedioAcademico;
        cardNumbers[2].textContent = datosEstudiante.asistenciaGeneral;
    }

    // Cerrar sesión
    const btnCerrarSesion = document.querySelector(".CerrarSe");

    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", (e) => {
            e.preventDefault();
            const confirmar = confirm("¿Estás seguro de que deseas cerrar sesión?");
            
            if (confirmar) {
                // se limpian datos en caso d eque se usaron 
                localStorage.clear();
                alert("Sesión cerrada correctamente.");
                
                //  esto puede redicinar a una ventana de login
             
            }
        });
    }
});