//evita que se borren las cookies al terminar una prueba

/*
Cypress.Cookies.defaults({
    preserve:'nombre'
    });   PRESERVE COOKIES BETWEEN TESTS  PREVIOS V10 of CYPRESS*/


    describe('Local Storage', () => {

        
            beforeEach(()=>{
                cy.session('session to do',() =>{
                    cy.visit('https://todo-cypress-iota.vercel.app/')
                cy.get('#title').type('Titulo de prueba')
                cy.get('#description').type('Descripcion de prueba')
                cy.contains('Create').click()
        
                cy.visit('https://todo-cypress-iota.vercel.app/').then(()=>{
                    localStorage.setItem('react todo ids',JSON.stringify(['Titulo de prueba 123']))
                    localStorage.setItem('Titulo de prueba 123',JSON.stringify({
                        title:'Titulo de prueba',
                        id: 'Titulo de prueba',
                        complete:false,
                        description:'Descripcion de una prueba'
                    }))
                })
                })
            })
        

        

        it('Crear una tarea',() => {
            //debe visitarse la pagina ya que session solo se ejecuta una vez y se conserva durante todas las pruebas
            cy.visit('https://todo-cypress-iota.vercel.app/')
           
           cy.contains('Titulo de prueba')
           cy.reload()
           cy.contains('Titulo de prueba').then(() =>{
                expect(localStorage.getItem('Titulo de prueba')).to.exist
           })

           cy.contains('Remove').click().then(()=>{
                expect(localStorage.getItem('Titulo de prueba')).to.not.exist
           })

           cy.clearLocalStorage('Titulo de Prueba').should(ls =>{
             expect(ls.getItem('prop1')).to.be.null
           })
        }); 

        it('Valido que la tarea se creo correctamente',function() {
           //cypress borra el localstorage despues de cada it (test)
          
        }); 
  
    });