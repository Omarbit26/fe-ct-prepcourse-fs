function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var rp = 1; 

  for (let i = a ; i<=b; i++){
    rp *= i;
  }
  
  return rp === -0 ? 0: rp;
  

}

module.exports = productoEntreNúmeros;