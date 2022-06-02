/// <reference types="cypress" />

describe('Funciones click ', () =>{
    it('CLick sencillo ', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
        cy.wait(2000)

        cy.get('#txtUsername').should('be.visible').should('be.enabled').type('Admin')
        cy.get('#txtPassword').should('be.visible').should('be.enabled').type('admin123')
        cy.get('#btnLogin').should('be.visible').should('be.enabled').type('{enter}')

        cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click()

    })



    it('Force true', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
        cy.wait(2000)

        cy.get('#txtUsername').should('be.visible').should('be.enabled').type('Admin')
        cy.get('#txtPassword').should('be.visible').should('be.enabled').type('admin123')
        cy.get('#btnLogin').should('be.visible').should('be.enabled').type('{enter}')

        cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click({force:true})

    })



    it.only('Por coordenadas', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
        cy.wait(2000)

        cy.get('#txtUsername').should('be.visible').should('be.enabled').type('Admin')
        cy.get('#txtPassword').should('be.visible').should('be.enabled').type('admin123')
        cy.get('#btnLogin').should('be.visible').should('be.enabled').type('{enter}')

        cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible').click(100,50)

    })
})