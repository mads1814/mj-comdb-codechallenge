# Computer Database QA Coding challenge
This project contains simple set of automated tests for testing  [Computer Database webpage](https://computer-database.gatling.io/computers) using Cypress. 

## Acceptance Criteria

Write at least two test scenarios for following features:
* Add a new computer
* Filter by name
* Edit Computer

## Tools
* Cypress

## Prerequisites
To check if you already have Node.js and npm installed and check the installed version, run the following commands:

`node -v` or `node --version`

`npm -v` or `npm --version`

* Required Node.js 12 or 14 and above ([Downloading and Installing of Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))

## Install Cypress
To install Cypress using the npm (Node package manager) navigate to the project directory and execute the following command:

`npm init`

The command above creates the package.json file.

To install Cypress, type following into terminal:

`npm install cypress --save-dev`

## Test files and Page Objects
* Specs : All test files or specs (cypress terminology) are into this folder (../specs).
* support/pageObject : All Page Object files are under this folder (../support/pageObject).
* Videos : Videos for each test file can be found in videos folder.

## How to Run tests
There are two ways you can run tests via CLI and from cypress GUI
### 1. Running tests from CLI
To run all tests, type following in terminal:

`npx cypress run`

To run individual tests, type following in terminal:

`npx cypress run --spec .\cypress\e2e\specs\filename.cy.js`

To run tests from specific browser, type following in terminal:

`npx cypress run -b chrome --headless`

Test results will be available in GUI.

### 2. Running tests from Cypress GUI
To run tests from GUI follow the below mentioned steps:
1. Open cypress GUI by typing following command in terminal:
`npx cypress open`, GUI opens
2. Select E2E Testing
3. Select a Browser
4. Select all or single test to run

Test results will be available in GUI.




   
