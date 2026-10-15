/**
 * SCRIPT PRINCIPAL - SISTEMA ACADÉMICO (DOM)
 * Este archivo maneja la interactividad de la página utilizando el DOM.
 */

document.addEventListener("DOMContentLoaded", () => {
  
    /* ==========================================================================
     * 1. INTERACTIVIDAD EN EL INICIO DE SESIÓN (login.html)
     * ========================================================================== */
    const formularioLogin = document.querySelector(".formulario-login");

    if (formularioLogin) {
        formularioLogin.addEventListener("submit", (evento) => {
            evento.preventDefault();


            const usuarioInput = document.getElementById("userName").value.trim(); 
            const passwordInput = document.getElementById("userPassword").value.trim();

            if (usuarioInput === "" || passwordInput === "") {
                alert("Por favor, completa todos los campos para iniciar sesión.");
                return;
            }

            localStorage.setItem("usuarioLogueado", "true");
            localStorage.setItem("nombreUsuario", usuarioInput);

            alert(`¡Bienvenido de nuevo, ${usuarioInput}!`);
            window.location.href = "Bienvenido.html";
        });
    }


    // Cargar el nombre de usuario en la pantalla de Bienvenida portal academico

    const nombreGuardado = localStorage.getItem("nombreUsuario");
    const tituloBienvenida = document.querySelector(".nombreUsuario");

    if (nombreGuardado && tituloBienvenida) {
        tituloBienvenida.textContent = `Hola, ${nombreGuardado}`;
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


    /* ==========================================================================
     * 4. CONTROL DE SESIÓN Y CARGA DE RESULTADOS (Bienvenido.html)
     * ========================================================================== */
    const botonCerrarSesion = document.querySelector(".CerrarSe");

    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener("click", (e) => {
            e.preventDefault();
            
            localStorage.removeItem("usuarioLogueado");
            localStorage.removeItem("nombreUsuario");

            alert("Has cerrado sesión correctamente.");
            window.location.href = "login.html";
        });
    }

    // NUEVO: Rellenar automáticamente los resultados numéricos en las tarjetas de Bienvenido.html
    const tarjetasBienvenido = document.querySelectorAll(".Bienvenido ~ .cards .card .number");
    
    if (tarjetasBienvenido.length >= 3) {
        // Tarjeta 1: Materias matriculadas (Simulamos un valor fijo o dinámico de 4 materias)
        tarjetasBienvenido[0].textContent = "4"; 

        // Tarjeta 2: Promedio académico general (Calculado dinámicamente o establecido en 3.6)
        tarjetasBienvenido[1].textContent = "3.6"; 

        // Tarjeta 3: Porcentaje o total de asistencia (Ej. 95% o conteo general)
        tarjetasBienvenido[2].textContent = "95%"; 
    }
});


