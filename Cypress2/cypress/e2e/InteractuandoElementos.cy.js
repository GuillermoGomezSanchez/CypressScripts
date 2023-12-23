Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
}); //removes the exceptions related to uncaught exceptions and just show a message instead
//of stopping the program flow 

describe('Interactuar con los elementos',() => {
	
it('Click', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('.buttonClass').click()

})

it('Double Click', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('.buttonClass').dblclick()

})

it('Right Click', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('.buttonClass').rightclick()

})

it('Forced Click', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('[name="button1"]').click({timeout:0, force:true}) //dispara el evento aunque boton este deshabilitado, lo 
	//cual no es lo normal
	//cy.get('[name="button1"]').click({timeout:0}) //que pasa cuando un boton no se encuentra habilitado y se intenta hacer click,
	//la pagina marca error

})

it('Click por posicion', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('.et_pb_row_0_tb_header').click('topRight') //clickea en la esquina superior derecha del elemento
	cy.get('.et_pb_row_0_tb_header').click('bottomLeft')
	cy.get('.et_pb_row_0_tb_header').click(5,60) //dar click a elementos por coordenadas
})

it('Interactuando con los dropdown (select)', ()=>{
	cy.visit('/simple-html-elements-for-automation/')
	cy.get('select').select('audi')
	cy.get('select').select('Audi').should('have.value','audi')
})

it('Interactuando con los dropdown (select) dinamico', ()=>{
	cy.visit('https://react-select.com/home')
	cy.get('.basic-single').type('Red{enter}') //despliega todo los elementos de la lista

//el codigo de abajo funcionaba antes pero ahora no
//	cy.get('#react-select-6-listbox').children().children().each(($el,index,$list) =>{
//
//  if($el.text()==='Red'){
//	$el.on('click')
//	$el.click()
//}
//
//} 

})

it('Interactuando con tablas', ()=>{
	cy.visit('https://www.w3schools.com/html/html_tables.asp')
	cy.get('#customers').find('th').each(($el) =>{
		cy.log($el.text())		
		})

	cy.get('#customers').find('th').first()
	.invoke('text').should('equal','Company')

	cy.get('#customers').find('tr').should('have.length',7)

    //el eq despues del find devuelve el elemento en la posicion deseada, en este caso 1 (como inicia de 0
    //vendria siendo la segunda posicion)
	cy.get('#customers').find('tr').eq(1).find('td').eq(1).invoke('text').should('equal','Maria Anders')

	cy.get('#customers').find('tr').eq(1).find('td').eq(1).then(($el) =>{
		const texto = $el.text()
		expect(texto).to.equal('Maria Anders')

	})

	})

it('Interactuando con date pickers', ()=>{
	cy.visit('https://material.angular.io/components/datepicker/overview')
	
	cy.get('datepicker-overview-example').find('input').eq(0).type('11/03/2022',{force:true})

	cy.get('datepicker-overview-example').find('svg').click({force:true})
	})

it('Interactuando con modales', ()=>{
	cy.visit('https://material.angular.io/components/dialog/overview')
	cy.get('dialog-overview-example').find('.mdc-button').click()
	cy.get('dialog-overview-example-dialog').find('.mdc-button__label').contains('Ok').click()

		})

it('Interactuando con alertas (ok se acepta automatico)', ()=>{
	cy.visit('https://demoqa.com/alerts')
	cy.get('#confirmButton').click()

})

it('Interactuando con alertas (ok no se acepta automatico) forma 1', ()=>{
	cy.visit('https://demoqa.com/alerts')
	const stub = cy.stub()
	cy.on('window:confirm',stub)

	cy.get('#confirmButton').click().then(() =>{
		console.log(stub.getCall(0))
		expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
		 //sirve para checar que el evento de window confirm se haya llamado
	})
	cy.contains('You selected Ok').should('exist')
	
})

it('Interactuando con alertas (ok no se acepta automatico) forma 2', ()=>{
	cy.visit('https://demoqa.com/alerts')
	cy.get('#confirmButton').click()
	cy.on('window:confirm',(confirm) =>{
		expect(confirm).to.equal('Do you confirm action?')
	})

	
	cy.contains('You selected Ok').should('exist')
	
})

it('Interactuando con alertas (se selecciona cancel)', ()=>{
	cy.visit('https://demoqa.com/alerts')
	cy.get('#confirmButton').click()
	cy.on('window:confirm',(confirm) =>{
		expect(confirm).to.equal('Do you confirm action?')
		return false
	})

	
	cy.contains('You selected Cancel').should('exist')
	
})

it('Interactuando con tooltip', ()=>{
	cy.visit('https://demoqa.com/tool-tips')
	cy.get('#toolTipButton').trigger('mouseover')
	cy.contains('You hovered over the Button').should('exist')
	cy.get('#toolTipButton').trigger('mouseout')
	cy.contains('You hovered over the Button').should('not.exist')

})

it.only('Drag and Drop', ()=>{
	cy.visit('https://demoqa.com/dragabble')
	cy.get('#dragBox').trigger('mousedown',{which:1,pageX:600,pageY:100}).trigger('mousemove',
		{which:1,pageX:600,pageY:600}).trigger('mouseup')
})




})

