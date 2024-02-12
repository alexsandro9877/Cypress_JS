// cypress/integration/teste1_spec.js
describe('Teste 1', () => {
    it('Deve criar algo no Teste 1', () => {
      cy.request('POST', '/api/criar-algo', { dados: 'alguma coisa' }).as('criarAlgo');
      cy.visit('/');
      cy.wait('@criarAlgo');
    });
  });
  
  // cypress/integration/teste2_spec.js
  describe('Teste 2', () => {
    it('Deve depender do Teste 1', () => {
      // Obtenha o resultado do teste 1 usando o alias
      cy.get('@criarAlgo').then((response) => {
        // Agora você pode usar a resposta para realizar ações no Teste 2
        cy.visit(`/alguma-rota/${response.body.id}`);
        cy.get('#algum-elemento-do-teste-2').should('exist');
      });
    });
  });
  