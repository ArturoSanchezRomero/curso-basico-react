import React, { useState } from 'react';
import './Saludar.css';  // Asegúrate de tener este archivo CSS

function Saludar() {
  const [nombre, setNombre] = useState('');

  return (
    <div className="contenedor">
      <h1 className="saludo">Hola {nombre}</h1> {/* Muestra "Hola" desde el inicio */}

      <input
        className="input"
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} // Actualiza el nombre en tiempo real
      />
    </div>
  );
}

export default Saludar;
