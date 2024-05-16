describe("Sales category", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Clicking on each category of the chart changes amount of other sales value", () => {
    cy.get(".apexcharts-pie").as("apxchart");
    cy.get("@apxchart").find(".apexcharts-donut-slice-2").click();
    cy.get(".apexcharts-datalabels-group").should("contain", "270");
  });

  it("Clicking on each category of the chart changes amount of apparel sales value", () => {
    cy.get(".apexcharts-pie").as("apxchart");
    cy.get("@apxchart")
      .find(".apexcharts-donut-slice-0")
      .click({ force: true });
    cy.get(".apexcharts-datalabels-group").should("contain", "985");
  });

  it("Clicking on each category of the chart changes amount of sports sales value", () => {
    cy.get(".apexcharts-pie").as("apxchart");
    cy.get("@apxchart")
      .find(".apexcharts-donut-slice-1")
      .click({ force: true });
    cy.get(".apexcharts-datalabels-group").should("contain", "737");
  });
});
