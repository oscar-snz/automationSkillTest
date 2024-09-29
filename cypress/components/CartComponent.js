import BasePage from '../support/BasePage';

class CartComponent extends BasePage {

    getCheckoutButton() {
        return this.getElement('.btn-checkout');
    }

    proceedToCheckout() {
        this.getCheckoutButton().click();
    }
}

export default CartComponent;
