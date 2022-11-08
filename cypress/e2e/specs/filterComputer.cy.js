import { FilterComputer } from "../../support/pageObject/filterComputerPage.js"

describe('Filter computer by name', () => {
  
    beforeEach(() => {
      cy.visit('/')
      cy.get(filterComputer.searchBoxElement).should('be.visible');
    })
    
    const filterComputer = new FilterComputer();

    it('Verify filtering of computer by EXACT name', () => {
      filterComputer.filterComputerWithExactName();
    })
    it('Verify filtering of computer by SIMILAR name', () => {
      filterComputer.filterComputerWithSimilarName();
    })
    it('Verify filtering of computer NOT FOUND', () => {
      filterComputer.filterComputerNotFound();   
    })
})