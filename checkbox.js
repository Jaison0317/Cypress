/// <reference types="cypress" />

describe('Nueva seccion checkbox', () =>{
    it('Checkbox uno ', () =>{
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1500)

        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(2500)
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')

    })

    it('Checkbox por seleccion ', () =>{
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1500)

        cy.get('#isAgeSelected').check().should('be.checked')
    })


    it.only('Radio button', () =>{
        cy.visit('https://demo.seleniumeasy.com/basic-radiobutton-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Radio buttons demo for Automation')
        cy.wait(1500)

        cy.get('.panel-body > :nth-child(2) > input').click()
        cy.get('.panel-body > :nth-child(2) > input').check()
    })
})