describe('Visual testing',function(){
    it('mi primer prueba de regresion',function(){
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.wait(3000);
        cy.matchImageSnapshot(); //la primera vez solo toma imagen y las demas las compara con el resto
    })

    it('segunda prueba a un solo elemento',function(){
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.wait(3000);
        cy.get('#login_form').matchImageSnapshot(); //la primera vez solo toma imagen y las demas las compara con el resto
    })
})