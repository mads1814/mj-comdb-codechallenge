import { EditComputer } from "../../support/pageObject/editComputerPage.js"
import { FilterComputer } from "../../support/pageObject/filterComputerPage.js"

describe('Edit an existing computer', () => {
  const editComputer = new EditComputer();
  const filterComputer = new FilterComputer();
    beforeEach(() => {
      cy.visit('/')
      //cy.get('#searchbox').should('be.visible');
      filterComputer.filterComputerWithExactName();
      editComputer.openEditComputerForm();
    })
    it('Verify editing of computer is successful', () => {
      editComputer.editComputerWithValidData();
    })
    it('Verify editing of computer is NOT successful with EMPTY computer name', () => {
      editComputer.editComputerWithInvalidData();
    })
  })