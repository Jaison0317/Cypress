/// <reference types="cypress" />

describe('Referencias a Windows ', () =>{
    it('Propiedad charsets ', () =>{
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(2000)

        cy.document().should('have.property','charset').and('eq','UTF-8')
    })


    it('Validar URL de la pagina ', () =>{
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(2000)

        cy.url().should('include','basic-first-form-demo.html')
        cy.url().should('eq','https://demo.seleniumeasy.com/basic-first-form-demo.html')

        
    })
})