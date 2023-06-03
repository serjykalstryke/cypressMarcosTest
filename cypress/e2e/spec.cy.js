//* 1. Visit the Marcos website
//* 2. Click the "Start Your Order" button
//* 3. Click "other location" button
//* 4. Enter address
//* 5. Click "find address" button
//* 6. Click "Carryout" button
//* 7. Click button to order Lg. Pepperoni Magnifico
//* 8. Click "View Order" button
//* 9. Verify that the order is correct

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://www.marcos.com");
    cy.get("#navigationStartOrder").click();
    cy.get(".other-loc-cta").click();

    cy.get("#addrClientInput").type("4020 Fine Creek Path");

    cy.get("#cityClientInput").type("Powhatan");

    cy.get("#stateClientInput").select("VA");

    cy.get("#zipClientInput").type("23139");

    //Site should verify that given address is not in a delivery area and only allow carryout
    cy.get("#addresslocateClient").click();

    cy.contains("a", "Carryout").click();

    cy.get(".recently-ordered-item")
      .find(".panel-item-footer")
      .find(".buttons-wrapper")
      .find(".order-btn")
      .eq(1)
      .click();

    cy.get("#order-tree-toggle-btn").click();

    cy.get(".ng-tns-c187-9").contains("Lg. Pepperoni Magnifico");
  });
});
