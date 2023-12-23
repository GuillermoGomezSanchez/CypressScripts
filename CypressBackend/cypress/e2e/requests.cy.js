describe('Probando requests', () => {
	it('Deseo crear un empleado',function (){
		cy.request(
			{
				url: 'employees',method:'POST',
				body:{
      first_name: "Ruben",
      last_name: "Dario",
      email: "ruben@platzi.com"
    }
			}).then(response =>{
				expect(response.status).to.equal(201) //201 es para datos creados
				expect(response.body).to.have.property('id')

				const id =response.body.id
				cy.wrap(id).as('id')
			})
	})

it('Deseo validar que empleado se haya creado en base de datos',function (){
	cy.request('GET','employees').then(response =>{
		expect(response.body[response.body.length-1].first_name).to.equal('Ruben')
	})
})

it('Debe modificar a todo el empleado',function (){
	cy.request({method:'PUT',url:`employees/${this.id}`,body:{
		first_name: "NewRuben",
	    last_name: "NewDario",
		email: "newruben@platzi.com"
	}
	}).then(response =>{
		cy.log(response)
		expect(response.status).to.equal(200)
		expect(response.body).to.have.property('id')
	})
})

it('Debe modificar al empleado con un nuevo correo',function (){
	cy.request({method:'PATCH',url:`employees/${this.id}`,body:{
		email: "newruben1@platzi.com"
	}
	}).then(response =>{
		cy.log(response)
		expect(response.status).to.equal(200)
		expect(response.body).to.have.property('id')
	})
})

it('Deseo borrar el registro',function (){
	cy.request({method:'DELETE',url:`employees/${this.id}`
	}).then(response =>{
		expect(response.status).to.equal(200)
	})

})

})