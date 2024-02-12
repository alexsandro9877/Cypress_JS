/*describe('Api verificar', () => {

    it('Dados da api', () => {
        cy.request({
            method: 'POST',
            url: 'https://alurapic-api.onrender.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equals(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equals(4)
        })

    });

})*/

it('Test description', () => {

    const tempoEsperado = Math.random() * 50;

    cy.request({
        method: 'GET',
        url: 'https://alurapic-api.onrender.com/carowl/photos'
    })
        .then((res) => {
            expect(res.status).to.be.equals(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equals('porquinho')
            expect(res.duration).to.be.lte(tempoEsperado); // fake teste
        });
});

