describe('Registrar novo usuário com informações incompletas', () => {
  
  it('NEW USER - NO FIRST NAME', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#lastName').type('Gomes')
    cy.get('#username').type('admiro')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123456')
    cy.get('#firstName-helper-text').contains('First Name is required')
  })

  it('NEW USER - NO LAST NAME', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').click()
    cy.get('#username').type('admiro')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123456')
    cy.get('#lastName-helper-text').contains('Last Name is required')

  })

  it('NEW USER - NO USERNAME', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Gomes')
    cy.get('#username').click()
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123456')
    cy.get('#username-helper-text').contains('Username is required')
  })

  it('NEW USER - PASSWORD 3-CHARACTERS', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Gomes')
    cy.get('#username').type('admiro')
    cy.get('#password').type('123')
    cy.get('#confirmPassword').type('123')
    cy.get('#password-helper-text').contains('Password must contain at least 4 characters')

  })

  it('NEW USER - PASSWORD CONFIRM INCORRECT', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Gomes')
    cy.get('#username').type('admiro')
    cy.get('#password').type('1234')
    cy.get('#confirmPassword').type('1235')
    cy.get('#confirmPassword-helper-text').contains('Password does not match')

  })
});