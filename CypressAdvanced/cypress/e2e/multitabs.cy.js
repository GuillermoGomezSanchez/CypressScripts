describe('Navegando entre diferentes tabs',function(){

    it('visitar links que tengan el target _blank',function(){
        cy.visit('http://webdriveruniversity.com/index.html');
        cy.get("#login-portal").click()
        //cy.get("#simpleLink").click()
    })

    it('visitar links que tengan el target _blank dentro de la misma ventana',function(){
        cy.visit('http://webdriveruniversity.com/index.html');
        cy.get("#login-portal").invoke("removeAttr","target").click()
        //cy.get("#simpleLink").invoke("removeAttr","target").click()
    })
})