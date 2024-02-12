// cypress/integration/teste1_spec.js
describe('Teste 1', () => {
    beforeEach(() => {
        cy.visit('http://keycloak.servicos-hml.gpa.net.br/auth/realms/gpa/protocol/openid-connect/auth?client_id=whitelabel&redirect_uri=http%3A%2F%2Fprevenda-portal-whitelabel-front.servicos-hml.gpa.net.br%2Fparceiros&state=8128289c-496c-408f-aa77-e6f44fd7edd9&response_mode=fragment&response_type=code&scope=openid&nonce=db7e68fe-efd6-4b38-9f0f-77ba7e1427d3')
        cy.get('#username').type('TC021237'); 
        cy.get('#password').type('Coxinha#4081'); 
        cy.get('#login').click(); 
        cy.screenshot('tela-de-login'); 
      
    });
  
    it('Deve realizar algo no Teste 1', () => {
      // Realize ações no Teste 1
      //cy.get('#algum-elemento').should('exist');
    });
  
    it('Deve realizar algo mais no Teste 1', () => {
      // Realize mais ações no Teste 1
    //  cy.get('#outro-elemento').should('be.visible');
    });
  });
  