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

    //Go back to home page
    cy.visit("https://www.marcos.com");

    // Click sign up button
    cy.get(".navigation").find(".navigation--login").click();

    // enter address to find local stores
    cy.get("#sn-address").type("4020 Fine Creek Path");
    cy.get("#sn-city").type("Powhatan");
    cy.get("#modalSignupStore")
      .find(".columns")
      .find(".column")
      .find(".field")
      .find(".control")
      .find("#state")
      .select("VA");
    cy.get("#sn-zip").type("23139");

    // click see stores button
    cy.get(".button").contains("See Stores").click();

    // click on first store
    cy.get(".button").contains("sign in").click();

    // // click the register account button
    // cy.get("#register").click();

    // // enter user details
    // cy.get("#firstName").type("Rusty");
    // cy.get("#lastName").type("Shackleford");
    // cy.get("#phone").type("804-555-5555");
    // cy.get("#email").type("rusty@shackleford.com");
    // cy.get("#password").type("abcd1234!");
    // cy.get(".month-field-container").find(".form-control").select("1");
    // cy.get(".year-field-container").find(".form-control").select("31");
    // cy.get("#AQ0-1").select("Email");

    // // agree to terms and conditions
    // cy.get(".custom-checkbox-details").eq(2).click();

    // Cypress.Commands.add("confirmCaptcha", function () {
    //   cy.get("iframe")
    //     .first()
    //     .then((recaptchaIframe) => {
    //       const body = recaptchaIframe.contents();
    //       cy.wrap(body)
    //         .find(".recaptcha-checkbox-border")
    //         .should("be.visible")
    //         .click();
    //     });
    // });

    // intercept post request to register user
    // cy.intercept(
    //   "POST",
    //   "https://store2014.marcos.com/ws/integrated/v1/ordering/audits"
    // ).as("postCall");

    // click register button
    // cy.get("#sign-up").click();

    // cy.wait("@postCall").then(({ request, response }) => {
    // Log the request body
    //   console.log(request.body);

    // Log the response body
    //   console.log(response.body);

    // Make assertions about the request
    //   expect(request.method).to.equal("POST");
    //   expect(request.headers["content-type"]).to.equal("application/json");

    // Make assertions about the response
    //   expect(response.statusCode).to.equal(204);
    // });

    // cy.request({
    //   method: "POST",
    //   url: "/https://store2014.marcos.com/ws/integrated/v1/ordering/audits", // replace with your actual endpoint
    //   body: {
    //     fistName: "Rusty",
    //     lastName: "Shackleford",
    //     phone: "804-555-5555",
    //     email: "rusty@shackleford.com",
    //     password: "abcd1234!",
    //     month: "1",
    //     day: "31",
    //     "AQ0-1": "Email",
    //   },
    //   headers: {
    //     "X-Test-Mode": "true",
    //   },
    // });

    // click register button
    // cy.get("#sign-up").click();

    // Cannot fully test sign-up without access to the backend code, so moving on to next test using a manually created account
    cy.get("#user-email").type("davidstinnett@icloud.com");
    cy.get("#password").type("abcd1234!");
    cy.get("#login").click();
  });
});
