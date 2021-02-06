describe('Character cards', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/characters', { fixture: 'characters.json' })
    cy.visit('/')
  })

  it('shows three cards in the page', () => {
    cy.get('.clash-card').should('have.length', 3)
  })

  context('Card content', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/characters', { fixture: 'characters.json' })
      cy.visit('/')
      cy.get('.clash-card').as('cards')
    })

    it('builds Carmen card', () => {
      cy.get('@cards').eq(0)
        .find('.clash-card__unit-name')
        .should('have.text', 'Carmen')

      cy.get('@cards').eq(0)
        .find('.clash-card__level')
        .should('have.text', 'ela/dela')

      cy.get('@cards').eq(0)
        .find('.clash-card__unit-description')
        .should('have.text', 'Curiosa, leonina (isso já diz tudo) e não gosta de chá de camomila. Seu sonho é se tornar uma espiã mundialmente famosa.')
    })

    it('builds Sam card', () => {
      cy.get('@cards').eq(1)
        .find('.clash-card__unit-name')
        .should('have.text', 'Sam')

      cy.get('@cards').eq(1)
        .find('.clash-card__level')
        .should('have.text', 'elu/delu')

      cy.get('@cards').eq(1)
        .find('.clash-card__unit-description')
        .should('have.text', 'Et, telefone, minha casa, mas não necessariamente nessa mesma ordem.')
    })

    it('builds Diego card', () => {
      cy.get('@cards').eq(2)
        .find('.clash-card__unit-name')
        .should('have.text', 'Diego')

      cy.get('@cards').eq(2)
        .find('.clash-card__level')
        .should('have.text', 'ele/dele')

      cy.get('@cards').eq(2)
        .find('.clash-card__unit-description')
        .should('have.text', 'Vira a esquina com toda alegria, festejando.')
    })
  })

})
