// Cremos un componente 
// El nombre del componente se escribe utilizando camelCase
export default function MiComponente() {

    const nombre = "Bill Gates";

    // Se retorna un unico elemento
    return (
        <div>
            <p>Hola {nombre}</p>
            <p>La suma de 50+12 es {50+12}</p>
        </div>
    );
}