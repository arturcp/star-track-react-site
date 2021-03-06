describe('Header', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/characters', { fixture: 'characters.json' });
    cy.visit('/');
  });

  it('contains a footer', () => {
    cy.get('footer').should('have.length', 1);
  });

  it('contains copyright information', () => {
    cy.get('#site-footer').contains(
      'All rights reserved. © Star Track Corp, 2021.',
    );
  });
});
