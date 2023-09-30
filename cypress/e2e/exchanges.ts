describe("Exchanges", () => {
  it("Verify / page elements", () => {
    cy.visit("/");

    cy.findByText("Crypto exchanges");

    cy.findByTestId("exchange-table").should("be.visible");

    cy.findAllByTestId("exchange-logo").should("have.length", 10);
    cy.findAllByTestId("exchange-name").should("have.length", 10);
    cy.findAllByTestId("exchange-country").should("have.length", 10);
    cy.findAllByTestId("exchange-link").should("have.length", 10);
    cy.findAllByTestId("exchange-trust-score-rank").should("have.length", 10);
  });

  it("Click first item on the list", () => {
    cy.visit("/");

    cy.findAllByTestId("exchange-name").first().click();
    cy.url().should("include", "/exchange/");
  });

  it("Verify details page elements", () => {
    cy.visit("/");

    cy.findAllByTestId("exchange-name").first().click();

    cy.findByTestId("exchange-logo").should("exist");
    cy.findByTestId("exchange-info").should("exist");
    cy.findByTestId("exchange-social-links").should("exist");
  });
});
