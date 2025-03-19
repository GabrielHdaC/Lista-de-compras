export function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const conteudoCarrinho = document.getElementById('conteudoCarrinho');
    carrinho.forEach(item => {
        adicionarItemAoCarrinho(item);
    });
    atualizarTotalCarrinho();
}

export function adicionarAoCarrinho(produto, quantidade, preco) {
    const item = { produto, quantidade, preco };
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    adicionarItemAoCarrinho(item);
    atualizarTotalCarrinho();
}

function adicionarItemAoCarrinho(item) {
    const template = document.getElementById('itemCarrinhoTemplate').content.cloneNode(true);
    template.querySelector('.produto').innerText = item.produto;
    template.querySelector('.quantidade').innerText = item.quantidade;
    template.querySelector('.preco').innerText = item.preco;
    template.querySelector('.btnExcluir').onclick = () => excluirItemCarrinho(item.produto);
    document.getElementById('conteudoCarrinho').appendChild(template);
}

function atualizarTotalCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const total = carrinho.reduce((acc, item) => acc + parseFloat(item.preco), 0);
    document.getElementById('totalCarrinho').innerText = `Total: R$ ${total.toFixed(2)}`;
}

export function excluirItemCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(item => item.produto !== produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    document.getElementById('conteudoCarrinho').innerHTML = '';
    carregarCarrinho();
}