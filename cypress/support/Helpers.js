class Helpers {

    static generateRandomNumber(min = 1, max = 20) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


export default Helpers;
