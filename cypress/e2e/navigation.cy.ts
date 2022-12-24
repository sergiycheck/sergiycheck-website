describe('Navigation works correctly', () => {
  it('should navigate to the main pages', () => {
    cy.visit('/');
    cy.contains('Serhii Kuzmych Full stack Node.js developer');
    cy.get('[alt="sergiycheck"]').should('be.visible');

    cy.visit('posts');
    cy.get('[data-cy="resource-item-0"]').should('be.visible');
  });
});
