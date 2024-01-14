function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var arp  = [];

  for (let i = 0 ; i<array.length ;i++){
    arp.push(array[i]*i);
  }
  return arp;
}

module.exports = multiplicarElementosPorIndice;
