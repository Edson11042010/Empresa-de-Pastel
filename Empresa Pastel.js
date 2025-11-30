document.addEventListener('DOMContentLoaded', function () {
    // 1. Selecionar os elementos principais usando os IDs do HTML
    const form = document.getElementById('formPedido');
    const conteudoPedido = document.getElementById('conteudo-pedido');
    const agradecimento = document.getElementById('mensagem-agradecimento');

    // 2. Definir o conteúdo de agradecimento
    const mensagemHTML = `
        <h2>Obrigada pela sua preferência!</h2>
        <p>Volte sempre!</p>
    `;

    // 3. Adicionar o ouvinte de evento ao formulário
    if (form) {
        form.addEventListener('submit', function (event) {
            // Previne o comportamento padrão de recarregar a página
            event.preventDefault();

            // 4. Esconder o conteúdo do pedido
            if (conteudoPedido) {
                conteudoPedido.style.display = 'none';
            }

            // 5. Adicionar o conteúdo de agradecimento
            if (agradecimento) {
                agradecimento.innerHTML = mensagemHTML;

                // 6. Mostrar a tela de agradecimento
                agradecimento.style.display = 'flex';

                // *OPCIONAL: Voltar para o topo da página
                window.scrollTo(0, 0);
            }
        });
    } else {
        // Isso é para debugar se o formulário não for encontrado
        console.error("Erro no JavaScript: Elemento 'formPedido' não encontrado. Verifique o ID no HTML.");
    }
});