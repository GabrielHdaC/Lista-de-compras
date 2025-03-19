document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinho();
});

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

        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(item);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        adicionarItemAoCarrinho(item);

        // Limpar os campos do formulário
        document.getElementById('produto').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('descrição').value = '';
        document.getElementById('preço').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function adicionarItemAoCarrinho(item) {
    const carrinho = document.getElementById('conteudoCarrinho');
    const divItem = document.createElement('div');
    divItem.className = 'itemCarrinho';
    divItem.innerHTML = `
        <p><strong>Produto:</strong> ${item.produto}</p>
        <p><strong>Quantidade:</strong> ${item.quantidade}</p>
        <p><strong>Preço:</strong> ${item.preco}</p>
    `;
    carrinho.appendChild(divItem);
}

function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.forEach(item => adicionarItemAoCarrinho(item));
}