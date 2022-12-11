// Objetos e Arrays

// O tipo de dados mais importante do JS é o objeto

//Um objeto é uma coleção de pares nomevalor ou uma string para mapa de valores


var book = { //Objetos são colocados entre chaves
    topico: "JavaScript" //A opropriedade "topic" tem o valor "JavaScript" (string)
    , fat: true  // A propriedade "fat" tem o valor true.
}; //A chave marca o fim do objeto


// Você pode acessar as propriedades de um objeto com . ou [] :

book.topic // => JavaScript
console.log(book.topic)

book["fat"] // => true: outro modo de acessar valores de propriedade
book.author = "Flanagan" // Crie novas propriedades por meio de atribuição
book.contents = {}; // {} é um objeto vazio sem qualquer propriedade

//JS também aceita arrays (listas indexadas numericamente) de valores.

var primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [e].
primes[0] // => 2: o primeiro elemento(índice 0) do array
primes.lenght // =>4 : quantidade de elementos no array
primes[primes.lenght-1] // = 7 o último elemento do array
primes[4] = 9 ; // adiciona um novo elemento por meio de atribuição
primes[4] = 11; // ou altera um elemento existente por meio de atribuição
var empty = []; // [] é um array vazio, sem qualquer elemento.
empty.lenght // => 0




//Os arrays e objetos podem conter outros arrays e objetos:
var points = [ // Um array com 2 elementos.
     {x:0, y:0}, // Em que cada elemento é um objeto
     {x:1, y:1}]; 


var data = { // Um objeto com 2 propriedades
    trial1: [[1,2], [3,4]], //O valor de cada propriedade é um array
    trial2: [[2,3], [4,5]], //Os elementos dos arrays sao arrays
};


