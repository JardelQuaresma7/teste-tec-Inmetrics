import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial", () => {
  cy.visit('/');
});

When("eu busco por {string}", (produto) => {
  cy.get("#mobileSearch > input").type(produto + "{enter}", { delay: 100 });
});

Then("os resultados da busca devem conter {string}", (produto) => {
  cy.url().should('include', '/search/?viewAll=' + produto);
  cy.get("div.category-type-products li a.productName").each(($el) => {
    cy.wrap($el).should("contain", produto);
  });
});