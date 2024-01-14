function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let rp = [];
  let oke,okn,okm = false;
  for(let i = 0 ; i<array.length;i++){
    if(array[i]=="Enero"){oke=true;rp.push(array[i]);
    }
    if (array[i]=="Noviembre"){
      okn=true;rp.push(array[i]);
      }
    if(array[i]=="Marzo"){
      okm=true;rp.push(array[i]);
    }
  }
  if(oke&&okm&&okn){
    return rp;
  }
  else{
    return "No se encontraron los meses pedidos";
  }

}

module.exports = mesesDelAño;
