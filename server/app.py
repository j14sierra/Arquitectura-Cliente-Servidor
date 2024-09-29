from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../client', static_url_path='/')
CORS(app)  # Habilitar CORS si es necesario

# Base de datos simulada
inventario = [
    {"id": 1, "producto": "Laptop", "cantidad": 10},
    {"id": 2, "producto": "Teclado", "cantidad": 25},
    {"id": 3, "producto": "Mouse", "cantidad": 50}
]

# Ruta para obtener el inventario
@app.route('/api/inventario', methods=['GET'])
def obtener_inventario():
    return jsonify(inventario)

# Ruta para agregar un nuevo producto
@app.route('/api/inventario', methods=['POST'])
def agregar_producto():
    nuevo_producto = request.get_json()
    nuevo_producto['id'] = len(inventario) + 1
    inventario.append(nuevo_producto)
    return jsonify(nuevo_producto), 201

# Ruta para servir la interfaz del cliente
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Servir archivos estáticos como CSS, JS
@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)
