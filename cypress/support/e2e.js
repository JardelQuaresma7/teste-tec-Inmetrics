import './commands';
import { defineStep } from 'cypress-cucumber-preprocessor/steps';
import 'cypress-file-upload';

defineStep('given some step', () => {
  // Definição do step
  cy.visit("https://advantageonlineshopping.com/#/");
});