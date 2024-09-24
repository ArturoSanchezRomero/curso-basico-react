import MiComponente from "./components/MiComponente";
import Saludar from "./components/Saludar";

// Las funciones pueden recibir valores normales
function multiplicacion(a,b) {
  // Pueden retornar varias diferentes 
  return a*b;
}

function App() {
  
  const nombre = "Bill Gates";

  // Retorna JSX
  return (
    <Saludar />
  );
}

export default App;
