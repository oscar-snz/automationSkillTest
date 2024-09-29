import BasePage from '../support/BasePage';


class HomePage extends BasePage {
    constructor() {
        super();

    }

    getProductsSection() {
        return cy.get('a[href="/products"]');

    }

    goToProducts() {
        this.getProductsSection().click();
    }
}

export default HomePage;
