describe('Inputs',() => {

	let texto
	
it('Input type text', ()=>{
	cy.visit('/filling-out-forms/')
	cy.get('#et_pb_contact_name_1').type('Javier')
	cy.get('#et_pb_contact_message_1').type('Mensaje de Javier')
	cy.get('#et_pb_contact_message_1').type('{selectAll}{backspace}') //primer comando selecciona todo el texto y el 
	//segundo lo borra
	|cy.get('#et_pb_contact_message_1').type('Nuevo Mensaje de persona')
})

it('Radio Button', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('input[type="radio"][name="gender"]')
	cy.get('input[type="radio"][name="gender"]').check("female")
	cy.get('[name="gender"]').check("other")
})

it('Extrayendo informacion', ()=>{
	cy.visit('/filling-out-forms/')
	cy.get('#et_pb_contact_message_1').as('nombre')
	cy.get('@nombre').type('Mensaje inyectado')

	cy.get('@nombre').then(($nombre) =>{
		texto = $nombre.val() 
		expect($nombre.val()).to.equal('Mensaje inyectado')
		expect(texto).to.equal('Mensaje inyectado')
	})
	
	})

it('Compartir informacion', function(){  //se necesita function en caso que se comparta informacion
	cy.visit('/filling-out-forms/')
	cy.get('#et_pb_contact_message_1').as('nombre')
	cy.get('@nombre').type('Mensaje inyectado')

	cy.get('@nombre').then(($nombre) =>{
		texto = $nombre.val() 
		expect($nombre.val()).to.equal('Mensaje inyectado')
		expect(texto).to.equal('Mensaje inyectado')
	})
	
	cy.get('@nombre').invoke('val').should('equal','Mensaje inyectado')
	cy.get('@nombre').invoke('val').as('nombreGlobal')
})

it('Compartir informacion 2', function(){
	cy.visit('/filling-out-forms/')
	cy.get('#et_pb_contact_message_1').as('nombre')
	cy.get('@nombre').type('Mensaje inyectado')

	cy.get('@nombre').then(($nombre) =>{
		texto = $nombre.val() 
		expect($nombre.val()).to.equal('Mensaje inyectado')
		expect(texto).to.equal('Mensaje inyectado')
	})
	cy.get('@nombre').type(this.nombreGlobal)
})

})