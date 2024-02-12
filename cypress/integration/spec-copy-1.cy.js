describe('Seu Roteiro de Teste', () => {
    it('Deve fazer algo', () => {
      cy.visit('https://seusite.com'); // Substitua pela URL do seu site
  
      // Adicione comandos Cypress para interagir com a página
      cy.get('#seuElemento').click();
      cy.url().should('include', '/nova-pagina');
    });
  });
  