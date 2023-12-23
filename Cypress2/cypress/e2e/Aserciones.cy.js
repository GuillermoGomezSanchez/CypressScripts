describe('Aserciones',() => {
	
it('Incluye direccion (Asercion 1)', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.url().should('include','ultimateqa.com') //espera que la direccion tenga ultimateqa.com
	//cy.url().should('include','ultimate333qa.com') //debe salir en rojo indicando un fallo
	//cy.get('#idExample').should('be.visible').should('have.attr','placeholder','Click this button using "ID"')
	//cy.get('#idExample').should('be.visible').and('have.attr','placeholder','Click this button using "ID"')
	cy.get('#idExample').should('be.visible').contains('Click this button using "ID"')
})

it('Asercion 2', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.url().should('include','ultimateqa.com') //espera que la direccion tenga ultimateqa.com
	//cy.url().should('include','ultimate333qa.com') //debe salir en rojo indicando un fallo
	//cy.get('#idExample').should('be.visible').should('have.attr','placeholder','Click this button using "ID"')
	cy.get('#et_pb_contact_name_0').then((elemento) => {
		expect(elemento).to.be.visible
		expect(elemento).to.have.attr('placeholder','Name')
	})
})

it('Asercion 3', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.url().should('include','ultimateqa.com') //espera que la direccion tenga ultimateqa.com
	//cy.url().should('include','ultimate333qa.com') //debe salir en rojo indicando un fallo
	//cy.get('#idExample').should('be.visible').should('have.attr','placeholder','Click this button using "ID"')
	cy.get('#et_pb_contact_name_0').then((elemento) => {
		//expect(elemento).to.be.visible
		assert.equal(elemento.attr('placeholder'),'Name')
	})
})

})