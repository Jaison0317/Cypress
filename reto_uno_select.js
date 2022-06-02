/// <reference types="cypress" />

describe('Reto select ', () => {
    it.only('Multi select ', () => {
        cy.visit('https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html')
        cy.title().should('eq', 'Selenium Easy - JQuery Dual List Box Demo')
        cy.wait(1500)

        cy.get('.pickData').should('be.visible').select(["Sophia", "Laura", "Valentina"]).then(() => {
            cy.get('.pAdd').should('be.visible').click().then(() => {
                cy.wait(1500)
                cy.get('.pAddAll').should('be.visible').click().then(() => {
                    cy.wait(1500)
                    cy.get('.pRemoveAll').should('be.visible').click()
                })
            })
        })
    })
})
