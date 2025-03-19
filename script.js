// Carregar o carrinho quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinho();
    atualizarBotaoComprar();
});

// Adicionar item ao carrinho
function adicionarAoCarrinho() {
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preço').value;

    if (produto && quantidade && preco) {
        const item = {
            produto,
            quantidade,
            preco
        };

        // Obter o carrinho do localStorage ou inicializar um novo
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(item);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // Adicionar item ao DOM
        adicionarItemAoCarrinho(item);

        // Limpar os campos do formulário
        document.getElementById('produto').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('descrição').value = '';
        document.getElementById('preço').value = '';

        // Atualizar visibilidade do botão "Comprar"
        atualizarBotaoComprar();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Adicionar item ao DOM na seção do carrinho
function adicionarItemAoCarrinho(item) {
    const carrinho = document.getElementById('conteudoCarrinho');
    const divItem = document.createElement('div');
    divItem.className = 'itemCarrinho';
    divItem.innerHTML = `
        <p><strong>Produto:</strong> ${item.produto}</p>
        <p><strong>Quantidade:</strong> ${item.quantidade}</p>
        <p><strong>Preço:</strong> ${item.preco}</p>
        <button class="btnExcluir" onclick="excluirItem('${item.produto}')">Excluir</button>
    `;
    carrinho.appendChild(divItem);
}

// Carregar itens do carrinho do localStorage e adicioná-los ao DOM
function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.forEach(item => adicionarItemAoCarrinho(item));
}

// Comprar todos os itens do carrinho
function comprarCarrinho() {
    // Limpar o carrinho
    localStorage.removeItem('carrinho');
    document.getElementById('conteudoCarrinho').innerHTML = '';

    // Exibir animação de confetes
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    alert('Compra realizada com sucesso!');

    // Atualizar visibilidade do botão "Comprar"
    atualizarBotaoComprar();
}

// Atualizar a visibilidade do botão "Comprar"
function atualizarBotaoComprar() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const botaoComprar = document.querySelector('.btnComprar');
    if (carrinho.length === 0) {
        botaoComprar.style.display = 'none';
    } else {
        botaoComprar.style.display = 'block';
    }
}

// Excluir item do carrinho
function excluirItem(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(item => item.produto !== produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Recarregar o carrinho
    document.getElementById('conteudoCarrinho').innerHTML = '';
    carregarCarrinho();

    // Atualizar visibilidade do botão "Comprar"
    atualizarBotaoComprar();
}