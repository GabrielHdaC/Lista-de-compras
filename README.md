Lista de Compras
Este é um projeto simples de uma lista de compras que permite adicionar produtos ao carrinho e visualizar os itens adicionados. O projeto utiliza HTML, CSS e JavaScript para criar uma interface de usuário interativa e responsiva.

Funcionalidades
Adicionar produtos ao carrinho com nome, quantidade, descrição e preço.
Visualizar os produtos adicionados no carrinho.
Persistência dos dados do carrinho usando localStorage, permitindo que os itens permaneçam no carrinho mesmo após recarregar a página.
Estrutura do Projeto
index.html: O arquivo HTML principal que contém a estrutura da página.
styles.css: O arquivo CSS que contém os estilos para a página.
script.js: O arquivo JavaScript que contém a lógica para adicionar itens ao carrinho e carregar os itens do localStorage.
Como Usar
Clone o repositório para o seu ambiente local.
Abra o arquivo index.html em um navegador web.
Preencha os campos do formulário para adicionar um produto ao carrinho.
Clique no botão "Adicionar ao carrinho" para adicionar o produto ao carrinho.
Os produtos adicionados aparecerão na seção "Carrinho".
Os itens do carrinho serão salvos no localStorage e permanecerão no carrinho mesmo após recarregar a página.
Estrutura do Código
HTML
O arquivo index.html contém a estrutura básica da página, incluindo o formulário para adicionar produtos e a seção para exibir o carrinho.

CSS
O arquivo styles.css contém os estilos para a página, incluindo a formatação do formulário, do botão e dos itens do carrinho.

JavaScript
O arquivo script.js contém a lógica para adicionar itens ao carrinho e carregar os itens do localStorage. As principais funções são:

adicionarAoCarrinho(): Adiciona um item ao carrinho e salva no localStorage.
adicionarItemAoCarrinho(item): Adiciona um item ao DOM na seção do carrinho.
carregarCarrinho(): Carrega os itens do localStorage e os adiciona ao DOM na seção do carrinho.
