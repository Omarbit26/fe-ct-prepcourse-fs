function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
let result = {};

for( let propiedades in objeto){
    result[propiedades] = objeto[propiedades];    
}

result[propiedad]=valor;

return result;

}

module.exports = actualizarValorPropiedad;
