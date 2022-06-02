/// <reference types="cypress" />
require(`cypress-xpath`)
import 'cypress-file-upload'


describe('Upload imagenes ', () => {
    it('Cargando imagenes ', () => {
        cy.visit('https://testingqarvn.com.es/upload-files/')
        cy.title().should('eq', 'Upload Files | TestingQaRvn')
        cy.wait(1500)

        const ruta= 'img1.jpeg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(1500)
        
    })
})