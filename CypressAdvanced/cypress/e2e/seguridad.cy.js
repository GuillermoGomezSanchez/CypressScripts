let text;

describe('Seguridad',function(){
    it('Navegar entre diferentes dominios',function(){
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.visit('https://todo-cypress-iota.vercel.app/');
        cy.get('#title').type('Titulo de prueba');
        //marca error al cambiar de dominios en un mismo

    })

    it('Navego a un dominio',function(){
        cy.visit('https://todo-cypress-iota.vercel.app/');
        cy.get('#title').type('Titulo de prueba');
        cy.get("h1").should('be.visible')
        cy.get("h1").invoke("text").as("titulo");  //NOT WORKING FOR SOME REASON
/*
        cy.get('h1').then($value => {
            const textValue = $value.text()
            cy.wrap(textValue).as('titulo')
        })*/

    })

    it('Navego de nuevo al mismo dominio',function(){
        
        cy.visit('https://todo-cypress-iota.vercel.app/');
        cy.log(this.titulo);
        cy.writeFile('./cypress/fixtures/titulo.json', {text:this.titulo})  

    })

    it('Navego a un dominio diferente',function(){
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.fixture('titulo.json').then((titulo)=>{
            cy.get('#user_login').type(titulo.text);
        })              
        
    })

    it('Navego en 2 dominios en el mismo test',function(){

        cy.visit('https://todo-cypress-iota.vercel.app/');
        cy.get('#title').type('Titulo de prueba');
        cy.get("h1").should('be.visible')
        cy.get("h1").invoke("text").then(texto=>{
            text = texto
            Cypress.env({
                textito:texto
            })
        }); 
/*
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.fixture('titulo.json').then((titulo)=>{
            cy.get('#user_login').type(titulo.text);
        })              
        */
        cy.origin('https://www.google.com/',{args:{text}},
        function({texto}){
            cy.visit('/');
            cy.log(texto); //no se actualiza a tiempo y falla
            cy.log(Cypress.env("textito"))
        })
    })


    it('Compartir informacion sin usar session 1',function(){
        cy.visit('https://todo-cypress-iota.vercel.app/');
        cy.get('#title').type('Titulo de prueba');
        cy.get("h1").should('be.visible')
        cy.get("h1").invoke("text").then(texto=>{
            cy.task("guardar",{text:texto})
        }); 
                  
        
    })

    it('Compartir informacion sin usar session 2',function(){
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.task('obtener','text').then(valor=>{
            cy.get('#user_login').type(valor);
        })
        
    })
})