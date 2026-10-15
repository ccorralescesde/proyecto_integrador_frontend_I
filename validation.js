let contador = 0;
let maximos = 3;
let acceso = false;

const nameUser = "ocuadrado@cesde.net";
const contrasenaUser = "12345";

const form = document.getElementById("formulario")
const usuario = document.getElementById("userName");
const contrasena = document.getElementById("userPassword");
const acceder = document.getElementById("btnAcceso");

form.addEventListener('submit', function(event){
    event.preventDefault()

    const mensajeAlerta = document.getElementById("mensajeAlerta");

    if (nameUser === usuario.value && contrasenaUser === contrasena.value){
        acceso = true,
          mensajeAlerta.innerHTML = "Acceso concedido " + nameUser;
    } else {
        if(acceso || contador >= maximos){
        return;
        }
        else{
        contador++;
         mensajeAlerta.innerHTML = ("Contraseña incorrecta, intente nuevamente")}
        if (contador < maximos){
            mensajeAlerta.innerHTML = ("datos incorrectos, quedan " + (maximos - contador) + " intentos" )
        }else{
            mensajeAlerta.innerHTML= ("Acceso bloqueado, ha superado los 3 intentos permitidos")
        }
    }

})


