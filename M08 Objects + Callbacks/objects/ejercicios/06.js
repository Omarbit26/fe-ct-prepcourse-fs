const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let rp = 0;

  for(prop in objeto){
    rp++;
  }

  return rp;
};

module.exports = contarPropiedades;
