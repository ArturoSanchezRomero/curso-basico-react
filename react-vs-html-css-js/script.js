function actualizarSaludo() {
  const nombre = document.getElementById('nombre').value.trim();
  const saludo = document.getElementById('saludo');
  
  // Actualiza el texto del saludo con el nombre ingresado
  saludo.textContent = 'Hola ' + (nombre ? nombre : '');
}