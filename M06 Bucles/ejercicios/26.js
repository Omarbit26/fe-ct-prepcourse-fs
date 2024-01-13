function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

str1 = str1.toLocaleLowerCase();
str2 = str2.toLocaleLowerCase();

var v1 = str1.split(' ').join().split('').sort();
var v2 = str2.split(' ').join().split('').sort();

return v1.join()==v2.join();

}



module.exports = esAnagrama;
