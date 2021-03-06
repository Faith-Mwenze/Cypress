/// <reference types="Cypress"/>
describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us > .thumbnail').click()
       // cy.get('#contact-us').click({force: true})
       cy.get('[name="first_name"]').type("Faith")
       cy.get('[name="last_name"]').type("Mwenze")
       cy.get('[name="email"]').type("faithmu2005@yahoo.com")
       cy.get('textarea.feedback-input').type("Good")
       cy.get('[type="submit"]').click()
        });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us > .thumbnail').click()
       // cy.get('#contact-us').click({force: true})
       cy.get('[name="first_name"]').type("Faith")
       cy.get('[name="last_name"]').type("Mwenze")
       cy.get('textarea.feedback-input').type("Good")
       cy.get('[type="submit"]').click()
       

    });
})