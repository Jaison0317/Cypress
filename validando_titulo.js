/// <reference types="cypress" />
// Para utilizar los comandos de Cypress

describe("Validando el titulo de la pagina", () => {

    it("Test validar titulo", () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')

        cy.log("Funcionó")
    })

})