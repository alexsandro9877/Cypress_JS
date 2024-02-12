import Cadastro from '../../support/pages/Cadastro/pagina-cadastro'

describe('This is your test project title', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach((usuarios) => {
        it('test case description', () => {
            // cy.contains('a','Register now').click();
            // cy.get('input[data-test="email"]').type(usuarios.email)
            // cy.get('input[data-test="fullName"]').type(usuarios.fullName)
            // cy.get('input[data-test="registerUserName"]').type(usuarios.userName)
            // cy.get('input[data-test="registerPassword"]').type(usuarios.password)
            // cy.get('input[data-test="btnRegister"]').click(); 
            Cadastro.acessarPaginaDeCadastro()
            Cadastro.preencherFormulario(usuarios)
            Cadastro.submeterFormulario()
        })
    })
})

