describe('Probando errores', () => {
	it('Validar el status fallido y el mensaje de error',function (){
		cy.request({url: 'https://pokeapi.co/api/v2/4545',failOnStatusCode:false}).then(response => 
		{
			expect(response.status).to.be.equal(404)
			expect(response.body).to.be.equal('Not Found')
		})
	})

	it('Validar el status fallido y el mensaje de error de Rick and Morty',function (){
		cy.request({url: 'https://rickandmortyapi.com/api/location/ds',failOnStatusCode:false}).then(response => 
		{
			expect(response.status).to.be.equal(500)
			expect(response.body).to.have.property('error','Hey! you must provide an id')
		})
	})
})