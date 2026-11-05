<div align="center">

<img width="792" height="453" alt="index" src="https://github.com/user-attachments/assets/fab37120-f567-4562-84f8-e132bd9ade28" />
<img width="794" height="458" alt="login" src="https://github.com/user-attachments/assets/1e929550-640d-4e40-ad58-ed8705661ff8" />
<img width="728" height="418" alt="notas" src="https://github.com/user-attachments/assets/d8130819-0b23-4700-a381-623c9bb1ef5f" />

# Sistema de Gestión Académica

**Proyecto de Aula Integrador — Frontend I**  
*Institución Educativa CESDE*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Entrega-Segunda_Fase_(DOM)-success?style=flat-square)](#)

</div>

---

## 📌 Descripción del Proyecto

El **Sistema de Gestión Académica** es una aplicación web integral desarrollada para resolver las necesidades básicas de administración escolar y consulta estudiantil. Permite la visualización de servicios, el pre-registro de usuarios según su rol, la autenticación controlada con persistencia local, el monitoreo del progreso académico en un panel de control (*dashboard*) y la digitación dinámica de calificaciones en tiempo real.

Este repositorio corresponde a la **Segunda Entrega** del proyecto, en la cual se consolidó una arquitectura modular guiada por eventos, validación de formularios mediante manipulación del Document Object Model (DOM) y persistencia en sesión mediante `localStorage`.

---

## 👥 Datos Académicos y Equipo de Desarrollo

* **Institución Educativa:** CESDE
* **Materia:** Frontend I
* **Docente Encargado:** Diego Giraldo
* **Integrantes del Equipo:**
  * Oscar Velasquez
  * Mariana Gómez
  * Carlos Corrales
* **Repositorio Oficial:** [GitHub - Proyecto Integrador Frontend I](https://github.com/ccorralescesde/proyecto_integrador_frontend_I/)

---

## 🔄 Bitácora de Cambios (Changelog)

### Comparativa: Entrega 1 vs. Entrega 2

| Aspecto / Módulo | Entrega 1 (Versión Inicial) | Entrega 2 (Versión Actual) |
| :--- | :--- | :--- |
| **Interacción de Usuario** | Modales nativos del navegador (`prompt()`, `alert()`). | Formularios interactivos HTML5 con eventos DOM (`submit`, `input`, `click`). |
| **Lógica de Autenticación** | Ciclo síncrono `while` con bloqueo de hilo (`login.js`). | Manejo asíncrono y controlado por eventos en el DOM (`script.js`). |
| **Gestión de Sesión** | Volátil en memoria; no persistía tras cerrar alertas. | Persistencia de datos del usuario autenticado en `localStorage`. |
| **Interfaz Gráfica (UI)** | Plantillas estáticas preliminares sin sincronización. | Vistas estructuradas con diseño semántico, barra lateral fija, tarjetas métricas y tablas dinámicas. |
| **Cálculo de Notas** | Valores estáticos en código HTML sin interactividad. | Cálculo reactivo en tiempo real al ingresar notas, actualizando promedios y alertas visuales por color. |
| **Módulo de Registro** | Formulario no validado. | Validación de campos obligatorios, selección de rol y verificación de coincidencia de contraseñas. |

---

## 🚀 Funcionalidades Principales

### 1. Landing Page y Portal Informativo (`index.html`)
* Navegación global del sistema con menús directos.
* Carrusel responsivo con scroll asistido (`scroll-snap`) para exhibición de servicios: Gestión de Alumnos, Asistencia, Digitación de Notas y Consulta de Boletines.
* Pie de página multisección con enlaces institucionales y soporte.

### 2. Autenticación y Control de Intentos (`login.html`)
* Validación contra credenciales predeterminadas institucionales.
* Control estricto de seguridad: máximo **3 intentos fallidos**.
* Mensajes de alerta dinámicos con retroalimentación visual en tiempo real.
* Inhabilitación automática de controles (`inputs` y `submit`) tras superar el límite de intentos.
* Redirección protegida y registro del usuario en `localStorage`.

### 3. Portal / Dashboard del Estudiante (`Bienvenido.html`)
* Lectura dinámica del usuario autenticado desde `localStorage` para personalizar el encabezado.
* Panel lateral de navegación (*sidebar*) con accesos rápidos.
* Tarjetas métricas de desempeño (materias cursadas, promedio general, asistencia).
* Cierre de sesión seguro con diálogo de confirmación y limpieza de almacenamiento local.

### 4. Registro y Calificación Dinámica (`notas.html`)
* Filtros de selección por curso y periodo académico.
* Matriz de calificaciones con entradas editables por estudiante.
* **Cálculo reactivo en tiempo real:** al escribir una nota, el promedio del estudiante se calcula automáticamente y actualiza su color:
  * Promedios $\ge 3.0$: Color azul institucional (`#1e3a8a`).
  * Promedios $< 3.0$: Color rojo de alerta (`#dc2626`).
* Notificación visual al guardar las modificaciones del libro de calificaciones.

### 5. Pre-Registro de Usuarios (`registro.html`)
* Formulario clasificado por roles: *Estudiante*, *Docente* y *Administrador*.
* Validación de obligatoriedad en cada campo de texto y selección.
* Verificación de paridad entre contraseña y confirmación de contraseña, notificando inconsistencias antes del envío.

---

## 🛠️ Tecnologías Empleadas

* **HTML5 Semántico:** Uso de etiquetas estructurales (`<main>`, `<section>`, `<aside>`, `<nav>`, `<article>`, `<table>`, `<footer>`) optimizadas para accesibilidad.
* **CSS3 Avanzado:**
  * Modelo de caja flexible (*Flexbox*) y rejilla (*CSS Grid*).
  * Adaptabilidad completa para resoluciones de escritorio, tableta ($\le 900\text{px}$) y móvil ($\le 600\text{px}$).
  * Controles de scroll táctil y efectos de transición visual.
* **JavaScript (Vanilla ES6+):**
  * Control del ciclo de vida (`DOMContentLoaded`).
  * Listeners para eventos del DOM (`submit`, `input`, `click`).
  * API de `localStorage` para persistencia de sesión.
  * Operaciones numéricas y formato de decimales para promedios académicos.

---

## 📁 Estructura del Directorio

```text
proyecto_integrador_frontend_I/
├── Bienvenido.html    # Dashboard principal del estudiante
├── index.html         # Página de inicio y catálogo de servicios
├── login.html         # Interfaz de inicio de sesión
├── notas.html         # Módulo de cálculo y registro de calificaciones
├── registro.html      # Formulario de pre-registro por perfiles
├── login.js           # Histórico: Algoritmo de validación de la Entrega 1
├── script.js          # Controlador principal de lógica y eventos (Entrega 2)
├── styles.css         # Hoja de estilos globales, layout y media queries
├── img/               # Recursos gráficos y multimedia
└── README.md          # Documentación técnica del proyecto
```

---

## 💻 Guía de Despliegue y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ccorralescesde/proyecto_integrador_frontend_I.git
   cd proyecto_integrador_frontend_I
   ```

2. **Ejecutar en el navegador:**
   * Al tratarse de una solución *Front-End* pura, no requiere instalación de dependencias ni servidores de compilación.
   * Haga doble clic sobre `index.html` o utilice la extensión **Live Server** de Visual Studio Code para previsualizarlo con recarga automática.

3. **Credenciales de prueba para la Entrega 2:**
   * **Usuario:** `ocuadrado@cesde.net`
   * **Contraseña:** `12345`

> *Nota sobre la Entrega 1:* Si desea examinar el comportamiento original con `prompt()` e interacción en consola, abra la consola de desarrollo del navegador e importe `login.js` con las credenciales de primera fase (`usuario` / `1234`).

---

## 📄 Licencia

Este proyecto ha sido desarrollado estrictamente con fines académicos y pedagógicos en el marco de la asignatura **Frontend I** de la institución educativa **CESDE**. Queda prohibida su comercialización sin previa autorización de los autores y de la institución.