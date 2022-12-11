/* Exibe uma mensagem em uma seção de saída de depuração especial de documento */
/* Se essa seção não existir, ele cria uma */

function debug(msg){
    /* Localiza a seção de depuração do documento, examinando os atributos de identificação HTML */

    var log = document.getElementById("debuglog");

    /* Se não existe elemento algum com a identificação "debugLog", cria um */

    if (!log) {
        log = document.createElement("div") /* Cria um novo elemento <div> */
        log.id = "debuglog";

        log.innerHTML = "<h1>Debug Log</h1>";
        document.body.appendChild(log);

    }


    /* Agora, coloca a mensagem em seu próprio <pre> e a anexa no log */

    var pre = document.createElement("pre"); /* Cria uma marca pre */
    var text = document.createTextNode(msg); /* Cria uma mensagem em um nó de texto */
    pre.appendChild(text); /* Adiciona ot exto no pre */
    document.body.appendChild(log); /* Adiciona <pre> no log */
}