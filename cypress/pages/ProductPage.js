import BasePage from '../support/BasePage';
import CartComponent from '../components/CartComponent';

class ProductPage extends BasePage {
    
    constructor() {
        super();
        this.cart = new CartComponent();
    }

   getProductDetailsByPosition(position){
    return this.getElementByXpath(`(//a[contains(@href,'product_details')])[${position}]`);
   }  

    navigateToProductDetails(position) {
        this.getProductDetailsByPosition(position).click();
    }

   
}

export default ProductPage;
