describe("Pruebas Mongo", function() {


    it('Get Data from collection', function () {
        cy.task('getListing').then(results => {
            cy.log(results)
            expect(results).to.have.length(50)
        })
    })

    it('Create de Mongo', function () {
        cy.task('createGrade',
           {"student_id":{"$numberDouble":"0.0"},
           "scores":[{"type":"exam","score":{"$numberDouble":"99.9999"}},
            {"type":"quiz","score":{"$numberDouble":"88.888888888888"}},
            {"type":"homework","score":{"$numberDouble":"77.77777777777777"}},
            {"type":"homework","score":{"$numberDouble":"66.6666666666666"}}],
           "class_id":{"$numberDouble":"339.0"}}).then(results => {
            cy.log(results)
            expect(results.acknowledged).to.equal(true)
            expect(results).to.haveOwnPropertyDescriptor('insertedId')
        })
    })

    it('Delete Companies', function () {
        cy.task('clearCompanies').then(results => {
            cy.log(results)
        })
    })


});