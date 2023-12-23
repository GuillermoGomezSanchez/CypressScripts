    describe('Xpaths', () => {

    
        it('Obtenerlo con un css selector',() => {
            cy.visit('https://theuselessweb.site/nooooooooooooooo/');
            cy.get('#maincontent > h3')
        }); 
    
        it('Obtenerlo con un xpath',() => {
            cy.visit('https://theuselessweb.site/nooooooooooooooo/');
            cy.xpath('//*[@id="maincontent"]/h3').should('contain','PRESS IN DIRE SITUATIONS')
        }); 


    });