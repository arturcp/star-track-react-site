describe('Header', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/characters', { fixture: 'characters.json' });
    cy.visit('/');
  });

  it('contains the name of the site', () => {
    cy.get('#top-header .description a').contains('Star Track');
  });

  it('contains a link to the home page in the title', () => {
    cy.get('#top-header .description a')
      .should('have.attr', 'href')
      .and('include', '/');
  });

  it('contains a link to the home page in the logo', () => {
    cy.get('#top-header a')
      .first()
      .should('have.attr', 'href')
      .and('include', '/');
  });

  it('contains a logo', () => {
    cy.get('#top-header img.logo').should('have.length', 1);
  });

  it('contains a subtitle', () => {
    cy.get('#top-header .description label')
      .first()
      .should('have.text', 'Use your knowledge to help Dr. Ken');
  });

  it('contains a link to the ranking', () => {
    cy.get('#top-header .ranking-container a')
      .should('have.attr', 'href')
      .and('include', '/ranking');
  });
});
