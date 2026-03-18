class DashboardPage {
  selectorsList() {
    const selectors = {
      dashboardGrid: ".oxd-text--h6",
    };
    return selectors;
  }

  checkDashboardPage() {
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(this.selectorsList().dashboardGrid, { timeout: 10000 }).contains('Dashboard').should("be.visible");
  }
}

export default DashboardPage;
