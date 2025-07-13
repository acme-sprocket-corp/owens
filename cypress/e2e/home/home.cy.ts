describe("home", () => {
  it("has heading", () => {
    cy.visit("/");

    cy.findByRole("heading", { name: /home/i });
  });
});
