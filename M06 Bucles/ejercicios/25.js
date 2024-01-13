function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var stringInvertido = "";
  var stringReducido = "";
  for(let i = string.length -1 ;i>=0; i--){
    if(string[i]!== " "){stringInvertido+=string[i];
    }
  }
    for(let i = 0 ;i<string.length; i++){
      if(string[i]!== " "){stringReducido+=string[i];
      }
  }  
  
  return stringInvertido.toLocaleLowerCase()==stringReducido.toLocaleLowerCase();
}

module.exports = esPalindromo;
