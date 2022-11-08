//import { defineConfig} from "../../../cypress.config";
export class FilterComputer {
    constructor(){
        this.computerName = ['ENIAC', 'Cray', 'RandomPC'];
        this.headerTextMessage = ['One computer found', '16 computers found', 'No computer'];
        this.searchBoxElement = '#searchbox';
        this.filterByNameButton = '.primary';
        this.headerComputerElement = '#main > h1';
        this.headerNoComputerElement = '.well';
        this.firstItemFromResult = 'tbody > :nth-child(1) > :nth-child(1)';
        this.baseUrl = 'https://computer-database.gatling.io/computers';
        this.headerNoComputerText = 'Nothing to display';
    }
    get searchBox() {
        return cy.get(this.searchBoxElement);
    }
    get filterThisComputer() {
        return cy.get(this.filterByNameButton).click();
    }
    filterComputerWithExactName() {
        this.searchBox.type(this.computerName[0]);
        this.filterThisComputer;
        cy.url().should('eq', this.baseUrl + '?f=' + this.computerName[0]);
        cy.get(this.headerComputerElement).should('be.visible');
        cy.get(this.headerComputerElement).invoke("text").should('be.eq', this.headerTextMessage[0]);
        cy.get(this.firstItemFromResult).invoke("text").should('be.eq', this.computerName[0]);
    }
    filterComputerWithSimilarName() {
        this.searchBox.type(this.computerName[1]);
        this.filterThisComputer;
        cy.url().should('eq', this.baseUrl + '?f=' + this.computerName[1]);
        cy.get(this.headerComputerElement).should('be.visible');
        cy.get(this.headerComputerElement).invoke("text").should('be.eq', this.headerTextMessage[1]);
        cy.get(this.firstItemFromResult).invoke("text").should('contains', this.computerName[1]);
    }
    filterComputerNotFound() {
        this.searchBox.type(this.computerName[2]);
        this.filterThisComputer;
        cy.get(this.headerNoComputerElement).invoke("text").should('be.eq', this.headerNoComputerText);
        cy.url().should('eq', this.baseUrl + '?f=' + this.computerName[2]);
        cy.get(this.headerComputerElement).invoke("text").should('be.eq', this.headerTextMessage[2]);
    }
}