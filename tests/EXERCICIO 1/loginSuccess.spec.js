describe('Login com sucesso', () => {
  
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Gomes')
    cy.get('#username').type('admiro')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123456')
    cy.get("[type='submit']").click()
    cy.get('#username').type('admiro')
    cy.get('#password').type('123456')
    cy.get("[type='submit']").click()
    cy.get('[data-test="user-onboarding-next"]').click()
    // Cadastro de conta bancaria
    cy.get('#bankaccount-bankName-input').type('Cypress Bank')
    cy.get('#bankaccount-routingNumber-input').type('123456789')
    cy.get('#bankaccount-accountNumber-input').type('123456789')
    cy.get('[data-test="bankaccount-submit"]').click()
  })
})