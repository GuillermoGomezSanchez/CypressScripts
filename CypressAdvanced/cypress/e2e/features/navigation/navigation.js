const{
    Given,
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const { loginPage } = require("C:/Users/memo_/OneDrive/Documentos/CypressAdvanced/cypress/e2e/PageObjects/LoginPage")
//const { loginPage } = require('../../../PageObjects/LoginPage');

Given("I am on the home page",()=>{
    loginPage.validateSuccessLogin();
});

When("I click on the Account Activity Nav",()=>{
    cy.contains("Account Activity").click();
});

Then("I should see the Account Activity content",()=>{
    cy.contains("Show Transactions").should("be.visible");
});