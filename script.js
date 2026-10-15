

    /*CÁLCULO DINÁMICO DE PROMEDIOS EN TIEMPO REAL 
      */
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


    