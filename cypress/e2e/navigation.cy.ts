describe('Navigation works correctly', () => {
  it('should navigate to the main pages', () => {
    cy.visit('/');
    cy.contains('home heading');

    cy.visit('posts');
    cy.get('[data-cy="resource-item-0"]').should('be.visible');
  });
});
