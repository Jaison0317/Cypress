/// <reference types="cypress" />


describe('Ejemplo de pageUp, pageDown', () => {
    it('type PageUp', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get('#userName').type('{pageup}')
        cy.wait(1000)


    })


    it.only('type PageDown', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales')
        cy.title().should('eq', 'Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-28').type('{pagedown}')
        cy.wait(1000)

    })
})