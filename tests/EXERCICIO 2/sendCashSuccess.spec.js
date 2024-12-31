describe('Transferindo dinheiro com sucesso', () => {
  
    it('Sufficient Balance', () => {
      cy.visit('http://localhost:3000/signin')
      // Login
      cy.get('#username').type('admiro')
      cy.get('#password').type('123456')
      cy.get("[type='submit']").click()
      cy.get("[href='/transaction/new']").click()
      cy.get("[type='text']").type('Ted')
      cy.get('[data-test="user-list-item-uBmeaz5pX"] > .MuiListItemText-root > .MuiTypography-body1').click()
      cy.get('#amount').type('10')
      cy.get('#transaction-create-description-input').type('Pix')
      cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(2)').click()
      cy.get('[data-test="alert-bar-success"]').contains('Transaction Submitted!')
    })
  })