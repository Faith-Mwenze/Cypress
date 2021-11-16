/// <reference types="Cypress"/>
describe("Change Management ", () => {
    it.only("Manage Change managment succeffully", () => {
        //cypress code
        cy.visit("http://192.168.205.28:9080/auth")
        cy.get('#username').type("Faith.Mwenze")
        cy.get('#password').type("Mungu!234")
        cy.get('.MuiButton-label').click()
        cy.get('[href="/changerequest"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('.jss50 > .MuiTypography-root > .right > .labeled').click()
        

     
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