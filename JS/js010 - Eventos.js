/* JS nos permite fazer scripts do conteúdo HTML e da apresentação CSS 
de documentos em navegadores Web, mas também nos permite definir o comportamento
 desses documentos com rotinas de tratmento de evento. */


 <script src="debug.js"></script>
 <script src="hide.js"></script>

 Hello

 <button onclick="hide(this,true); debug('hide button1');"> Hide1</button>

 <button onclick="hide(this); debug('hide button 2');">Hide2</button>

World


/* E aqui está umn código JS do lado do cliente que utiliza eventos. Ele registra uma rotina de tratamento de evento para o importante evento "load"
e também demonstra uma maneira sofisticada de registrar funções de rotina de tratamento para eventos click */

/* O evento "load" ocorre quando um documento está totalmente carregado. 
Normalmente, precisamos esperar por esse evento antes de começarmos a executar nosso código */

window.onload = function() {
    /* Localiza todas as marcas <img> no documento */
    var images = document.getElementsByTagName("img");

    /* Faz um laço por elas, adicionando uma rotina de tratamento para eventos "Click" */
    /* em cada uma para clicar na imagem e ocultá-la */

    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if (image.addEventListener) /* Outro modo de registrar uma rotina de tratamento */

            image.addEventListener("click", hide, false);
        else /* Para compatibilidade com o IE8 e anteriores */
            image.attachEvent("onclick, hide");

    }

    /* Esta função de rotina poara tratamento de evento registrada anteriormente */

    function hide(event) { event.target.style.visibility = "hidden"; }

    

}




