class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField:"[placeholder='Username']" ,
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      wrongCredentialAlert: "[role='alert']",
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit('/auth/login');
    cy.url().should('include', 'login');
}

 loginWithUser(username, password) {
  cy.get(this.selectorsList().usernameField, { timeout: 15000 })
    .should('be.visible') 
    .type(username);

  cy.get(this.selectorsList().passwordField)
    .should('be.visible')
    .type(password);

  cy.get(this.selectorsList().loginButton).click();
}
checkAccessInvalid() {
  cy.get(this.selectorsList().wrongCredentialAlert)
    .should('be.visible')
    .and('contain', 'Invalid credentials');
}
  
}

export default LoginPage;
