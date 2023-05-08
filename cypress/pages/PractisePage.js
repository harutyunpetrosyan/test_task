///<reference types="Cypress"/>
import 'cypress-iframe';
class PractisePage {

    visit() {
        cy.visit('cypress/fixtures/task.html')
    }
    getDropdownSelectedText(index) {
        return new Promise((resolve) => {
            cy.get('#dropdown-class-example option', { timeout: 10000 }).eq(index).invoke('text').then((text) => {
                resolve(text);
            });
        });
    }
    confirmAlert(){
        cy.on('window:confirm', () => true);
    }

    get uploadImageTab() {
        return cy.get('[oninput="uploadImage()"]')
    }

    get openNewTabButton() {
        return cy.get('#opentab')
    }

    get confirmButton() {
        return cy.get('#confirmbtn')
    }

    get alertButton() {
        return cy.get('#alertbtn')
    }

    get HideButton() {
        return cy.get('#hide-textbox')
    }

    get ShowButton() {
        return cy.get('#show-textbox')
    }

    get hideShowField() {
        return cy.get('#displayed-text')
    }

    get howerElement() {
        return cy.get('.hover-content')
    }

    get topHrefOfHoveElement() {
        return cy.get('.hover-content hovered a[href="#top"]')

    }
    get reloadHrefOfHoveElement() {
        return cy.get('.hover-content hovered a[href="#top"]')

    }
    get coursesIframe() {
        return cy.get('#courses-iframe').its('0.contentDocument').should('exist')
    }
    get alert() {
        return new Promise(resolve => {
            cy.on('window:alert', (text) => {
              resolve(text);
            });
          });
    }


    switchToDefaultContent() {
        cy.switchTo('default')
    }
    selectOptionFromDropdown(index) {
        return cy.get('#dropdown-class-example').select(index)
    }
    fillNameField(text) {
        const field = cy.get('#name')
        field.clear();
        field.type(text);
        return this
    }
}

export default PractisePage