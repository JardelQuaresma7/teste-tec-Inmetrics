# Projeto de Automação de Testes - Advantage Online Shopping

Este projeto contém testes automatizados para o site [Advantage Online Shopping](https://advantageonlineshopping.com/#/), utilizando Cypress com Cucumber para testes E2E e também inclui testes de API.

## 📋 Estrutura do Projeto

```
automacao-teste-tec/
├── cypress/
│   ├── e2e/
│   │   └── features/           # Arquivos .feature com cenários BDD
│   ├── fixtures/               # Dados de teste
│   ├── integration/            
│   │   └── api/                # Testes de API
│   └── support/
│       └── step_definitions/   # Implementação dos passos do Cucumber
├── node_modules/
├── .gitignore
├── cypress.config.js           # Configuração do Cypress
├── package-lock.json
└── package.json
```

## 🚀 Funcionalidades Testadas

Este projeto automatiza os seguintes cenários:

### Testes E2E (Interface):

1. **Busca de Produto**
   - Verifica se a funcionalidade de busca retorna resultados corretos.

2. **Adicionar Produto ao Carrinho**
   - Verifica o processo de adicionar um laptop ao carrinho.

3. **Validação do Carrinho**
   - Valida se o produto é exibido corretamente na tela do carrinho.

### Testes de API:

1. **Busca de Produtos via API**
   - Testa o endpoint de busca de produtos.

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (v12 ou superior)
- NPM (geralmente vem com o Node.js)

## 🔧 Instalação

1. Clone este repositório (ou faça o download):
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Navegue até a pasta do projeto:
```bash
cd automacao-teste-tec
```

3. Instale as dependências:
```bash
npm install
```

## ▶️ Executando os Testes

### Modo Visual (Interface Gráfica):

```bash
npx cypress open
```

Isso abrirá a interface do Cypress onde você pode selecionar os testes a serem executados.

### Modo Headless (Linha de Comando):

Para executar todos os testes E2E:
```bash
npx cypress run --spec "cypress/e2e/features/**/*.feature"
```

Para executar todos os testes de API:
```bash
npx cypress run --spec "cypress/integration/api/**/*.js"
```

Para executar um teste específico:
```bash
npx cypress run --spec "cypress/e2e/features/busca_produto.feature"
```

## 📝 Descrição dos Cenários de Teste

### 1. Busca de Produto
```gherkin
Feature: Busca de Produto
  Scenario: Buscar um produto no site
    Given que estou na página inicial
    When eu busco por "Laptop"
    Then os resultados da busca devem conter "Laptop"
```

### 2. Adicionar Produto ao Carrinho
```gherkin
Feature: Adicionar Produto ao Carrinho
  Scenario: Adicionar um produto ao carrinho
    Given que estou navegando na página inicial
    When eu clico na categoria "Laptops"
    And eu seleciono o produto com ID "10" 
    And eu clico no botão "ADD TO CART"
    Then o produto é adicionado ao carrinho
```

### 3. Validação do Carrinho
```gherkin
Feature: Validação do Carrinho
  Scenario: Validar produto no carrinho na tela de pagamento
    Given que estou na página do produto com ID "10" 
    When eu clicar no botão "ADD TO CART"
    And clico no icone de carrinho
    And eu vou para a tela do carrinho
    Then o produto adicionado deve ser exibidos corretamente
```

## 🔄 API Referência

Este projeto faz uso da API do Advantage Online Shopping:
- Documentação Swagger: https://www.advantageonlineshopping.com/api/docs/

### Endpoints Testados

#### 1. Busca de Produtos

- **Endpoint**: `/api/v1/products/search`
- **Método**: GET
- **Parâmetros**: `name` (termo de busca)
- **Teste implementado**:
  ```javascript
  describe('Teste de API - Busca de Produtos', () => {
    const termoBusca = 'laptop';

    it('Deve retornar status 200 ao buscar produtos com o termo específico', () => {
      cy.request({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search',
        qs: { name: termoBusca }
      }).then(res => {
        expect(res.status).to.eq(200);
      });
    });
  });
  ```

A documentação Swagger foi fundamental para entender a estrutura da API e implementar os testes corretamente. É recomendado consultar a documentação ao adicionar novos testes de API ao projeto.

## 📦 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de teste E2E
- [Cucumber](https://cucumber.io/) - Ferramenta para BDD
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript

## 📘 Recursos Adicionais

- [Cucumber Preprocessor para Cypress](https://github.com/badeball/cypress-cucumber-preprocessor)
- [esbuild Bundler para Cypress](https://github.com/bahmutov/cypress-esbuild-preprocessor)

## 🛠️ Ambiente de Desenvolvimento

### Visual Studio Code (VSCode)

Este projeto foi desenvolvido utilizando o Visual Studio Code como IDE principal. O VSCode oferece excelente suporte para projetos Cypress e Cucumber através de várias extensões úteis.

#### Extensões Recomendadas para VSCode:

- **Cypress Helper**: Ajuda com autocomplete e navegação em arquivos Cypress
- **Cucumber (Gherkin) Full Support**: Fornece syntax highlighting e autocomplete para arquivos .feature
- **ESLint**: Para linting de código JavaScript
- **Prettier**: Para formatação consistente de código
- **Code Spell Checker**: Para verificação ortográfica em comentários e strings

#### Configuração do VSCode:

Adicione estas configurações ao seu `settings.json` para melhorar a experiência de desenvolvimento:

```json
{
  "editor.formatOnSave": true,
  "cucumber.features": {
    "path": "cypress/e2e/features/*.feature"
  },
  "cucumber.glue": {
    "path": "cypress/support/step_definitions/*.js"
  },
  "files.associations": {
    "*.feature": "cucumber"
  }
}
```

#### Dicas para o VSCode:

- Use o terminal integrado para executar comandos Cypress
- Utilize a funcionalidade de split view para visualizar os arquivos .feature e suas implementações lado a lado
- Configure snippets personalizados para criar rapidamente novos cenários ou steps

## 📚 NOTAS

Este projeto foi configurado seguindo boas práticas de automação com Cypress e Cucumber. 

Optei por uma abordagem mais direta e objetiva na implementação, sem utilizar o padrão Page Object Model (POM), já que se trata de um teste técnico com escopo limitado. Essa decisão tornou o desenvolvimento mais rápido e o código mais simples de entender.

Para projetos maiores e em ambiente corporativo, tenho experiência na aplicação de:

- Page Objects para melhor organização e manutenção do código
- Integração com ferramentas de CI/CD para execução automatizada de testes

Estou sempre aberto a discutir as decisões de arquitetura e como adaptar a estrutura para diferentes necessidades de projeto.
