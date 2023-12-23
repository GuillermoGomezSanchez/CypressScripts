import { loginPage } from "./PageObjects/LoginPage"


describe('login con POM',function(){
    beforeEach('',()=>{
        loginPage.visit()
    })

    it('login erroneo',function(){
        loginPage.login('lalalala','lalalala');
        loginPage.validateErrorLogin();
    })

    it('login exitoso',function(){
        loginPage.login('username','password');
        loginPage.validateSuccessLogin();
    })

    it('login erroneo con configuracion',function(){
        loginPage.login('lalalala','lalalala');
        loginPage.validateErrorLogin();

        
    })

})

describe('login erroneo con configuracion',{env:{
    usuarioErroneo:"erruser1",
    passwordErroneo:'errpass1'
}},function(){
    beforeEach('',()=>{
        loginPage.visit()
    })

    it('login erroneo con configuracion',function(){
        loginPage.login(Cypress.env("usuarioErroneo"),Cypress.env("passwordErroneo"));
        loginPage.validateErrorLogin();
        console.log(Cypress.env())
        
    })
})