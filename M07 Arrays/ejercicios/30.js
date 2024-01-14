function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:--

  for(let i=1; i<numeros.length; i++){
    for(let j = i-1; j>=0;j--){
      if(numeros[j]==numeros[i]){
        return numeros[j];
      }
    }
  }
}

module.exports = encontrarElementoRepetido;