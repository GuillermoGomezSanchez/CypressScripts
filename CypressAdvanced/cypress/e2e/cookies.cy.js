//evita que se borren las cookies al terminar una prueba

/*
Cypress.Cookies.defaults({
    preserve:'nombre'
    });   PRESERVE COOKIES BETWEEN TESTS  PREVIOS V10 of CYPRESS*/


describe('Cookies', () => {
    let lengthCookies = 0

    beforeEach(()=>{
        cy.clearCookies()
        cy.setCookie('nombre','Javier')
    })

    after(()=>{
        cy.clearCookies()
    })

    /*let session = cy.session('user', () => {
        cy.setCookie('nombre','Javier')
      })*/

	it('Obtener cookies',() => {
		cy.visit('https://theuselessweb.site/nooooooooooooooo/');
        //cy.getCookies().should('be.empty') in case there are no cookies
        cy.getCookies().then(elm => {
            console.log(elm);
            console.log(elm.length);
            lengthCookies = elm.length;
            return true;})
        //console.log(lengthCookies)
	}); 

    it('Agregar una cookie',() => {
		cy.visit('https://theuselessweb.site/nooooooooooooooo/');
        cy.setCookie('nombre1','Javier1')
        console.log(lengthCookies)
        cy.getCookies().should('have.length',lengthCookies+1)

        cy.getCookies().then(elm => {
            console.log(elm);
            return true;})
        //console.log(lengthCookies)
	
        //cy.getCookies().should('be.empty') in case there are no cookies
	}); 

    it('Obtener una cookie en especifico',() => {
        //cypress limpia las cookies y local storage entre cada prueba
		cy.visit('https://theuselessweb.site/nooooooooooooooo/');
        cy.getCookie('nombre').should('have.a.property','value','Javier')
        //cy.getCookies().should('be.empty') in case there are no cookies
	}); 
});