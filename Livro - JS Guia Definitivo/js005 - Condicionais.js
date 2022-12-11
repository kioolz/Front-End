
//As instruções JS incluem condicionais e laços que usam a sintaxes da linguagens C, C++, Java, etc.

/* Função modular */
function abs(x) { /* Uma função para calcular o módulo */
    if (x >= 0) { /* A instrução if */
        return x; /* Executa esse código se a condição é verdadeira */
    } /* Encerra a condição */
    else {  /* Se não for verdadeira, executa esse código */
        return -x; /* Código */
    } /* Encerra a condição. */
}

/* Função fatorial */

function factorial(n) { 
    var product = 1;
    while (n > 1) {
        product *= n;
        n--;

    }
    return product;

}

factorial(4)