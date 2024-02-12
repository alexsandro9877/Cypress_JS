describe('Pagina de cadastro', () => {
  it('Preecher os campos do formulario corretamente', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    cy.contains('a','Register now').click();
    cy.get('[formcontrolname="email"]').type('catarina@gmail.com.br')
    cy.get('[data-test="fullName"]').type("Catarina Pessoa")
    cy.get('[data-test="registerUserName"]').type("catarinap155")
    cy.get('[data-test="registerPassword"]').type("catarina123")

    /// fazer a inclusao dos data-teste: referencia para o qa teste automtizado...
    ////(elemento , nome) //
    cy.contains('button','Register').click(); // procura um botao do tipo register com esse nome de redister
  })
})