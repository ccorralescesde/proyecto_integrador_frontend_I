// Declaro constantes y credenciales a validar.
const nombreConst = 'usuario'
const contrasenaConst = '1234'
let contador = 0
let intentosMax = 3
let accesoOk = false

//Inicio el ciclo while para controlar los intentos de acceso
while (contador < intentosMax && !accesoOk) {

    let nombre = prompt('Ingrese nombre de usuario: ')
    let contrasena = prompt('Ingrese contraseña: ')

    console.log('Usuario ingresado: ' + nombre)
    console.log('Contraseña ingresada: ' + contrasena)

     // Verifico si las credenciales ingresadas son correctas
     if (nombre === nombreConst && contrasena === contrasenaConst) {
        accesoOk = true
        alert('Bienvenid@ ' + nombre)
        console.log('Acceso concedido')
    } else {
        contador++
        console.log('Credenciales incorrectas')
        if (contador < intentosMax) {
            alert('Credenciales incorrectas, quedan ' + (intentosMax - contador) + ' intentos')
        } else {
            // Si se superan los 3 intentos, se bloquea el acceso
            alert('Acceso bloqueado, ha superado los 3 intentos permitidos')
            console.log('Cuenta bloqueada')

        }
    }
}