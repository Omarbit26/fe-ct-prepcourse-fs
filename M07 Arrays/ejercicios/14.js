function multiplicarArgumentos(...args) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if(args.length>0){
    return args.reduce((pr,el)=>{return pr*=el;},1);
  }
  return 0;
}

module.exports = multiplicarArgumentos;
