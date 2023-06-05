describe("template spec", () => {
  it("passes", () => {
    // test that the home page loads
    cy.visit("https://www.marcos.com");
    // starts order
    cy.get("#navigationStartOrder").click();
    // set location from address
    cy.get(".other-loc-cta").click();

    // enter address to find local stores (this doubles as a test of the geolocation functionality)
    cy.get("#addrClientInput").type("4020 Fine Creek Path");

    cy.get("#cityClientInput").type("Powhatan");

    cy.get("#stateClientInput").select("VA");

    cy.get("#zipClientInput").type("23139");

    //Site should verify that given address is not in a delivery area and only allow carryout
    cy.get("#addresslocateClient").click();

    cy.contains("a", "Carryout").click();

    cy.wait(5000);

    // add a pizza to the order
    cy.get(".recently-ordered-item")
      .should("be.visible")
      .find(".panel-item-footer")
      .find(".buttons-wrapper")
      .find(".order-btn")
      .eq(1)
      .click();

    // show cart
    cy.get("#order-tree-toggle-btn").click();

    // check cart for item
    cy.get(".ng-tns-c187-9").contains("Lg. Pepperoni Magnifico");

    //Go back to home page
    cy.visit("https://www.marcos.com");

    // Click sign up button
    cy.get(".navigation").find(".navigation--login").click();

    // enter address to find local stores (this doubles as a test of the geolocation functionality)
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

    cy.wait(5000);

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

    //* test login
    cy.get("#user-email").type("davidstinnett@icloud.com");
    cy.get("#password").type("abcd1234!");
    cy.get("#login").click();

    cy.wait(5000);

    //* test pizza builder

    //select customize button on first option
    cy.get(".recently-ordered-item")
      .should("be.visible")
      .find(".panel-item-footer")
      .find(".buttons-wrapper")
      .find(".selection-btn")
      .contains("Customize")
      .eq(0)
      .click();

    // select crust
    cy.get(".custom-radio-details").eq(1).click();

    // click sauce tab
    cy.get(".ingredient-choice").contains("Sauce").click();

    // select amount of sauce and cheese
    cy.get(".ng-trigger").contains("Amount?").click();
    cy.get(".ingredient-qualifier-btn").contains("Light").click();
    cy.get(".ingredient-qualifier-btn").contains("Double").click();

    //the above test, though passing, seems to point to an issue with the site. It seems like you should be able to pick either light or double, but not both. I'm not sure if this is a bug or if the site is designed to allow this.

    // click Pizza Crust Toppers tab
    cy.get(".ingredient-choice").contains("Toppers").click();

    // select crust toppers
    cy.get(".ingredient-info").contains("Garlic").click();
    cy.get(".ingredient-info").contains("Parm").click();
    cy.get(".ingredient-info").contains("Romasean").click();
    cy.get(".ingredient-info").contains("Roma Crust").click();

    // click Pizza Toppings tab
    cy.get(".ng-tns-c262-9").contains("Toppings").click();

    // select toppings
    cy.get(".ingredient-label").contains("Pepperoni").click();
    cy.get(".ingredient-label").contains("Old World").click();
    cy.get(".ingredient-label").contains("Italian").click();
    cy.get(".ingredient-label").contains("Bacon").click();
    cy.get(".ingredient-label").contains("Ham").click();
    cy.get(".ingredient-label").contains("Steak").click();
    cy.get(".ingredient-label").contains("Meatballs").click();
    cy.get(".ingredient-label").contains("Chicken").click();
    cy.get(".ingredient-label").contains("Beef").click();
    cy.get(".ingredient-label").contains("Anchovies").click();
    cy.get(".ingredient-label").contains("Salami").click();

    // select veggies tab
    cy.get(".ng-tns-c256-20").contains("Veggies").click();

    // select veggies
    cy.get(".ingredient-label").contains("Mushrooms").click();
    cy.get(".ingredient-label").contains("Onions").click();
    cy.get(".ingredient-label").contains("Red Onions").click();
    cy.get(".ingredient-label").contains("Green Peppers").click();
    cy.get(".ingredient-label").contains("Banana Peppers").click();
    cy.get(".ingredient-label").contains("Black Olives").click();
    cy.get(".ingredient-label").contains("Green Olives").click();
    cy.get(".ingredient-label").contains("Jalapenos").click();
    cy.get(".ingredient-label").contains("Pineapple").click();
    cy.get(".ingredient-label").contains("Tomatoes").click();
    cy.get(".ingredient-label").contains("Spinach").click();

    // select other toppings tab
    cy.get(".ng-tns-c256-20").contains("other").click();

    // select other toppings
    cy.get(".ingredient-label").contains("Extra").click();
    cy.get(".ingredient-label").contains("Feta").click();
    cy.get(".ingredient-label").contains("Cheddar").click();
    cy.get(".ingredient-label").contains("Shaved").click();

    // select sides tab
    cy.get(".ng-tns-c262-9").contains("Sides").click();

    // select sides
    cy.get(".ingredient-label").contains("Parm").click();
    cy.get(".ingredient-label").contains("BBQ").click();
    cy.get(".ingredient-label").contains("Jalapenos").click();
    cy.get(".ingredient-label").contains("Banana").click();
    cy.get(".ingredient-label").contains("Garlic").click();
    cy.get(".ingredient-label").contains("Pizza").click();
    cy.get(".ingredient-label").contains("Ranch").click();
    cy.get(".ingredient-label").contains("Red").click();
    cy.get(".ingredient-label").contains("Blue").click();

    // close cookie banner
    cy.get(".policy-alert").find(".btn").eq(1).click();

    // add to order
    cy.get(".submit-btn").click();

    // check cart for both items
    cy.get("#order-tree-toggle-btn").click();
    cy.wait(2000);
    cy.get("#order-tree-toggle-btn").click();
    cy.wait(2000);

    cy.get(".ng-tns-c178-110").contains("Lg. Pepperoni Magnifico");
    cy.get(".ng-tns-c178-112").contains("Lg. Thin BUILD YOUR OWN");

    // Remove build your own pizza from cart
    cy.get(".ng-tns-c178-112").contains("Remove").click();

    //* Test coupon code functionality

    // type coupon code
    cy.get("#coupon-code").type("SPECIAL3");

    // apply coupon code
    cy.get(".btn").contains("Apply").click();

    //* checkout process

    // click checkout button
    cy.get("#order-tree-checkout").click();

    // clear phone number field
    cy.get("#guestPhone").clear().type("804-555-5555");
    // the account sign up form won't let me use the above phone number, so it seems like the checkout process also shouldn't allow this phone number. I'm not sure if this is a bug or if the site is designed to allow this.

    // click continue to order details button
    cy.get("#continue-to-order-details-btn").click();

    // click continue to payment button
    cy.get("#continue-to-payment-btn").click();

    // place order
    cy.get("#place-order-btn").click();

    //the next step would be to add card information and then click the place order button, but I do not want a pizza today, so I will leave this test where it is at.
  });
});
