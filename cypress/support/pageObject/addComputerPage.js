const faker = require("faker");
export class AddComputer {
    constructor(){
        this.computerName = faker.name.firstName();
        this.introducedDate = '1994-03-23';
        this.discontinuedDate = '2006-08-13';
        this.companyIndex = '8';
        this.nameElement = '#name';
        this.introducedElement = '#introduced';
        this.discontinuedElement = '#discontinued';
        this.companyDropdownElement = '#company';
        this.createComputerButton = '.primary';
        this.addNewComputerButton = '#add';
        this.successMessageElement = '.alert-message.warning';
        this.errorMessageElement = '.error > .input > .help-inline';
        this.successMessage = 'Done !  Computer ' + this.computerName + ' has been created';
        this.errorMessage = 'Failed to refine type : Predicate isEmpty() did not fail.';
        this.baseUrl = 'https://computer-database.gatling.io/computers';
    }
    get enterName() {
        return cy.get(this.nameElement).type(this.computerName);
    }
    get enterIntroducedDate() {
        return cy.get(this.introducedElement).type(this.introducedDate);
    }
    get enterDiscontinuedDate() {
        return cy.get(this.discontinuedElement).type(this.discontinuedDate);
    }
    get enterCompany() {
        return cy.get(this.companyDropdownElement).select(this.companyIndex).invoke('val')
        .should('eq', this.companyIndex);
    }
    get createThisComputer() {
        return cy.get(this.createComputerButton).click();
    }

    openAddComputerForm() {
        cy.get(this.addNewComputerButton).should('be.visible');
        cy.get(this.addNewComputerButton).click();
        cy.url().should('eq', this.baseUrl +'/new');
    }
    addNewComputerWithRequiredOnly() {
        this.enterName;
        this.createThisComputer;
        cy.get(this.successMessageElement)
        .should('be.visible');
        cy.get(this.successMessageElement)
        .invoke("text")
        .should('be.eq', this.successMessage);
    }
    addNewComputerWithAllDetails() {
        this.enterName;
        this.enterIntroducedDate;
        this.enterDiscontinuedDate;
        this.enterCompany;
        this.createThisComputer;
        cy.get(this.successMessageElement).should('be.visible');
        cy.get(this.successMessageElement).invoke("text")
        .should('be.eq', this.successMessage);
    }
    addNewComputerWithoutInfo(){
        this.createThisComputer;
        cy.get(this.errorMessageElement).invoke("text")
        .should('be.eq', this.errorMessage);
        cy.url().should('eq', this.baseUrl);
    }
}

