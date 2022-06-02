
describe("Cypress course seccion 1", () =>{

    it("Mi primer test -> Hola mundo", () =>{
        cy.log("Hola Mundo")
        cy.wait(3000)
    })


    // it.only(" test -> campo name", () =>{
    //     cy.visit('https://testingqarvn.com.es/datos-personales/')
    //     cy.get("#wsf-1-field-21").type("Jaison")
    //     cy.get("#wsf-1-field-22").type("Cabral")
    //     cy.wait(4000)
    // })
  

})//Ciere de describe