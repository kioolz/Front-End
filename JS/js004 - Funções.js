/* As funções são blocos de código Js parametrizados */

function plus1(x) { /* Define uma função chamada "plus1" , com parâmetro x*/
    return x+1; /* Retorna um valor uma unidade maior do que o que foi passado */
} /* As funções são delimitadas entre chaves */


var y = 3;
plus1(y) /*  = 4, y é 3 pelo outro exemplo. Essa chamada então retorna 3+1 */

var square = function(x) { /* as funções são valores e podem ser atribuidas as variáveis */}
    return x*x /* Calcula a potência 2 da função */
}; /* Fim da função */

square(plus(y)) // /* Chama as duas funções em uma única expressão */


/* Quando combinamos funções com objetos, obtemos métodos */

var a = []; /* Cria um array vazio */
a.push(1,2,3); /* O método push() adiciona elementos no array */
a.reverse(); /* outro método que inverte a ordem dos elementos no array */


/* Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao objeto
no qual o método é definido: neste caso, o array de pontos anterior. */

points.dist = function() { /* Define um método para calcular a distância entre pontos */
    var p1 = this[0]; /* Primeiro elemento do array que chamamos */
    var p2 = this[1]; /* Segundo elemento do objeto this */
    var a = p2.x-p1.x; /* Diferença em coordenadas X */
    var b = p2.y-p1.y; /* Diferença em coordenadas Y */
    return Math.sqrt(a*a+b*b); /* Teorema de pitágoras - math.sqrt() calcula a raiz quadrada */

};

points.dist() /* => 1,414: distância entre nossos 2 pontos */

