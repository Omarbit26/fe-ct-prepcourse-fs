function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  var r = 0;
  var nf;
  for(let i = 0 ;i<numeros.length-2;i++){
    if(numeros[i+1]-numeros[i] == numeros[i+2]-numeros[i+1]){
      r = numeros[i+1]-numeros[i];
      break;
    }
  }
  for(let i =0 ; i<numeros.length-1;i++){
    if(numeros[i+1]-numeros[i]!= r){
      nf = numeros[i]+r;
    }
  }

  return nf== undefined ? null : nf;


}

module.exports = encontrarNumeroFaltante;