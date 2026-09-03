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