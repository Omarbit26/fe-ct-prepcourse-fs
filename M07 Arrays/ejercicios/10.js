function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código
  let rp = 0 ;
  let maximo = array[rp];
  for (let i = 0  ; i < array.length ; i++){
  if(array[i]>maximo){
      maximo = array[i];
      rp = i;
    }
  }
  return rp;
}

module.exports = encontrarIndiceMayor;
