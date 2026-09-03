<img width="792" height="453" alt="index" src="https://github.com/user-attachments/assets/fab37120-f567-4562-84f8-e132bd9ade28" />
<img width="794" height="458" alt="login" src="https://github.com/user-attachments/assets/1e929550-640d-4e40-ad58-ed8705661ff8" />
<img width="728" height="418" alt="notas" src="https://github.com/user-attachments/assets/d8130819-0b23-4700-a381-623c9bb1ef5f" />

# Sistema de Validación de Acceso en JavaScript

Un script interactivo en JavaScript que simula un sistema de autenticación de usuario y contraseña con límite de intentos y bloqueo de cuenta. Proyecto desarrollado como práctica académica para la materia de Frontend.

---

## 📌 Descripción

Este proyecto implementa la lógica básica de autenticación mediante el uso de un ciclo `while` y estructuras de control condicionales (`if...else`). Permite al usuario ingresar sus credenciales mediante ventanas emergentes (`prompt`) e informa sobre el estado de su acceso a través de alertas (`alert`) y mensajes en la consola del navegador (`console.log`).

### Características principales:
* **Credenciales fijas:** Validación contra usuario y contraseña predefinidos.
* **Control de intentos:** Máximo de 3 intentos para ingresar los datos correctos.
* **Retroalimentación en tiempo real:** Muestra cuántos intentos le quedan al usuario tras un error.
* **Bloqueo de cuenta:** Muestra una advertencia de bloqueo si se superan los 3 intentos.

---

## 🚀 Tecnologías Utilizadas

* **JavaScript (ES6+)** - Lógica de control e interacción con la consola y DOM (`prompt`, `alert`).
* **HTML5** (opcional para vincular el archivo `.js`).

---

## 📂 Estructura del Código

El script realiza los siguientes pasos:
1. **Declaración de constantes:** Define las credenciales correctas (`nombreConst` y `contrasenaConst`).
2. **Inicialización de variables de control:**
   * `contador`: Rastrea el número de intentos fallidos.
   * `intentosMax`: Define el límite permitido (3).
   * `accesoOk`: Bandera booleana para verificar el éxito del acceso.
3. **Ciclo `while`:** Ejecuta la validación mientras no se alcancen los 3 intentos y el acceso siga siendo falso.
4. **Validación de credenciales:**
   * Si son correctas: Marca `accesoOk = true`, muestra bienvenida y detiene el ciclo.
   * Si son incorrectas: Incrementa el contador, advierte sobre los intentos restantes o confirma el bloqueo de cuenta si se llegó al límite.

---

## 💻 Ejemplo de Uso / Ejecución

1. Copia el código en un archivo con extensión `.js` (ejemplo: `app.js`).
2. Vincula el archivo en un documento HTML básico:
   ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
       <meta charset="UTF-8">
       <title>Validación de Acceso</title>
   </head>
   <body>
       <script src="login.js"></script>
   </body>
   </html>
   ```
3. Abre el archivo HTML en tu navegador web.
4. Completa las solicitudes de `prompt`:
   * **Usuario por defecto:** `usuario`
   * **Contraseña por defecto:** `1234`

---

## 🔗 Repositorio del Proyecto

[Repositorio de GitHub](https://github.com/ccorralescesde/proyecto_integrador_frontend_I/)

---

## 📝 Licencia

Este proyecto fue desarrollado exclusivamente con fines académicos para la materia de Frontend. No posee una licencia comercial.
