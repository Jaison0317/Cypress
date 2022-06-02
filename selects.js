/// <reference types="cypress" />

describe('Nueva seccion checkbox', () =>{
    it('select uno ', () =>{
        cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1500)

       cy.get('#select-demo').should('be.visible').select('Friday')
       cy.wait(4000)
       cy.get('#select-demo').should('be.visible').select('Saturday').should('have.value','Saturday')

    })

    it('select dos ', () =>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        cy.wait(1500)

       cy.get('[name="q"]').should('be.visible').type('Ferrari').type('{enter}')
       cy.wait(4000)
    })


    it.only('Multi select ', () =>{
        cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1500)

       cy.get('#multi-select').should('be.visible').select(["California","Ohio","Washington"]).then(() =>{
           cy.get('#printMe').should('be.visible').click()
       })
    })
})