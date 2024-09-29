import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ViewCartPage from '../pages/ViewCartPage';
import RegisterLoginComponent from '../components/RegisterLoginComponent'

describe('E2E Test - Clothing Store', () => {
    const productPage = new ProductPage();
    const homePage = new HomePage();
    const productDetailsPage = new ProductDetailsPage();
    const viewCartPage = new ViewCartPage();
    const registerLoginComponent = new RegisterLoginComponent();

    it('Validate add product to cart and proceed to checkout while not logged in', () => {
        productPage.navigate('/');

        homePage.goToProducts();

        productPage.navigateToProductDetails("3");

        productDetailsPage.addToCart();

        productDetailsPage.navigateToViewCart();

        viewCartPage.proceedToCheckout();

        registerLoginComponent.getRegisterLoginModal().should('be.visible');

    });
});
