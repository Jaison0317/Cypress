/// <reference types="cypress" />


describe('Asserts ', () => {
    it('Assert contains ', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq', 'My Store')
        cy.wait(1500)

        cy.get('#block_top_menu').contains('Women').click()
    })


    it('Assert find, eq ', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq', 'My Store')
        cy.wait(1500)

        cy.get('.product-container').find('.product-image-container').eq(2).click()
    })


    it('Assert find, eq, validando vestido nuevo ', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq', 'My Store')
        cy.wait(1500)

        cy.get('.product-container').find('.product-image-container').eq(2).click()
        cy.get('#product_condition .editable').then((e) => {

            let estado = e.text()
            if (estado == "New") {
                cy.log('El vestido es nuevo')
            }
        })
    })


    it('Assert find, eq, validando monto $ vestido nuevo ', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq', 'My Store')
        cy.wait(1500)

        cy.get('.product-container').find('.product-image-container').eq(3).click()
        cy.get('#product_condition .editable').then((e) => {


            cy.get('#our_price_display').then((e) => {
                cy.log(e.text())
                let precio = e.text()
                precio = precio.slice(1, 3)
                cy.log(precio)

                if (precio > 30) {
                    cy.log('El vestido no esta en nuestro presupuesto')
                    cy.get('.breadcrumb > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
                } else {
                    cy.log('El vestido esta dentro del presupuesto')
                    cy.get('#add_to_cart').should('be.visible').click()
                    cy.wait(4000)
                }
            })

        })
    })

    it('Assert contains have.text y contains.text ', () => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1500)

        cy.get('.form-group > #user-message').should('be.visible').type('Prueba QA')
        cy.get('#get-input > .btn').should('be.visible').should('be.enabled').click()

        cy.get('#display').should('have.text', 'Prueba QA')
        cy.get('#display').should('contain.text', 'Prueba QA')
        cy.get('#display').should('', 'Prueba QA')
    })


    it('Assert contains have.text mas then ', () => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1500)

        cy.get('.at-cm-no-button').should('be.visible').click()

        cy.get('.form-group > #user-message').should('be.visible').type('Prueba QA').then(() => {
            cy.get('#get-input > .btn').should('be.visible').should('be.enabled').click()
            cy.get('.form-group > #user-message').should('contain.value', 'Prueba QA')
            cy.get('#display').should('have.text', 'Prueba QA')
            cy.get('#display').should('contain.text', 'Prueba QA')
            cy.get('#display').should('contain', 'Prueba QA')
        })
    })


    it('Assert have.class', () => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1500)

        cy.get('.at-cm-no-button').should('be.visible').click()

        cy.get('.form-group > #user-message').should('be.visible').should('have.class', 'form-control').type('Prueba QA').then(() => {
            cy.get('#get-input > .btn').should('be.visible').should('be.enabled').click()
            cy.get('.form-group > #user-message').should('contain.value', 'Prueba QA')
            cy.get('#display').should('have.text', 'Prueba QA')
            cy.get('#display').should('contain.text', 'Prueba QA')
            cy.get('#display').should('contain', 'Prueba QA')
        })

    })

    it('Assert have.class y la funcion AND', () => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1500)

        cy.get('.at-cm-no-button').should('be.visible').click()

        cy.get('.form-group > #user-message').should('be.visible').and('have.class', 'form-control').type('Prueba QA').then(() => {
            cy.get('#get-input > .btn').should('be.visible').should('be.enabled').click()
            cy.get('.form-group > #user-message').should('contain.value', 'Prueba QA')
            cy.get('#display').should('have.text', 'Prueba QA')
            cy.get('#display').should('contain.text', 'Prueba QA')
            cy.get('#display').should('contain', 'Prueba QA')
        })
    })


    it('Assert not.have.class y la funcion AND', () => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1500)

        cy.get('.at-cm-no-button').should('be.visible').click()

        cy.get('.form-group > #user-message').should('be.visible').and('not.have.class', 'form-control2').type('Prueba QA').then(() => {
            cy.get('#get-input > .btn').should('be.visible').should('be.enabled').click()
            cy.get('.form-group > #user-message').should('contain.value', 'Prueba QA')
            cy.get('#display').should('have.text', 'Prueba QA')
            cy.get('#display').should('contain.text', 'Prueba QA')
            cy.get('#display').should('contain', 'Prueba QA')
        })
    })


    it('Assert CSS_lenght y have.css', () => {
        cy.visit('https://demo.seleniumeasy.com/table-pagination-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table with Pagination Demo')
        cy.wait(1500)

        cy.get('#myTable >tr >td').should('have.length', 91).and('have.css', 'padding', '8px')
    })


    it('Assert Contains', () => {
        let tiempo = 2000

        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(tiempo)
        cy.get('.at-cm-no-button').should('be.visible').click()

        cy.get('.form-group > #user-message').should('be.visible').type('Prueba Automation')
        cy.wait(tiempo)
        cy.contains('[type="button"]', 'Show Message').should('be.visible').click()
    })


    it.only('Reto Assert ', () => {
        let tiempo = 2000
        let a = 10
        let b = 90
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(tiempo)
        cy.get('.at-cm-no-button').should('be.visible').click()

        cy.get('#sum1').should('be.visible').and('have.class', 'form-control').type(a)
        cy.get('#sum2').should('be.visible').type(b)
        cy.contains('[type="button"]', 'Get Total').should('be.visible').click()
        cy.wait(tiempo)

        cy.get('#displayvalue').should('be.visible').then((e) => {
            cy.log(e.text())
            let r = a + b
            cy.log(e.text())
            let res = e.text()

            if (r == res) {
                cy.log('Son iguales')
            } else {
                cy.log('El resultado es incorrecto')
            }


            if (r > 50) {
                a = a - 12
                b = b - 10
                cy.get('#sum1').invoke('attr','placeholder').should('contain','Enter value').then((e) =>{
                    cy.get('#sum1').type(a)
                    cy.get('#sum2').invoke('attr','style','color:blue')
                })

                cy.get('#sum1').should('be.visible').and('have.class', 'form-control').clear().type(a)
                cy.get(tiempo)
                cy.get('#sum2').should('be.visible').and('have.class', 'form-control').clear().type(b)
                cy.get(tiempo)
                cy.contains('[type="button"]', 'Get Total').should('be.visible').click()
                cy.log(e.text())

                cy.get('#displayvalue').invoke('attr','style','color:red')
                cy.screenshot()

            }

        })
        // cy.contains('[type="button"]','Show Message').should('be.visible').click()
    })
})