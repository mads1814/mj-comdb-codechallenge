export class EditComputer {
    constructor() {
        this.newName = 'HactarAC';
        this.introducedDate = '1994-03-23';
        this.discontinuedDate = '2006-08-13';
        this.companyIndex = '8';
        this.nameElement = '#name';
        this.introducedElement = '#introduced';
        this.discontinuedElement = '#discontinued';
        this.companyDropdownElement = '#company';
        this.saveComputerButton = '.primary';
        this.successMessageElement = '.alert-message.warning';
        this.errorMessageElement = '.error > .input > .help-inline';
        this.successMessage = 'Done !  Computer ' + this.newName + ' has been updated';
        this.errorMessage = 'Failed to refine type : Predicate isEmpty() did not fail.';
        this.baseUrl = 'https://computer-database.gatling.io/computers';
        this.firstRowElement = 'tbody > :nth-child(1) > :nth-child(1)';
        this.computerToEditElement = '#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a';

    }
    get enterName() {
        return cy.get(this.nameElement).type(this.newName);
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
    get saveThisComputer() {
        return cy.get(this.saveComputerButton).click();
    }

    openEditComputerForm() {
        cy.get(this.firstRowElement).should('be.visible');
        cy.get(this.computerToEditElement).click();
        cy.url().should('eq', this.baseUrl + '/66');
    }
    editComputerWithValidData() {
        cy.get(this.nameElement).clear();
        this.enterName;
        cy.get(this.introducedElement).clear();
        this.enterIntroducedDate;
        cy.get(this.discontinuedElement).clear();
        this.enterDiscontinuedDate;
        this.enterCompany;
        this.saveThisComputer;
        cy.get(this.successMessageElement).should('be.visible');
        cy.get(this.successMessageElement).invoke("text")
            .should('be.eq', this.successMessage);
    }
    editComputerWithInvalidData() {
        cy.get(this.nameElement).clear();
        this.saveThisComputer;
        cy.get(this.errorMessageElement).invoke("text")
        .should('be.eq', this.errorMessage);
        cy.url().should('eq', this.baseUrl + '/66');
    }
}