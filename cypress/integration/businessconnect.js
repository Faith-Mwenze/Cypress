/// <reference types="Cypress"/>
describe("Business Connect ", () => {
    it.only("Business Connect back office" , () => {
        //cypress code
        cy.visit("http://192.168.204.21:8484/")
        cy.get('#username').type("njauphanto3")
        cy.get('#password').type("Dev2019#1")
        cy.get('.jss9 > .MuiButtonBase-root').click()
        cy.get('.jss111 > .MuiDrawer-root > .MuiPaper-root > .jss104 > .MuiList-root > [href="/businessconnect/bizcon/corporates"] > .MuiButtonBase-root > .MuiListItemText-root').click()
        cy.get('section > :nth-child(1) > center > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('#cif').type("0012092")
        cy.get('.jss181 > center > .MuiButtonBase-root').click()
        cy.get('.jss65 > :nth-child(7) > .MuiButtonBase-root').click()
        cy.get('[style="transform: translate3d(0px, 0px, 0px); z-index: 10002; height: 550px; width: 500px; background-color: rgb(255, 255, 255); border-radius: 5px; box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px; transition: transform 500ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 500ms cubic-bezier(0, 0, 0.25, 1) 0s;"] > :nth-child(1) > .jss65 > :nth-child(6) > :nth-child(1) > .form-control').select('Rental Management')
        cy.get('[style="transform: translate3d(0px, 0px, 0px); z-index: 10002; height: 550px; width: 500px; background-color: rgb(255, 255, 255); border-radius: 5px; box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px; transition: transform 500ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 500ms cubic-bezier(0, 0, 0.25, 1) 0s;"] > :nth-child(1) > .jss65 > :nth-child(6) > :nth-child(2) > .form-control').select('corporate')
        cy.get('.jss65 > :nth-child(7) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('[tabindex="6"] > .MuiButtonBase-root > .MuiButton-label')

           })
})