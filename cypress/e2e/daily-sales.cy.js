const entireWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

describe("Daily Sales", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // In this text I wanted to validate that the tooltip displays correctly the days of the week
  // In order to do that I grabbed the text from the tooltip, sliced it and saved the first three characters of the day
  // Then compared the first three letters against the array
  it("daily sales today tooltip", () => {
    cy.get("[seriesName='Sales']").find(".apexcharts-bar-area").first().click();
    cy.get(".apexcharts-tooltip").should(($el) => {
      const tooltipLabel = $el.text().trim();
      const dayOfTheWeek = tooltipLabel.slice(0, 3);
      expect(
        entireWeek.includes(dayOfTheWeek),
        `${dayOfTheWeek} is inside ${entireWeek}`
      ).to.be.true;
    });
  });
});
