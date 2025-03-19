// Carregar itens comprados quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
    carregarItensComprados();
});

// Carregar itens comprados do localStorage e adicioná-los ao DOM
function carregarItensComprados() {
    const itensComprados = JSON.parse(localStorage.getItem('itensComprados')) || [];
    const conteudoComprados = document.getElementById('conteudoComprados');
    itensComprados.forEach(item => {
        const divItem = document.createElement('div');
        divItem.className = 'itemComprado';
        divItem.innerHTML = `
            <p><strong>Produto:</strong> ${item.produto}</p>
            <p><strong>Quantidade:</strong> ${item.quantidade}</p>
            <p><strong>Descrição:</strong> ${item.descricao}</p>
            <p><strong>Preço:</strong> ${item.preco} reais</p>
            <button class="btnExcluir" aria-label="Excluir item comprado" onclick="excluirItemComprado(${item.id})">Excluir</button>
            <button class="btnComprarNovamente" aria-label="Comprar novamente" onclick="comprarNovamente('${item.produto}', ${item.quantidade}, '${item.descricao}', ${item.preco})">Comprar novamente</button>
        `;
        conteudoComprados.appendChild(divItem);
    });
}

// Excluir item comprado
function excluirItemComprado(id) {
    let itensComprados = JSON.parse(localStorage.getItem('itensComprados')) || [];
    itensComprados = itensComprados.filter(item => item.id !== id);
    localStorage.setItem('itensComprados', JSON.stringify(itensComprados));
    document.getElementById('conteudoComprados').innerHTML = '';
    carregarItensComprados();
}

// Comprar novamente
function comprarNovamente(produto, quantidade, descricao, preco) {
    const item = { id: Date.now(), produto, quantidade, descricao, preco };
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Item adicionado ao carrinho!');
}

// Limpar lista de itens comprados
function limparItensComprados() {
    localStorage.removeItem('itensComprados');
    document.getElementById('conteudoComprados').innerHTML = '';
}

// Voltar para a página anterior
function voltar() {
    window.history.back();
}