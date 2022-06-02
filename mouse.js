/// <reference types="cypress" />
require(`cypress-xpath`)
require(`@4tw/cypress-drag-drop`)
import 'cypress-file-upload'


describe('Eventos Mouse', () => {
    it('Drag and drop ', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.title().should('eq', 'The Internet')
        cy.wait(1500)

        cy.get('#column-a').drag('#column-b',{force:true})
        
    })



    it('Drag and drop 2 ', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.title().should('eq', 'The Internet')
        cy.wait(1500)

        cy.get('#column-a').drag('#column-b',{force:true})
        
    })



    it.only('Nouse over', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/pim/viewEmployeeList')
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(1500)

        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123{enter}')

        cy.contains('PIM').trigger('mouseover')
        
    })
})