import { AddComputer } from "../../support/pageObject/addComputerPage.js"

describe('Add a new computer', () => {
  
  beforeEach(() => {
    cy.visit('/')
    addNewComputer.openAddComputerForm();
  })
  
  const addNewComputer = new AddComputer();

  it('Verify creation of new computer is successful with ONLY required information', () => {
    addNewComputer.addNewComputerWithRequiredOnly();
  })
  it('Verify creation of new computer is successful with ALL details', () => {
    addNewComputer.addNewComputerWithAllDetails();
  })
  it('Verify creation of new computer is NOT successful with EMPTY information', () => {
    addNewComputer.addNewComputerWithoutInfo();
  })
})