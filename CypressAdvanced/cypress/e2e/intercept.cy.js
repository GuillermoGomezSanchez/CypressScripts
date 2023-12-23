describe('Interceptando network requests', () => {
    it('Repaso de request',() => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then(response=>{
            expect(response.body).to.have.property('name','ditto')
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })

        
    }); 


    it('Prueba de intercept simple',() => {
        //intercepta el proceso al entrar a la pagina
        cy.intercept('GET','https://pokeapi.co/api/v2/move/13').as('bulbasaur')
        cy.visit('https://pokestats.gg/pokemon/bulbasaur')
        cy.wait('@bulbasaur',{timeout:20000}).then(interception =>{
            cy.log(interception)
            expect(interception.response.statusCode).to.eq(200)
            expect(interception.response.body).to.have.property('accuracy',100)
        })
        
        //otra manera de hacerlo (hacerlo solo si no hay un wait del proceso declarado anteriormente)
        //cy.wait('@bulbasaur').its('response.statusCode').should('eq',200)
    }); 
});