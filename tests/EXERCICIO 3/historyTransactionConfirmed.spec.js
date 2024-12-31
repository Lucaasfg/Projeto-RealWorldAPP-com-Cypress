describe('Visualizando Historico de Transições', () => {
  
    it('History Transitions Success', () => {
      cy.visit('http://localhost:3000/signin')
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
      cy.get('[data-test="sidenav-home"]').click()
      cy.get('[data-test="nav-personal-tab"]').click()
      cy.get('.MuiPaper-elevation1').contains('-$10.00').click()
      cy.get('.CommentForm-form').type('Pagamento Feito meu amigo!').click().submit()
      cy.get('[data-test="comments-list"]').contains('Pagamento Feito meu amigo!')
    })
  })

