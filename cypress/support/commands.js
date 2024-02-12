//ctrl + ';'

export function logins( nome , senha) {
    cy.get('[data-test="loginUserName"]').type(nome)
    cy.get('[data-test="loginPassword"]').type(senha)
    cy.contains('button','login').click(); 
 }
 export function loginSemEnviar( nome , senha) {
    cy.get('[data-test="loginUserName"]').type(nome)
    cy.get('[data-test="loginPassword"]').type(senha)
    cy.contains('button','login').click(); 
 }