/* jQuery é resumidamente uma API para fazer scripts de conteúdo,
da apresentação e do comportamento de documentos */

function debug(msg {
    var log = $("#debuglog"); /* Localiza o elemento para exibir a msg */
    if (log.lenght == 0) { /* Se ele ainda não existe, crie-o */}
        log = $("<div id='debuglog'><h1>Debug Log</h1></div>"); 
        log.appendTo(document.body); /* E insere no final do corpo */
}


log.append($("<pre>".text(msg)); /* Coloca a msg em <pre> e anexa no log. */




)