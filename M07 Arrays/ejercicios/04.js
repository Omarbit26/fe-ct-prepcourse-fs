function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  let i = Math.round(Math.random()*(array.length));

  return array[i];

}

module.exports = obtenerElementoAleatorio;
