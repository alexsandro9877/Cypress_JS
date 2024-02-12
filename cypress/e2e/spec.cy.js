describe('Login', () => {
  it('Fazer login no WhiteLabel', () => {
    cy.visit('http://keycloak.servicos-hml.gpa.net.br/auth/realms/gpa/protocol/openid-connect/auth?client_id=whitelabel&redirect_uri=http%3A%2F%2Fprevenda-portal-whitelabel-front.servicos-hml.gpa.net.br%2Fparceiros&state=8128289c-496c-408f-aa77-e6f44fd7edd9&response_mode=fragment&response_type=code&scope=openid&nonce=db7e68fe-efd6-4b38-9f0f-77ba7e1427d3')
    cy.get('#username').type('TC021237'); 
    cy.get('#password').type('Coxinha#4081'); 
    cy.get('#login').click(); 
    cy.screenshot('tela-de-login'); 
  })
  it('Fazer login no WhiteLabel', () => {
    cy.get('#username').type('TC021237'); 
    cy.get('#password').type('Coxinha#4081'); 
    cy.get('#login').click(); 
    cy.screenshot('tela-de-login'); 
  })
})