<script>
    function moveon{
        /* Exibe uma caixa de diálogo modal para fazer umna pergunta ao usuário */
        var answer = confirm("Está pronto para continuar?");
        /* Se ele clicou OK, faz o navegador carregar uma nova página */
        if (answer) window.location = "http://google.com";
    }

    {/* Executa a função definida acima por 1 minuto (60.000 milisegundos) a partir de agora */}
    setTimeout (moveon, 60000);
    
</script>