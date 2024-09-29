# Cypress E2E Test Suite

## Overview
This project contains End-to-End (E2E) test automation scripts using Cypress to automate user flows for the website [https://automationexercise.com](https://automationexercise.com). It includes tests for adding products to the cart, proceeding to checkout, and handling user registration or login modals.

## Prerequisites
Ensure you have the following software installed on your machine:
- **Node.js** (v12 or later)
- **npm** (v6 or later)

## Setup Instructions

### 1. Clone the Repository
Clone the project from the repository and navigate to the project directory:

git clone https://github.com/your-repo/your-project.git
cd your-project

### 2. Install Dependencies
Install all necessary dependencies using **npm**:

npm install


This command installs **Cypress**, **Mochawesome**, **Faker**, and other required dependencies.

### 3. Running Tests

#### Running in Interactive Mode
To open Cypress Test Runner in **interactive mode** (which opens the Cypress GUI and runs the tests in a browser):

npm run cypress:open

This will launch the Cypress GUI where you can manually select and run tests.

#### Running in Headless Mode
To execute tests in **headless mode** (which runs the tests in the background without opening a browser):

npm run cypress:run

This command will run all tests and generate test reports automatically.

### 4. Viewing Test Reports
The project uses **Mochawesome** to generate test reports in both JSON and HTML formats.

After running the tests, the reports will be generated in the `cypress/reports/mochawesome` directory.

#### Opening the report
You can open the generated HTML report manually by navigating to the directory:

open cypress/reports/mochawesome/mochawesome.html

Alternatively, you can use this command to automatically open the latest report:

npm run open:report


### 5. Generating Combined Reports
If you run multiple test suites and want to merge all reports into a single report, you can use **Mochawesome-merge** and **Mochawesome-report-generator**.

Run the following commands:

1. **Merge all JSON reports**:

npm run merge:reports

2. **Generate a combined HTML report**:

npm run generate:report


### 6. Environment Variables
The base URL for the website is configured in `cypress.config.js`. If you need to change the URL for different environments, you can modify the `baseUrl` in the config file directly.

Alternatively, you can run Cypress with a different base URL using environment variables:

BASE_URL=https://staging.automationexercise.com npm run cypress:run


### 7. Requirements
This project requires the following dependencies, which will be installed automatically through `npm install`:

- **cypress** (for end-to-end testing)
- **cypress-xpath** (to support XPath selectors in Cypress)
- **mochawesome** (to generate HTML and JSON test reports)
- **mochawesome-merge** (to merge multiple test reports)
- **mochawesome-report-generator** (to generate combined reports)

These dependencies are listed in the `package.json` file and will be installed when you run `npm install`.

### 8. Custom Scripts

The following scripts are available for easier management of test execution and reporting:


{
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "merge:reports": "mochawesome-merge cypress/reports/mochawesome/*.json > cypress/reports/mochawesome/mochawesome.json",
    "generate:report": "marge cypress/reports/mochawesome/mochawesome.json --reportDir cypress/reports/mochawesome",
    "open:report": "open cypress/reports/mochawesome/*.html"
  }
}


### 9. Troubleshooting
If you run into issues while running the tests, here are some steps you can take:

1. Ensure **Node.js** and **npm** are installed on your machine.
2. Make sure you’ve cloned the project and installed the dependencies correctly (`npm install`).
3. Verify that [https://automationexercise.com](https://automationexercise.com) is accessible.
4. Check the `cypress.log` file in the project directory for detailed logs of your test runs.

For more detailed debugging, you can use Cypress's built-in debugging tools in the GUI.

