describe('Registrar de novo usuário com informações corretas', () => {
  
  it('NEW USER SUCCESS', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Gomes')
    cy.get('#username').type('admiro')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123456')
    cy.get("[type='submit']").click()
  })
})