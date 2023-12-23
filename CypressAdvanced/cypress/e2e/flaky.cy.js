describe('flaky tests', () => {

    it('single query command',() => {
        //primero obtiene elemento y luego valida el texto
        cy.visit('https://theuselessweb.site/nooooooooooooooo/');
        cy.get('#maincontent > h3').should('contain','PRESS IN DIRE SITUATIONS')

        //este compara todos los elementos que cumplan con la descripcion al mismo tiempo que checa el texto, por lo que es 
        //mas dificil que falle
        cy.contains('#maincontent > h3','PRESS IN DIRE SITUATIONS')
    }); 

    it('alternar comando con aserciones',() => {
        //primero obtiene elemento y luego valida el texto
        cy.visit('https://theuselessweb.site/nooooooooooooooo/');
        cy.get('#no-button').click() //si esta disabled falla

        //se reintentara hasta que la asercion pase
        cy.get('#no-button').should('not.to.be.disabled').click()

        //si es un comando muy largo se puede combinar los gets con validaciones para que no tarde tanto
        //el should hace que chequemos sea el correcto antes de checar el padre
        cy.get('#maincontent > h3').should('contain','PRESS IN DIRE SITUATIONS').parent()
        .should('have.id','maincontent')
    }); 

});