# Lista de Compras

Este é um projeto simples de **Lista de Compras** que permite adicionar produtos ao carrinho e visualizar os itens adicionados. O projeto utiliza **HTML**, **CSS** e **JavaScript** para criar uma interface de usuário interativa e responsiva.

## Funcionalidades

- Adicionar produtos ao carrinho com **nome**, **quantidade**, **descrição** e **preço**.
- Visualizar os produtos adicionados no carrinho.
- **Persistência** dos dados do carrinho usando `localStorage`, permitindo que os itens permaneçam no carrinho mesmo após recarregar a página.
- **Remover produtos** do carrinho.
- **Atualizar a quantidade** de produtos no carrinho.

## Estrutura do Projeto

- **`index.html`**: O arquivo HTML principal que contém a estrutura da página.
- **`styles.css`**: O arquivo CSS que contém os estilos para a página.
- **`script.js`**: O arquivo JavaScript que contém a lógica para adicionar, remover e atualizar itens no carrinho e carregar os itens do `localStorage`.

## Como Usar

1. Clone o repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador web.
3. Preencha os campos do formulário para adicionar um produto ao carrinho.
4. Clique no botão **"Adicionar ao carrinho"** para adicionar o produto ao carrinho.
5. Os produtos adicionados aparecerão na seção **"Carrinho"**.
6. Para remover um produto, clique no botão **"Remover"** ao lado do item no carrinho.
7. Para atualizar a quantidade de um produto, ajuste o valor no campo de quantidade e clique em **"Atualizar"**.
8. Os itens do carrinho serão salvos no `localStorage` e permanecerão no carrinho mesmo após recarregar a página.

## Estrutura do Código

### HTML

O arquivo `index.html` contém a estrutura básica da página, incluindo o formulário para adicionar produtos e a seção para exibir o carrinho.

### CSS

O arquivo `styles.css` contém os estilos para a página, incluindo a formatação do formulário, do botão e dos itens do carrinho.

### JavaScript

O arquivo `script.js` contém a lógica para adicionar, remover e atualizar itens no carrinho e carregar os itens do `localStorage`. As principais funções são:

- **`adicionarAoCarrinho()`**: Adiciona um item ao carrinho e salva no `localStorage`.
- **`adicionarItemAoCarrinho(item)`**: Adiciona um item ao DOM na seção do carrinho.
- **`removerDoCarrinho(index)`**: Remove um item do carrinho e atualiza o `localStorage`.
- **`atualizarQuantidade(index, quantidade)`**: Atualiza a quantidade de um item no carrinho e no `localStorage`.
- **`carregarCarrinho()`**: Carrega os itens do `localStorage` e os adiciona ao DOM na seção do carrinho.

---

## Contribuição

Sinta-se à vontade para fazer um **fork** deste repositório e enviar **pull requests** com melhorias ou correções!

---