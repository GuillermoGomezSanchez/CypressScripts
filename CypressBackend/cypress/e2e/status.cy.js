describe('Probando statuses', () => {
	it('Debe validad el status code exitoso',function (){
		cy.request('employees').its('status').should('eq',200)
	})

	it('Debe validad el status code fallido',function (){
		//se debe poner el fail en false, si no cypress manda error
		cy.request({url:'employees/4',failOnStatusCode:false}).its('status').should('eq',404)
	})
})