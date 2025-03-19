// Carregar o carrinho quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinho();
    atualizarBotaoComprar();

    // Validar a quantidade
    document.getElementById('quantidade').addEventListener('input', function (e) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // Validar o preço
    document.getElementById('preço').addEventListener('input', function (e) {
        this.value = this.value.replace(/[^0-9.]/g, '');
    });

    // Easter egg
    document.getElementById('easterEgg').addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });
});

// Adicionar item ao carrinho
function adicionarAoCarrinho() {
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const descricao = document.getElementById('descrição').value;
    let preco = document.getElementById('preço').value;

    // Validação de entrada
    if (produto && quantidade && descricao && preco) {
        preco = parseFloat(preco).toFixed(2); // Formatar preço com duas casas decimais

        const item = {
            id: Date.now(), // Usar timestamp como identificador único
            produto,
            quantidade,
            descricao,
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

        // Atualizar total do carrinho
        atualizarTotalCarrinho();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Adicionar item ao DOM na seção do carrinho
function adicionarItemAoCarrinho(item) {
    const conteudoCarrinho = document.getElementById('conteudoCarrinho');
    const divItem = document.createElement('div');
    divItem.className = 'itemCarrinho';
    divItem.innerHTML = `
        <p><strong>Produto:</strong> ${item.produto}</p>
        <p><strong>Quantidade:</strong> ${item.quantidade}</p>
        <p><strong>Descrição:</strong> <span class="descricao">${item.descricao}</span></p>
        <p><strong>Preço:</strong> <span class="preco">${item.preco}</span> reais</p>
        <button class="btnExcluir" aria-label="Excluir item do carrinho" onclick="excluirItemCarrinho(${item.id})">Excluir</button>
    `;
    conteudoCarrinho.appendChild(divItem);
}

// Carregar itens do carrinho do localStorage e adicioná-los ao DOM
function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const conteudoCarrinho = document.getElementById('conteudoCarrinho');
    carrinho.forEach(item => {
        adicionarItemAoCarrinho(item);
    });
    atualizarTotalCarrinho();
}

// Comprar todos os itens do carrinho
function comprarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let itensComprados = JSON.parse(localStorage.getItem('itensComprados')) || [];
    itensComprados = itensComprados.concat(carrinho);
    localStorage.setItem('itensComprados', JSON.stringify(itensComprados));

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

    // Atualizar total do carrinho
    atualizarTotalCarrinho();
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

// Atualizar o total do carrinho
function atualizarTotalCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const total = carrinho.reduce((acc, item) => acc + parseFloat(item.preco), 0);
    document.getElementById('totalCarrinho').innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Excluir item do carrinho
function excluirItemCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(item => item.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    document.getElementById('conteudoCarrinho').innerHTML = '';
    carregarCarrinho();
}

// Redirecionar para a página de itens comprados
function verItensComprados() {
    window.location.href = 'comprado.html';
}