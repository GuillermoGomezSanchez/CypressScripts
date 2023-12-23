//describe('Esperando Elementos',() => {
describe('Esperando Elementos',{browser: 'chrome'},() => { //run this file only with chrome
//describe('Esperando Elementos',{browser: '!chrome'},() => { //run this file with all browsers except chrome
	beforeEach(() => {
		cy.visit('https://www.platzi.com')
	})
	
it('Esperar por un tiempo definido', ()=>{
	cy.wait(5000) //5000 ms
})

it('Esperar por un elemento', ()=>{
	cy.get('.ButtonLogin-cta',{timeout:6000}) //timeout tiempo maximo para encontrar un elemento

	//timeout por defecto por default es de 4 segundos
})

it('Esperar por un elemento y hacer una asercion', ()=>{
	cy.get('.ButtonLogin-cta',{timeout:6000}).should('be.visible')	
	cy.get('.ButtonLogin-cta').should('be.visible',{timeout:6000})	
})

it('Esperar por un elemento y hacer una asercion', ()=>{
	cy.get('.ButtonLogin-cta').should('be.visible',{timeout:0}) //valida que el elemento aparezca inmediatamente	
	cy.get('.ButtonLogin-cta',{timeout:6000}).should('be.visible')	
	cy.get('.ButtonLogin-cta').should('be.visible',{timeout:6000})	
})

})