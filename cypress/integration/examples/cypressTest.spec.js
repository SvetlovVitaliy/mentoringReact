/// <reference types="cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('cypress test', () => {
    it('finds the content types', () => {
      cy.get('.poster_wrapper').first().click();
      cy.url().should('include', '/details');
    })
  })
})
