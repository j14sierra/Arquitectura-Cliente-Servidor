# Aplicación de Gestión de Inventario Cliente/Servidor

Este proyecto es una aplicación de gestión de inventario que utiliza una arquitectura cliente/servidor. El servidor está construido con **Flask** y maneja las solicitudes relacionadas con el inventario, mientras que el cliente es una página web que interactúa con el servidor para mostrar los productos y agregar nuevos elementos al inventario.

## Características
- Visualización de un inventario de productos con cantidad disponible.
- Posibilidad de agregar nuevos productos al inventario.
- Comunicación entre cliente y servidor a través de **fetch API**.
- Backend desarrollado en **Flask** (Python).
- Frontend simple en **HTML**, **CSS** y **JavaScript**.

## Tabla de Contenidos
1. [Requisitos](#requisitos)
2. [Instalación](#instalación)
3. [Ejecución del Proyecto](#ejecución-del-proyecto)
4. [Explicación del Código](#explicación-del-código)
    - [Servidor (Flask)](#servidor-flask)
    - [Cliente (HTML/CSS/JS)](#cliente-htmlcssjs)
5. [Arquitectura Cliente/Servidor](#arquitectura-clienteservidor)
6. [Estructura Del Proyecto](#estructura-del-proyecto)
7. [Contribuciones](#contribuciones)


## Requisitos

- **Python 3.x**
- **Pip** (gestor de paquetes de Python)
- Navegador web moderno

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/j14sierra/Arquitectura-Cliente-Servidor.git
   cd inventario-app
2. **Instalar dependencias del servidor**
   Navega a la carpeta del servidor y ejecuta el siguiente comando para instalar las dependencias:
   
   ```bash
   cd server
   pip install -r requirements.txt
   
## Ejecución del Proyecto

1. **Ejecutar el servidor Flask**
      ```bash
      python app.py
      
Esto iniciará el servidor en http://127.0.0.1:5000

2. **Abrir el cliente en el navegador**
   
   Abre tu navegador y visita http://127.0.0.1:5000 para interactuar con la aplicación.
   
## Explicación del Código

**Servidor (Flask)**

El servidor está construido usando Flask, un framework ligero de Python para el desarrollo web. Aquí están las principales rutas y funcionalidades:

* **Ruta GET** /api/inventario:
Devuelve el inventario actual en formato JSON.
* **Ruta POST** /api/inventario:
Recibe un nuevo producto en formato JSON, lo agrega a la base de datos simulada y devuelve el producto agregado.

El código se encuentra en el archivo server/app.py.

## Cliente (HTML/CSS/JS)

El cliente es una página web que interactúa con el servidor a través de fetch para obtener y agregar productos. Está compuesto por:

* **HTML** (index.html):
Contiene la estructura de la página, incluyendo una tabla para visualizar el inventario y un formulario para agregar nuevos productos.

* **JavaScript** (script.js):
Maneja las solicitudes al servidor (GET y POST), actualizando dinámicamente la tabla del inventario.

* **CSS** (style.css):
Proporciona estilos básicos para la página.

El código fuente del cliente está en la carpeta client/.

* **Ruta POST** /api/inventario:
Recibe un nuevo producto en formato JSON, lo agrega a la base de datos simulada y devuelve el producto agregado.

El código se encuentra en el archivo server/app.py.

## Arquitectura Cliente/Servidor

Este proyecto sigue una arquitectura cliente/servidor, donde:

* **Servidor:**
El servidor está encargado de gestionar el estado del inventario (datos), y maneja las solicitudes desde el cliente, tanto para obtener como para modificar los productos.

* **Cliente:**
El cliente es una interfaz gráfica accesible desde el navegador, que permite al usuario interactuar con el inventario mediante peticiones al servidor.

* **Ventajas de esta arquitectura:**

  	* Separación de responsabilidades: El servidor se encarga del procesamiento de datos y el cliente de la presentación.
  	* Escalabilidad: Puedes modificar el cliente o el servidor de forma independiente.
	* Reusabilidad: El servidor puede ser utilizado por diferentes clientes (web, móviles, etc.).

## Estructura Del Proyecto

Es importante que al subir tu proyecto a GitHub, la estructura de carpetas sea clara. Aquí está la estructura final del proyecto:
	
	inventario-app/
	│
	├── client/
	│   ├── index.html
	│   ├── script.js
	│   └── style.css
	│
	├── server/
	│   ├── app.py
	│   ├── requirements.txt
	│
	├── LICENSE
	└── README.md
 
## Contribuciones
Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request. ¡Las contribuciones son bienvenidas!



