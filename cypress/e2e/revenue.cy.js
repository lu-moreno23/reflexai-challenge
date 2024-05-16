const { months } = require("../../constants");

describe("Revenue Chart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Clicking on the graphic displays expense and income tooltips", () => {
    cy.get(".apexcharts-svg")
      .find(".apexcharts-series-markers-wrap")
      .should("be.visible")
      .eq(0)
      .click({ force: true });
    cy.get(".apexcharts-tooltip-text-y-label")
      .should("be.visible")
      .contains("Income:");
    cy.get(".apexcharts-tooltip-text-y-label")
      .should("be.visible")
      .contains("Expenses:");
  });

  it("Displays total profit", () => {
    cy.get(".text-lg")
      .should("contain", "Total Profit ")
      .and("contain", "$10,840");
  });

  it("Check months tooltip is displayed based on where the hover was done", () => {
    cy.get(".apexcharts-svg")
      .find(".apexcharts-series-markers-wrap")
      .should("be.visible")
      .eq(0)
      .click({ force: true });
    cy.get(".apexcharts-xaxistooltip-text").shouldBeIn(months);
  });
});
