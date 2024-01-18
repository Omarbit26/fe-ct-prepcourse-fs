function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var narr = [];

  arrayOfStrings.forEach(element => {
    if(element[0]=="a"){
      narr.push(element);
    }
  });
  
  return narr;
}

module.exports = filter;
