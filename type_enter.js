/// <reference types="cypress" />

describe('Funciones para Type', () =>{

    it('Type ---> ENTER', () =>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        cy.wait(2000)

        cy.get("[name='q']").type('Cypress.io{enter}')
        cy.wait(4000)
        cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3').click()
    })
})