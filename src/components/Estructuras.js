// Componente personalizado
const ComponentePersonalizado = () => <span>Este es un componente personalizado</span>;

function TiposDeJSX() {
  const nombre = "Juan";
  const mostrarNombre = true;
  const lista = ["Elemento 1", "Elemento 2", "Elemento 3"];
  const estilo = {
    color: 'blue',
    fontSize: '20px',
  };

  return (
    <div>
      {/* 1. Texto simple */}
      <h1>1. Hola, este es un ejemplo de JSX</h1>

      {/* 2. Expresión con una variable */}
      <p>2. Mi nombre es: {nombre}</p>

      {/* 3. Operador ternario */}
      <p>{mostrarNombre ? "El nombre está visible" : "El nombre no está visible"}</p>

      {/* 4. Fragmento */}
      <>
        <p>4. Este es un fragmento de JSX</p>
      </>

      {/* 5. Mapeo de una lista */}
      <ul>
        {lista.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>

      {/* 6. Aplicación de estilos inline */}
      <p style={estilo}>6. Este texto tiene estilos aplicados inline</p>

      {/* 7. Uso de un componente personalizado */}
      <ComponentePersonalizado />

      {/* 8. Comentarios dentro de JSX */}
      {/* Este es un comentario en JSX */}

      {/* 9. Atributos condicionales */}
      <input type="text" placeholder={mostrarNombre ? "Escribe tu nombre" : "Nombre oculto"} />

      <br />

      {/* 10. Uso de eventos */}
      <button onClick={() => alert("¡Hola desde un evento!")}>Haz clic aquí</button>
    </div>
  );
}

export default TiposDeJSX;
