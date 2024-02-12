describe('Pagina de cadastro', () => {
  it('Preecher os campos do formulario incorretamente', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    cy.contains('a','Register now').click();
    cy.contains('button','Register').click(); // procura um botao do tipo register com esse nome de redister
    cy.contains('button','Register').click(); // procura um botao do tipo register com esse nome de redister
    cy.get('.text-danger').should('be.visible');
  })
})