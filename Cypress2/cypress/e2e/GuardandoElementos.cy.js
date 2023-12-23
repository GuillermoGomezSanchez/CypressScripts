describe('Guardando elementos',() => {
	
it('Evitar repeticion', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	const inpt = cy.get('#idExample')
	inpt.parent()
	inpt.parents()
	inpt.parents().find('label')

	//debugger //solo funciona si tengo la consola abierta

	//console.log('Soy la longitud ',inpt.parents().find('label').length)
	cy.task('mylog',' Mensaje')
	cy.pause()
	cy.get('#idExample').then(console.log)
	cy.get('#idExample').debug() //me devuelve el elemento regresado por el dom y deja verlo en consola
})

it('Evitar repeticion y promesa', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	const inpt = cy.get('#idExample').then((input) => {
		const inputs = input.find(input)
		const divs = input.find('div')
		const labels = input.find('label')
		expect(inputs.length).to.eq(0)  //must be equal the length to the number written for the test to pass

		//wrap is used to convert a const into a cypress element
		cy.wrap(inputs).should('have.length',0)


	})

	//inpt.parent()
	//inpt.parents()
	//inpt.parents().find('label')


})

})