
const dispositivos = [{viewport:'macbook-15',type:'desktop'},
{viewport:'ipad-2',type:'mobile'},
{viewport:[1280,720],type:'desktop'},
{viewport:[375,667],type:'mobile'}]

describe('Dispositivos moviles',function(){
    it('Usando el viewport',function(){
        cy.viewport(1280,720);
        cy.visit('https://theuselessweb.site/nooooooooooooooo/');
        cy.contains('PRESS IN DIRE SITUATIONS').should('exist')
    })

    it('Usando el viewport movil',function(){
        cy.viewport(375,667);
        cy.visit('https://theuselessweb.site/nooooooooooooooo/');
        cy.contains('PRESS IN DIRE SITUATIONS').should('exist')
    })

    it('Usando el viewport desktop preset',function(){
        cy.viewport('macbook-15');
        cy.visit('https://theuselessweb.site/nooooooooooooooo/');
        cy.contains('PRESS IN DIRE SITUATIONS').should('exist')
    })

    it('Usando el viewport desktop preset',function(){
        cy.viewport('iphone-6+');
        cy.visit('https://theuselessweb.site/nooooooooooooooo/');
        cy.contains('PRESS IN DIRE SITUATIONS').should('exist')
    })

    dispositivos.forEach(device=>{
        it(`Pruebas con el viewport ${device.viewport}`,function(){

            if (Cypress._.isArray(device.viewport)){
                cy.viewport(device.viewport[0],device.viewport[1]);
            }
            else{
                cy.viewport(device.viewport);
            }

            
            cy.visit('https://theuselessweb.site/nooooooooooooooo/');

            if(device.type==='mobile'){
                cy.contains('PRESS IN DIRE SITUATIONS').should('exist')
            }

            
            if(device.type==='desktop'){
                cy.contains('PRESS IN DIRE SITUATIONS').should('exist')
            }
            
        })
    })
})
