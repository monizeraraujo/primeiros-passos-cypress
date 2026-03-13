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
    };

    return selectors;
  }
  fillPersonalDetails(firstName, lastName, middleName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName);
    cy.get(this.selectorsList().lastNameField).clear().type(lastName);
    cy.get(this.selectorsList().genericField).eq(2).clear().type(middleName);

    
    
  }

  fillEmployeeDetails(employeeId, otherId, driversLicenseNumber) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber);

  }

  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click({ force: true });
    cy.contains(".oxd-toast", "Successfully Updated", {
      timeout: 10000,
    }).should("be.visible");
  }
  fillStatus() {
    cy.get(this.selectorsList().genericField).eq(8).clear().type("TestField");
    cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true });
    cy.get(this.selectorsList().secondItemCombobox).click();
    cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true });
    cy.get(this.selectorsList().thirdItemCombobox).click();
  }
}

export default MyInfoPage;
