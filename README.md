# Frontend Funcionários - Serpro - README

## Descrição

Este é um projeto de demonstração de um CRUD (Create, Read, Update, Delete) para gerenciamento de funcionários, desenvolvido em Angular. O projeto também inclui uma API em .NET e utiliza SQL Server para armazenamento de dados.

## Tecnologias Utilizadas

- **Angular**: Framework para desenvolvimento de aplicações web.
- **TypeScript**: Linguagem de programação que é um superconjunto do JavaScript.
- **Angular Material**: Biblioteca de componentes UI.
- **.NET Core**: Framework para desenvolvimento da API.
- **SQL Server**: Sistema de gerenciamento de banco de dados.
- **RxJS**: Biblioteca para programação reativa.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- Node.js (recomendado a versão LTS)
- Angular CLI
- .NET SDK
- SQL Server
- Um gerenciador de banco de dados, como SQL Server Management Studio (SSMS)

## Clonando o Repositório

Para clonar o repositório do projeto, siga os passos abaixo:

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/front-end-employees-serpro.git
   ```

2. **Navegue até o diretório do projeto**

   ```bash
   cd front-end-employees-serpro
   ```

## Configurando a API .NET

Para configurar a API .NET, siga as instruções disponíveis no repositório [API Employees Serpro](https://github.com/miguelamaral254/api-employees-serpro/).

## Configurando o Frontend Angular

1. **Navegue até o diretório do frontend**

   ```bash
   cd frontend
   ```

2. **Instale as dependências do projeto Angular**

   ```bash
   npm install
   ```

3. **Atualize o arquivo de ambiente `environment.development.ts` com a URL da API**

   ```typescript
   export const environment = {
     production: false,
     baseApiUrl: 'http://localhost:5000/api' // Atualize para a URL correta da sua API
   };
   ```

4. **Execute o projeto Angular**

   ```bash
   ng serve
   ```

## Utilização

1. **Acesse a aplicação**

   Abra seu navegador e vá para `http://localhost:4200`.

2. **Funcionalidades**

   - **Registrar Novo Funcionário**: Navegue para `/register` e preencha o formulário.
   - **Visualizar Funcionários**: A página inicial (`/`) lista todos os funcionários cadastrados.
   - **Editar Funcionário**: Clique no botão de editar ao lado de um funcionário na tabela.
   - **Detalhes do Funcionário**: Clique no botão de detalhes ao lado de um funcionário na tabela.
   - **Deletar Funcionário**: Clique no botão de deletar ao lado de um funcionário na tabela e confirme a ação.

## Testes

### Testes do Frontend

Os testes do frontend utilizam Jasmine e Karma. Para executar os testes, use o comando:

```bash
ng test
```

### Testes da API

Para informações sobre como testar a API, consulte o repositório [API Employees Serpro](https://github.com/miguelamaral254/api-employees-serpro/).
