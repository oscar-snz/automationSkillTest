import BasePage from '../support/BasePage';

class RegisterLoginModal extends BasePage {

getRegisterLoginModal(){
    return this.getElementByXpath("//div[@id='checkoutModal']//div[@class='modal-content']");
}

get RegisterLoginLink(){
    return this.getElementByXpath("//div[@id='checkoutModal']//a");
}

}

export default RegisterLoginModal;
