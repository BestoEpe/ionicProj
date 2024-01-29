describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/folder/overview')
    cy.contains('#container', 'overview')
    cy.visit('/folder/setup')
    cy.contains('#apuva', 'setup')
  })
})
