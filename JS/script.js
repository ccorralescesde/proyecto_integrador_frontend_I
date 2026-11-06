/**
 * SCRIPT PRINCIPAL - SISTEMA ACADÉMICO (DOM)
 * Este archivo maneja la interactividad de la página utilizando el DOM.
 */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
     * 1. INTERACTIVIDAD EN EL INICIO DE SESIÓN (login.html)
     * ========================================================================== */

    const form = document.getElementById("formulario");

    if (form) {
        let contador = 0;
        const maximos = 3;
        let accesoOk = false;

        const nombreConst = "ocuadrado@cesde.net";
        const contrasenaConst = "12345";

        const usuarioIngresado = document.getElementById("userName");
        const contrasenaIngresada = document.getElementById("userPassword");
        const abtAcceso = document.getElementById("btnAcceso");
        const mensajeAlerta = document.getElementById("mensajeAlerta");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            if (accesoOk || contador >= maximos) {
                return;
            }

            const valorUsuario = usuarioIngresado.value.trim();
            const valorContrasena = contrasenaIngresada.value;

            if (valorUsuario === nombreConst && valorContrasena === contrasenaConst) {
                accesoOk = true;

                localStorage.setItem("usuarioAutenticado", "true");
                localStorage.setItem("nombreUsuario", valorUsuario);

                window.location.href = "Bienvenido.html";
            } else {
                contador++;
                const restantes = maximos - contador;

                if (contador < maximos) {
                    mensajeAlerta.textContent = `Credenciales incorrectas, intentos restantes ${restantes}`;
                    mensajeAlerta.style.color = "orange";
                } else {
                    mensajeAlerta.textContent =
                        "Cuenta bloqueada por superar el límite de intentos permitidos";
                    mensajeAlerta.style.color = "red";

                    abtAcceso.disabled = true;
                    usuarioIngresado.disabled = true;
                    contrasenaIngresada.disabled = true;
                }
            }
        });
    }

    // Cargar el nombre de usuario en la pantalla de Bienvenida portal academico

    const nombreGuardado = localStorage.getItem("nombreUsuario");
    const tituloBienvenida = document.querySelector(".nombreUsuario");

    if (nombreGuardado && tituloBienvenida) {
        tituloBienvenida.textContent = `Hola, ${nombreGuardado}`;
    }

    // Simulación de métricas del estudiante
    const datosEstudiante = {
        materiasMatriculadas: 6,
        promedioAcademico: "4.3",
        asistenciaGeneral: "92%",
    };

    const cardNumbers = document.querySelectorAll(".card .number");
    if (cardNumbers.length >= 3) {
        cardNumbers[0].textContent = datosEstudiante.materiasMatriculadas;
        cardNumbers[1].textContent = datosEstudiante.promedioAcademico;
        cardNumbers[2].textContent = datosEstudiante.asistenciaGeneral;
    }

    const btnCerrarSesion = document.querySelector(".CerrarSe");
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", (e) => {
            e.preventDefault();
            const confirmar = confirm("¿Estás seguro de que deseas cerrar sesión?");

            if (confirmar) {
                localStorage.clear();
                alert("Sesión cerrada correctamente.");
                window.location.href = "login.html";
            }
        });
    }



    /* ==========================================================================
     * 2. CÁLCULO DINÁMICO DE PROMEDIOS EN TIEMPO REAL (notas.html)
     * ========================================================================== */
    const filasNotas = document.querySelectorAll(".grades-table tbody tr");

    filasNotas.forEach((fila) => {
        const inputsNotas = fila.querySelectorAll(".grade-input");
        const celdaPromedio = fila.querySelector(".average-cell");

        if (inputsNotas.length > 0 && celdaPromedio) {
            inputsNotas.forEach((input) => {
                input.addEventListener("input", () => {
                    let suma = 0;
                    let cantidad = 0;

                    inputsNotas.forEach((inp) => {
                        let valor = parseFloat(inp.value);
                        if (!isNaN(valor)) {
                            suma += valor;
                            cantidad++;
                        }
                    });

                    if (cantidad > 0) {
                        let promedio = (suma / cantidad).toFixed(1);
                        celdaPromedio.textContent = promedio;

                        if (promedio >= 3.0) {
                            celdaPromedio.style.color = "#1e3a8a";
                        } else {
                            celdaPromedio.style.color = "#dc2626";
                        }
                    }
                });
            });
        }
    });

    const btnGuardarNotas = document.getElementById("btnGuardar");
    if (btnGuardarNotas) {
        btnGuardarNotas.addEventListener("click", (e) => {
            e.preventDefault();
            alert("¡Calificaciones y faltas guardadas correctamente en el sistema!");
        });
    }


    /* ==========================================================================
     * 3. VALIDACIÓN DEL FORMULARIO DE REGISTRO (registro.html)
     * ========================================================================== */
    const formularioRegistro = document.querySelector(".formulario-registro");

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

            const passwords = formularioRegistro.querySelectorAll('input[type="password"]');
            if (passwords.length >= 2) {
                if (passwords[0].value !== passwords[1].value) {
                    alert("Las contraseñas no coinciden. Por favor verifícalas.");
                    passwords[1].focus();
                    return;
                }
            }

            alert("¡Usuario registrado con éxito en la plataforma!");
            formularioRegistro.reset();
        });
    }


});


