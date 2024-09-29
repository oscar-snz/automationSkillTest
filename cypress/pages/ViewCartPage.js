import BasePage from '../support/BasePage';

class ViewCartPage extends BasePage {
    
    constructor() {
        super();
    }
    
    getProceedToCheckoutButton(){
        return this.getElementByXpath("//a[contains(text(),'Checkout')]");
    }     

    navigateToProductDetails(position) {
        this.getElementByXpath(`(//a[contains(@href,'product_details')])[${position}]`).click();
    }

    proceedToCheckout() {
        this.getProceedToCheckoutButton().click();
    }

}

export default ViewCartPage;
