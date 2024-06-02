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


## Características Principais

1. **Componentes:**
   - `DetailsComponent`: Mostra os detalhes de um funcionário específico.
   - `HomeComponent`: Exibe a lista de funcionários e permite buscar funcionários pelo nome.
   - `RegisterComponent`: Permite registrar um novo funcionário.
   - `EditComponent`: Permite editar as informações de um funcionário existente.
   - `DeleteComponent`: Confirma a exclusão de um funcionário.

2. **Data Binding:**
   - O data binding é uma técnica fundamental utilizada para conectar os dados do aplicativo à interface do usuário.
   - **Exemplo 1: Interpolação de Propriedades:**
     ```html
     <input matInput type="text" value="{{ employee.name }}" disabled />
     ```
     Aqui, `{{ employee.name }}` insere dinamicamente o valor da propriedade `name` do objeto `employee` no template.
   - **Exemplo 2: Two-Way Binding:**
     ```html
     <app-employee-form
       [btnAction]="btnAction"
       [btnTitle]="btnTitle"
       (onSubmit)="createEmployee($event)"
     ></app-employee-form>
     ```
     Este exemplo utiliza two-way binding com `ngModel` para sincronizar os dados entre os campos do formulário e o modelo de dados.

3. **Rotas:**
   - O roteamento é configurado no `AppRoutingModule`, fornecendo rotas para as diferentes partes do aplicativo.
   - Rotas:
     - `/register`: Página para registrar um novo funcionário.
     - `/`: Página inicial que lista todos os funcionários cadastrados.
     - `/edit/:id`: Página para editar as informações de um funcionário existente.
     - `/detail/:id`: Página para visualizar os detalhes de um funcionário específico.
--------------------------------------------------------------------------------------------------------------------------------------------------
Para informações sobre como testar a API, consulte o repositório [API Employees Serpro](https://github.com/miguelamaral254/api-employees-serpro/).
