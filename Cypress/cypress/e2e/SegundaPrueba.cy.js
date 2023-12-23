describe('Primer Prueba', () => {
	it('Navegar a nuestra primera pagina',() => {
		cy.visit('https://www.youtube.com');
	}); 

	it('Recargar Pagina',() => {
		cy.reload();
	}); 

	it('Recargar Pagina Sin Cache',() => {
		//reload true is used to reload a page without cache
		cy.visit('https://www.google.com');
		cy.reload(true);
	});

	it('Regresar a pagina de home de google y luego volver a la pagina anterior',() => {
		
		cy.visit('https://www.google.com');
		cy.visit('https://www.google.com/search?q=platzi');
		cy.go('back'); //-1,-2,-3,.. all negative integers
		cy.go('forward'); //1,2,3,.. all positive integers
	}); 
});