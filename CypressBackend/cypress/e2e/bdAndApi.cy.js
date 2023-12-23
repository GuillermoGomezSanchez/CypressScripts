describe("Uniendo bd and API", function() {
    it('Debemos eliminar el registro creado', function () {
        cy.task('getListing').then(results => {
            cy.log(results)
            expect(results).to.have.length(50)
        })
    })

});