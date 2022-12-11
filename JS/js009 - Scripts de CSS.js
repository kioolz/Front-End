function hide(e, reflow) { 
    /* Oculta o elemento e faz script de seu estilo */
    if (reflow) {
        e.style.display = "none" /* Se o 2 argumento é verdadeiro */
        /* Oculta o elemento e utiliza o espaço */
    }

    else {
        /* Se não, torna invisivel mas deixa seu espaço */
        e.style.visibility = "hidden";
    }
}


function highlight(e) {
    /* Destaca e, definindo uma classe CSS */
    /* Basta definir ou anexar no atributo da classe HTML */
    /* Isso presume que uma folha de estilos CSS já define a classe hilite */
    
    if (!e.className) e.className = "hilite";
    else e.className += "hilite";
    
}