import { ELEMENTS } from "./elements";
const el = ELEMENTS;

class Cadastro {

    acessarPaginaDeCadastro() {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
        cy.contains('a', 'Register now').click();
    }
    preencherFormulario(usuarios) {
        cy.get('input[data-test="email"]').type(usuarios.email)
        cy.get('input[data-test="fullName"]').type(usuarios.fullName)
        cy.get('input[data-test="registerUserName"]').type(usuarios.userName)
        cy.get('input[data-test="registerPassword"]').type(usuarios.password)
    }
    submeterFormulario() {
        cy.contains('button', 'Register').click();
    }

}

export default new Cadastro;

// ctrl ; comenta