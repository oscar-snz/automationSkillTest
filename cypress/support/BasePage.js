require('cypress-xpath');

class BasePage {
    navigate(path = '/') {
        cy.visit(path); 
    }

    getElement(selector) {
        return cy.get(selector);
    }
    
    getElementByXpath(selector){
        return cy.xpath(selector);
    }

    clickElement(selector) {
        this.getElement(selector).click();
    }

    typeText(selector, text) {
        this.getElement(selector).clear().type(text);
    }

    waitForElement(selector, timeout = 10000) {
        return cy.get(selector, { timeout });
    }

    waitForXpathElement(selector, timeout=10000){
        return cy.xpath(selector, {timeout});
    }
}

export default BasePage;
