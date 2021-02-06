// The smoke test does not mock external response.
// Leave these tests minimalists.
describe('Character cards', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows three cards in the page', () => {
    cy.get('.clash-card').should('have.length', 3)
  })
})
