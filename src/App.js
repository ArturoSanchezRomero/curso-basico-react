import MiComponente from "./components/MiComponente";

// Las funciones pueden recibir valores normales
function multiplicacion(a,b) {
  // Pueden retornar varias diferentes 
  return a*b;
}

function App() {
  
  const nombre = "Bill Gates";

  // Retorna JSX
  return (
    <div >
      <MiComponente nombre={nombre} />
      <p>{multiplicacion(15,10)}</p>
    </div>
  );
}

export default App;
