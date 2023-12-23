describe('Primer Prueba', () => {
	it('Navegar a nuestra primera pagina',() => {
		cy.visit('https://www.youtube.com');
	}); 

	it('Navegar a nuestra segunda pagina',() => {
		cy.visit('https://www.google.com');
	}); 


	describe('Segundo Prueba', () => {
	it('Navegar a nuestra primera pagina de la segunda prueba',() => {
		cy.visit('https://www.youtube.com');
	}); 

	it('Navegar a nuestra segunda pagina de la segunda prueba',() => {
		cy.visit('https://www.google.com');
	}); 

	});
});