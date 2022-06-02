/// <reference types="cypress" />
require('cypress-xpath')


describe('Tipos de Selectores ', () =>{
    it('Selector por ID ', () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(2000)

        cy.get('#wsf-1-field-21').should('be.visible').type('Jaison') // Seleccionar por ID
    })


    it('Selector por Atributos ', () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(2000)

        cy.get('[placeholder="Nombre:"]').should('be.visible').type('Jaison') // Seleccionar por atributo
    })


    it('Selector por XPATH ', () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(2000)

        cy.xpath("//input[@id='wsf-1-field-21']").should('be.visible').type('Jaison') // Seleccionar por XPATH
    })


    it('Selector por Contains ', () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(2000)

        cy.get(".wsf-field nombre nom").contains('Nombre') // Seleccionar por Contains
    })


    it.only('Selector por Copy_Selector ', () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(2000)

        cy.get("#wsf-1-field-21").should('be.visible').type('Jaison') // Seleccionar por Copy_Selector
    })



    it.only('Seletor en combobox/listas desplegables', () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(2000)

        cy.get("#wsf-1-field-21").should('be.visible').select('Nokia') // Seleccionar por combobox
        cy.get("#wsf-1-field-21").should('be.visible').select('Nokia').should('have.value','16').wait(1500) // Seleccionar por combobox

    })
})