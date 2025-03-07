import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou navegando na página inicial", () => {
  cy.visit('/');
});

When("eu clico na categoria {string}", (categoria) => {
  cy.get(`#laptopsImg`).click();
});

When("eu seleciono o produto com ID {string}", (produtoId) => {

  cy.get(`img#${produtoId}`).click();
  
  cy.url().should('include', 'product');
});

When("eu clico no botão {string}", (botao) => {
  cy.get("button[name='save_to_cart']").click();
  cy.wait(1000);
});

When("clicar no carrinho", () => {
  cy.get("#shoppingCartLink").click();
  
  cy.url().should('include', 'shoppingCart');
});

Then("o produto é adicionado ao carrinho", () => {
  cy.get('#shoppingCartLink').should('contain', '1');
  
  cy.contains('$1,261.99').should('be.visible');
  
  cy.contains('HP CHROMEBOOK 14 G1(ES)').should('be.visible');
});