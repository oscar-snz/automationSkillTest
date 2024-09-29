import BasePage from '../support/BasePage';
import Helpers from '../support/Helpers'; // Importar Helpers
import CartComponent from '../components/CartComponent';

class ProductDetailsPage extends BasePage {
    
    constructor() {
        super();
        this.cart = new CartComponent();
    }

  
    getQuantityInput() {
        return this.getElement('#quantity');
    }

    getAddToCartButton() {
        return this.getElement('.btn.btn-default.cart');
    }

    getAddedToCartModal(){
        return this.getElementByXpath("//div[@id='cartModal']//div[@class='modal-content']")
    }

    getViewCartLink(){
        return this.getElementByXpath("//div[@id='cartModal']//a[@href='/view_cart']");
    } 

    navigateToViewCart(){
       this.getViewCartLink().click();
    }

    addToCart() {
        const quantity = Helpers.generateRandomNumber(1, 20); 
        this.getQuantityInput().clear().type(quantity);
        this.getAddToCartButton().click();
    }
}

export default ProductDetailsPage;
