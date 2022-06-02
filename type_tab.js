/// <reference types="cypress" />

require('cypress-plugin-tab')

describe('Ejemplo funcion tab', () => {
    it('Type tab ', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales')
        cy.title().should('eq', 'Datos Personales | TestingQaRvn')
        cy.wait(1000)
        
        cy.get('#wsf-1-field-21').type('Jaison').tab().
        type('Cabral').tab().
        type('jaison0317@gmail.com').tab().
        type('8298396056').tab().
        type('Direccion Prubea QA Automatizada con Cypress')
        
    })
})