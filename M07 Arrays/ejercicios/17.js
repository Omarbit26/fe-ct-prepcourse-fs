function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var arr=[];
  var a = 0;
  while(a<=60){
    arr.push(a);
    a+=6;
  }
  return arr;
}

module.exports = tablaDelSeis;
