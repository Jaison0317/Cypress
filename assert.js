/// <reference types="cypress" />

describe('Bienvenido a los Asserts ', () =>{
    it('Demo de los asserts ', () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales')
        cy.title().should('eq', 'Datos Personales | TestingQaRvn')
        cy.wait(1000)
        
        cy.get('#wsf-1-field-21').should('be.visible').type('Jaison')
        cy.get('#wsf-1-field-22').should('be.visible').type('Cabral')
        cy.get('#wsf-1-field-23').should('be.visible').type('Jaison0317@gamil.com')
        cy.get('#wsf-1-field-24').should('be.visible').type('8298396056')
        cy.get('#wsf-1-field-28').should('be.visible').should('be.enabled').type('Prueba automatizada con Cypress')
        
    })
})