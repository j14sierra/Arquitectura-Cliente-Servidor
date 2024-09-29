document.addEventListener('DOMContentLoaded', obtenerInventario);

const API_URL = 'http://127.0.0.1:5000/api/inventario';

function obtenerInventario() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => mostrarInventario(data))
        .catch(error => console.error('Error al obtener inventario:', error));
}

function mostrarInventario(inventario) {
    const tablaContenido = document.getElementById('contenido-inventario');
    tablaContenido.innerHTML = '';

    inventario.forEach(producto => {
        const fila = `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.producto}</td>
                <td>${producto.cantidad}</td>
            </tr>
        `;
        tablaContenido.innerHTML += fila;
    });
}

const formulario = document.getElementById('form-producto');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nuevoProducto = {
        producto: document.getElementById('nombre-producto').value,
        cantidad: document.getElementById('cantidad-producto').value
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoProducto)
    })
    .then(response => response.json())
    .then(data => {
        alert('Producto agregado exitosamente');
        obtenerInventario(); // Actualiza la tabla
    })
    .catch(error => console.error('Error al agregar producto:', error));
});
