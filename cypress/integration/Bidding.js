/// <reference types="Cypress"/>
describe("Bidding - normal user ", () => {
    it.only("Bidding" , () => {
        //cypress code
        cy.visit("http://192.168.205.28:7474/auth")
        cy.get('#username').type("Faith.Mwenze")
        cy.get('#password').type("Jehova!234")
        cy.get('.MuiButton-label').click()
        cy.get('[data-testid=MuiDataTableBodyCell-7-6] > :nth-child(2) > .right > .labeled').click()
        cy.get('#form-input-control-name').type("1000")  
        cy.get(':nth-child(2) > .ui > #form-input-control-name').type("1") //  use the element for the item you are bidding
        cy.get('.red').click()
        // create a bid 
       // cy.get('.primary').click()
            // view my bids
        cy.get('[href="/mybids"] > .MuiListItemText-root > .MuiTypography-root').click()
        //cancel Bids
        cy.get('[data-testid=MuiDataTableBodyCell-7-0] > :nth-child(2) > .right > .ui').click()
        cy.get('.column > div > .red').click()
        


     
 
    
    

           })
})