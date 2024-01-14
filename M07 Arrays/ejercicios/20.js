function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var rp =  0;
  numeros.forEach(element => {rp+=(element%2==0? 1:0)});
  
  return rp;
}

module.exports = contarParesConContinue;
