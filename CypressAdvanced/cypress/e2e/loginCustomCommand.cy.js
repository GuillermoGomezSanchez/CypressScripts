describe('Login con Custom Commands',function(){

    it('login erroneo',function(){
        cy.login('lalalala','lalalala');
        //cy.validateErrorLogin();
    })

    it('login exitoso',function(){
        cy.login('username','password');
        //loginPage.validateSuccessLogin();
    })

})