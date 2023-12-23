import { loginPage } from "./PageObjects/LoginPage"


describe('login con POM',function(){
    beforeEach('',()=>{
        loginPage.visit()
    })

    it('login erroneo',function(){
        loginPage.login('lalalala','lalalala');
        loginPage.validateErrorLogin();
    })

    it('login exitoso con variable de enviroment',function(){
        loginPage.login(Cypress.env('credentials').user,Cypress.env('credentials').password);
        loginPage.validateSuccessLogin();
    })

    it('login exitoso con variable de cypress.env.json',function(){
        loginPage.login(Cypress.env('credentials').user,Cypress.env('credentials').password);
        loginPage.validateSuccessLogin();
    })
})