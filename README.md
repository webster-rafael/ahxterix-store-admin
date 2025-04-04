## Painel Administrativo - Ahxterix Store

Este repositório contém o backend do Painel Administrativo da loja online, desenvolvido com Next.js. O painel permite o gerenciamento completo da loja, incluindo acompanhamento de vendas, cadastro de produtos e clientes.

## Funcionalidades

- Dashboard: Exibe gráficos de vendas, receita total e número de clientes cadastrados.

- Cadastro de Categorias: Permite adicionar, editar e excluir categorias de produtos.

- Cadastro de Produtos: Gerenciamento completo de produtos, incluindo nome, preço, imagem e categoria.

- Gerenciamento de Pedidos: Lista de pedidos realizados pelos clientes, com status e detalhes da compra.

- Lista de Clientes: Visualização dos clientes cadastrados na plataforma.

## Tecnologias Utilizadas

- Next.js: Framework React para SSR e otimização de desempenho.

- Clerk: Sistema de autenticação seguro e fácil de usar.

- Tailwind CSS: Estilização responsiva e moderna.

- ShadCN: Componentes pré-estilizados para um design elegante.

- Prisma: ORM para interação eficiente com o banco de dados.

- MongoDB: Banco de dados NoSQL para armazenar informações dos produtos, pedidos e clientes.

- Zod: Validação de dados segura e tipada.

- Stripe: Integração de pagamentos.

- TypeScript: Tipagem estática para maior segurança e escalabilidade.

## Como Rodar o Projeto

1. Clone este repositório.

`git clone https://github.com/seu-usuario/seu-repositorio.git`

2. Instale as dependências.

`npm install`

3. Configure as variáveis de ambiente:
   Crie um arquivo .env.local e adicione as chaves necessárias (Clerk, MongoDB, Stripe, etc.).

4. Execute as migrações do Prisma:

`npx prisma migrate dev`

5. Inicie o servidor de desenvolvimento:

`npm run dev`

6. O painel estará disponível em http://localhost:3001.
