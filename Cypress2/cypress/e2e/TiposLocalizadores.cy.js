describe('Tipos de localizadores',() => {
	
it('Obtenerlo por medio de un tag', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('input')

})

it('Obtenerlo por medio de un atributo', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('[placeholder = "Name"]')

})

it('Obtenerlo por medio de un atributo y un tag', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('input[placeholder = "Name"]')

})

it('Obtenerlo por medio de un id', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('#et_pb_contact_email_0')

})

it('Obtenerlo por medio de una clase', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('.et_pb_section')
	//multiples clases tienen que estar separadas por puntos
	//cy.get('.et_pb_section.et_pb')
})

it('Usando contains', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.contains('Advanced Controls')
	//se manda primero la clase y luego el texto
	cy.contains('.et_pb_module_header','Click here to login')
})

it('Usando parent', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	//se manda primero la clase y luego el texto
	cy.contains('.et_pb_module_header','Click here to login').parent()
	cy.contains('.et_pb_module_header','Click here to login').parents()
	cy.contains('.et_pb_module_header','Click here to login').parents().find('label')
	cy.get('form').find('label') //find debe de estar concatenado a un elemento del dom
})



})
