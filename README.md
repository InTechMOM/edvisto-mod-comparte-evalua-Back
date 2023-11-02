<a name="readme-top"></a>
<!--
*** Este es un fork del proyecto https://github.com/maureenbarahona/readme-template 
***
*** Este es un template inicial del repo
*** Gracias por consultar este repositorio 
*** Si tiene una sugerencia o mejora bifurque el repo
*** Y cree una solicitud de extracción
*** o simplemente abra una incidencia con la etiqueta "mejora".
*** ¡No olvides darle una estrella a mi  proyecto!
***¡Gracias de nuevo! ¡Ahora ve a crear algo INCREÍBLE! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** Estoy usando markdown "reference style" enlaces para facilitar la lectura.
*** Los enlaces de referencia están entre corchetes [ ] en lugar de paréntesis )..
*** Consulte la parte inferior de este documento para la declaración de las variables de referencia.
*** para URL de contribuyentes, URL de forks, etc. Esta es una sintaxis concisa y opcional que puede utilizar.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Author][author-shield]][author-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Angiedylexx/edvisto-mod-comparte-evalua-Back/">
    <img src="images/edvisto.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center"> EdVisto </h3>
  
  <p align="center">
    La plataforma educativa "EdVisto" se plantea como solucion tecnologica e innovadora diseñada para revolucionar el proceso de enseñanza y aprendizaje.
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el proyecto</a>
      <ul>
        <li><a href="#functionalities">Funcionalidades</a></li>
        <li><a href="#database-storage">Base de datos y almacenamiento de datos</a></li>
        <li><a href="#validation">Validación de Datos</a></li>
        <li><a href="#documentation">Documentación</a></li>
        <li><a href="#built-with">Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Guia de inicial</a>
      <ul>
        <li><a href="#prerequisites">Prerequisitos</a></li>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#roadmap">Mapa de Rutas</a></li>
    <li><a href="#contributing">Contribuyentes</a></li>
    <li><a href="#license">Licencia</a></li>
    <li><a href="#contact">Contactos</a></li>
    <li><a href="#acknowledgments">Agradecimientos</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Acerca del Proyecto

El módulo "Registro, Ingreso, Compartir y Evaluar" es parte de la plataforma educativa, EdVisto. Este módulo se enfoca en brindar a los usuarios una experiencia de registro y autenticación fluida, segura y eficiente, utilizando tanto una autenticación que implementa correo electrónico  y constraseña como la popular autenticación de Google. También se encarga de garantizar que los datos del usuario se almacenen de manera confiable en nuestra base de datos no relacional de MongoDB.

### Funcionalidades

**Registro de Usuarios:**

- ✍️📋 Creación de cuentas de usuarios: ¡Nuestra plataforma permite a los usuarios registrarse fácilmente! A través de un sencillo formulario que contempla (Nombre, apellido, fecha de nacimiento, correo electronico, contraseña  y pregunta de seguridad), donde los usuarios pueden proporcionar su información personal y crear sus cuentas de usuario. 
- 🌐🔑 Autenticación con Google: Se desarrollo la opción de autenticación utilizando cuentas de Google. Con solo un clic, los usuarios pueden tanto registrarse como ingresar rápidamente y sin complicaciones. 
- 📧🔒 Verificación de la cuenta a través del correo electronico: Para garantizar la seguridad y la autenticidad de las cuentas de nuestros usuarios, enviamos un correo electrónico de verificación a cada usuario registrado. Con solo un clic en el enlace, ¡la cuenta queda verificada! 

![Product Name Screen Shot][product-screenshot1]

**Ingreso de Usuarios:**

- 🚪🔑 Inicio de sesión tradicional: Se desarrollo un método tradicional de inicio de sesión, donde los usuarios pueden ingresar su correo electrónico y contraseña para acceder a los servicios de la plataforma. 
- 🔒🛡️ Protección contra intentos fallidos:  Considerando la  seguridad de nuestros usuarios, se implemento una funcionalidad que bloquea el inicio de sesión después de tres intentos fallidos. Garantizando que las cuentas estén protegidas contra accesos no autorizados. 
- 📧🔑 Reestablecimiento de contraseña:  ¿Olvidaste tu contraseña? No te preocupes. Se habilito la opción de restablecimiento de contraseña, donde el usuario recibira un correo electrónico con un enlace para restablecer su contraseña de forma segura por medio de la pregunta de seguridad que suministro en la creación de la cuenta.  

![Product Name Screen Shot][product-screenshot2]

### Base de datos y almacenamiento de datos

- Uso de Firebase Authentication y Storage: En cuanto a la autenticación, se implemento el servicio de Firebase (Autentication), que proporciona una experiencia segura y confiable para nuestros usuarios. Además de, Firebase Storage con la finalidad de almacenamiento de recursos, asegurando que la información se mantenga segura y accesible en todo momento. 💾
- Conexión con mongoDB como base de datos: Utilizamos MongoDB como nuestra base de datos no relacional para almacenar y gestionar la información del usuario. Brindando la flexibilidad y escalabilidad que queriamos obtener. 📊

### Validación de Datos

Nuestro modúlo implementó la validación de datos por medio de Joi, lo que garantiza que la información proporcionada por los usuarios sea correcta y cumpla con nuestros estándares, para el debido almacenamiento. ✅

  ```sh
  npm install joi
  ```

### Documentación

La documentación completa está disponible a través de Swagger, sin embargo hemos documentado cada funcionalidad en carpetas separadas, para permitir su exploración detallada por medio de los siguientes enlaces.

-[Registro y Autenticación](enlace-documentacion). 📚

Y de forma analoga poder acceder a las rutas de las API o explorar la documentación representada en tu navegador por medio del siguiente enlace [Documentación_Swaggger](http://localhost:3000/docs/#/)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

### Construido con

[![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=JavaScript&color=white&style=border-color:#323330&width=40&height=40)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-%233399FF?style=for-the-badge&logo=Node.js&color=white&style=border-color:#3399FF&width=40&height=40)](https://nodejs.org/es/)
[![NPM](https://img.shields.io/badge/NPM-%23EA4335?style=for-the-badge&logo=NPM&color=white&style=border-color:#EA4335&width=40&height=40)](https://www.npmjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%23589636?style=for-the-badge&logo=MongoDB&color=white&style=border-color:#589636&width=40&height=40)](https://www.mongodb.org/)
[![Firebase](https://img.shields.io/badge/Firebase-%23AA44BB?style=for-the-badge&logo=Firebase&color=white&style=border-color:#AA44BB&width=40&height=40)](https://firebase.google.com/)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- GETTING STARTED -->
## Guia de inicial

Para poner en funcionamiento una copia local, sigue estos sencillos pasos.

### Prerequisitos

Asegúrate de tener instalados los siguientes elementos antes de comenzar

- [Node.js] (https://nodejs.org/) (versión 18.14.1)
- [npm] (https://www.npmjs.com/)

  ```sh
  npm install npm@latest -g
  ```

También necesitarás las credenciales de la API de Firebase, que puedes obtener siguiendo su respectiva  [Documentación_Firebase] (https://firebase.google.com/docs/auth?hl=es-419).

### Instalacion

1. Clonar el repositorio
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Ve al directorio del proyecto
   ```sh
   cd EDVISTO-MOD-COMPARTE-EVALUA-BACK
   ```
3. Instalar paquetes NPM
   ```sh
   npm install
   ```
4. Crea un archivo ".env" en la raíz del proyecto y configura las variables de entorno necesarias. Puedes consultar el archivo ".env.sample" para obtener un ejemplo de como configurar estas variables.
   
5. Ejecuta la aplicación:

Puedes iniciar la aplicación de una de las siguientes maneras:

A. Usando npm (Recomendado para entorno de producción):
   ```sh
   npm start
   ```
B. Usando Node.js directamente
   ```sh
   node app.js
   ```
C. Usando "npm" con "nodemon" para reiniciar automaticamente en cambios (Entorno de desarrollor)
   ```sh
   npm run dev
   ```

La aplicación debería estar en funcionamiento en http://localhost:3000.

Nota: Asegúrate de que tu aplicación de Firebase esté configurada correctamente con las reglas de seguridad adecuadas y las credenciales de Firebase en tu proyecto antes de ejecutar la aplicación localmente.


<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- USAGE EXAMPLES -->
## Usos



<p align="right">(<a href="#readme-top">volver arriba</a>)</p>


<!-- ROADMAP -->
## Mapa de Ruta

- [☑️] Funcionalidad de registro de usuarios
- [ ] Funcionalidad de inicio de sesion
    - [ ] Tradicional
    - [ ] Con proveedor Google
    - [ ] Bloqueo
    - [ ] Reestablecimiento

Consulte los  [open issues](https://github.com/github_username/repo_name/issues) para obtener una lista completa de los problemas conocidos.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- CONTRIBUTING -->
## Contribuidores

Las contribuciones son las que hacen de la comunidad de código abierto un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será **muy apreciada**.

Si tiene alguna sugerencia que pueda mejorar esto, bifurque el repositorio y cree una solicitud de extracción. También puedes simplemente abrir un problema con la etiqueta "mejora".
¡No olvides darle una estrella al proyecto! ¡Gracias de nuevo!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- LICENSE -->
## Licencia

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- CONTACT -->
## Contactos

**Autor (Angie Carolina Reyes)**

- [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5?logo=linkedin&color=0077B5)](https://www.linkedin.com/in/carolinarbackendingenieriamecanica/)
- [![Correo electrónico](https://img.shields.io/badge/Correo%20electrónico-%230077B5?logo=gmail&color=0077B5)](mailto:angiedylexx@gmail.com)
- [![GitHub](https://img.shields.io/badge/GitHub-%230077B5?logo=github&color=0077B5)](https://github.com/Angiedylexx)

Enlace del proyecto: [https://github.com/InTechMOM/edvisto-mod-comparte-evalua-Back](https://github.com/InTechMOM/edvisto-mod-comparte-evalua-Back)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Agradecimientos

* Marinellys Figueroa: [https://github.com/marinellysfigueroa](https://github.com/marinellysfigueroa)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[author-shield]: https://img.shields.io/badge/author-AngieReyes-brightgreen.svg?style=for-the-badge
[author-url]: https://github.com/Angiedylexx
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/Angiedylexx/edvisto-mod-comparte-evalua-Back/
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/Angiedylexx/edvisto-mod-comparte-evalua-Back/blob/master/LICENSE.txt
[product-screenshot1]: images/registro.png
[product-screenshot2]: images/ingreso.png