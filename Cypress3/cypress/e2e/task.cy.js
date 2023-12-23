describe('Aserciones',() => {
it('Evitar repeticion', ()=>{
	cy.visit('https://www.google.com')

	//debugger //solo funciona si tengo la consola abierta

	//console.log('Soy la longitud ',inpt.parents().find('label').length)
	cy.task('log','Mensaje')
})
})