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
