import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página do produto com ID {string}", (produtoId) => {
    cy.visit('/');
    cy.get(`#laptopsImg`).click();
    cy.get(`img#${produtoId}`).click();
    cy.url().should('include', `/product/${produtoId}`);
  });

When("eu clicar no botão {string}", (botao) => {
  cy.get("button[name='save_to_cart']").click();
});

When("clico no icone de carrinho", () => {
  cy.get("#shoppingCartLink").click();
});

When("eu vou para a tela do carrinho", () => {
  cy.url().should('include', 'shoppingCart');
  cy.wait(6000);
});

Then("o produto adicionado deve ser exibidos corretamente", () => {
    cy.get('footer.ng-scope > :nth-child(1) > label').click();
    cy.get('.productName')
      .should('be.visible')
      .and('contain', 'HP CHROMEBOOK 14 G1(ES)');
  
    cy.get('.price')
      .should('be.visible')
      .and('contain', '$1,261.99');
  });