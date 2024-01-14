function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sumaTotal = resultadosTest.reduce ((suma,element)=>{return suma+=element;},0)

  return sumaTotal/resultadosTest.length;
}

module.exports = promedioResultadosTest;
