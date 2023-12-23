const { loginPage } = require("C:/Users/memo_/OneDrive/Documentos/CypressAdvanced/cypress/e2e/PageObjects/LoginPage")
//require("../../../PageObjects/LoginPage")

const{
    Given,
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');

Given("I am on the login page",()=>{
    loginPage.visit();
    loginPage.validateLoginPage();
});

When(/^I fill in my email and password with (.*) and (.*)$/,function(username,password){
    loginPage.login(username,password);
});

Then("I should validate that I am logged in",()=>{
    loginPage.validateSuccessLogin();
});

Then("I should validate I am not logged in",()=>{
    loginPage.validateErrorLogin();
});

