function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var arr2=[];
  array.forEach(element => {
    if(element%2 == 0){
      arr2.push(element);
    }
  });

  return arr2;
}

module.exports = filtrarNumerosPares;
