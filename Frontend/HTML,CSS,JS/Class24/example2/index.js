// Class
class Car1 {
    constructor(color, model, price) {
        this.color = color;
        this.model = model;
        this.price = price;
        // this.getTotalPrice = function(taxP) {
        //     return this.price + this.price * taxP * 0.01;
        // }
    }

    getTotalPrice(taxP) {
        return this.price + this.price * taxP * 0.01;
    }
}

const BMW1 = new Car1('red', 'X', 1000000);
// const Mercedes1 = new Car1('black', 'Y', 1500000);

console.log(BMW1.getTotalPrice(28));
// console.log(Mercedes1.getTotalPrice(28));


// Constructor function - Car (color, model, price, getTotalPrice)

function Car(color, model, price) {
    this.color = color;
    this.model = model;
    this.price = price;
    // this.getTotalPrice = function(taxP) {
    //     return this.price + this.price * taxP * 0.01;
    // }
}

Car.prototype.getTotalPrice = function(taxP) {
    return this.price + this.price * taxP * 0.01;
}


const BMW = new Car('red', 'X', 1000000);
const Mercedes = new Car('black', 'Y', 1500000);

console.log(BMW.getTotalPrice(28));
console.log(Mercedes.getTotalPrice(28));