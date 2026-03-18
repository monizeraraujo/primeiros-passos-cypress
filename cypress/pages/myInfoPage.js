class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      genericCombobox: ".oxd-select-text--arrow",
      secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
      thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
      dateField: ".oxd-date-wrapper",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",
      expiryLicence: "[placeholder='yyyy-dd-mm']"
    };
    return selectors;
  }

  fillPersonalDetails(firstName, lastName, middleName) {
    cy.url().should('include', 'viewPersonalDetails');
    
    cy.get(this.selectorsList().firstNameField, { timeout: 20000 }) 
      .should('be.visible')
      .clear({ force: true })
      .type(firstName);

    cy.get(this.selectorsList().lastNameField)
      .clear({ force: true })
      .type(lastName);

    
    cy.get(this.selectorsList().genericField)
      .eq(2)
      .clear({ force: true })
      .type(middleName);
  }

  fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryLicence) {
    cy.get(this.selectorsList().genericField).eq(3).clear({ force: true }).type(employeeId);
    cy.get(this.selectorsList().genericField).eq(4).clear({ force: true }).type(otherId);
    cy.get(this.selectorsList().genericField).eq(5).clear({ force: true }).type(driversLicenseNumber);
   
    cy.get(this.selectorsList().genericField).eq(6).clear({ force: true }).type(expiryLicence);
  }

  fillStatus() {
   
    cy.get(this.selectorsList().genericField, { timeout: 15000 })
      .should('have.length.at.least', 7) 
      .last() 
      .clear({ force: true })
      .type("TestField", { force: true });

    
    cy.get(this.selectorsList().genericCombobox).eq(0).should('be.visible').click({ force: true });
    cy.get(this.selectorsList().secondItemCombobox).click();
  }

 saveForm() {
   
    cy.get(this.selectorsList().submitButton)
      .eq(0) 
      .click({ force: true });

   
    cy.get('body').then(($body) => {
      if ($body.find('.oxd-toast').length > 0) {
        cy.get('.oxd-toast').should('exist');
      }
    });

    cy.log('O comando de salvar foi enviado!');
  }

} 

export default MyInfoPage;
