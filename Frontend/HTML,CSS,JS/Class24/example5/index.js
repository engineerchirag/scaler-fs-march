// Method overriding
// Static
// Access Modifier

class Car1 {
    #owner;
    constructor(color, model, price, owner) {
        this.color = color;
        this.model = model;
        this.price = price;
        this.#owner = owner;
        this.getTotalPrice = function(taxP) {
            return this.price + this.price * taxP * 0.01;
        }
    }

    static DefaultTax = 10;
}

const BMW1 = new Car1('red', 'X', 1000000, 'XXXX');

console.log(Car1.DefaultTax);