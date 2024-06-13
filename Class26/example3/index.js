let car = {
  name: "Mercedes",
  color: "White",
};

function buyCar(price) {
  console.log(`I bought a ${this.color} ${this.name} of ${price} `);
}

buyCar.call(car); // car.buyCar();

Function.prototype.call = function(context, ...args) {

    const fn = this; // buyCar

    context.fn = fn; // car.buyCar = buyCar;
    context.fn(...args); // car.buyCar(...args);
}


Function.prototype.apply = function(context, argsArray) {

    const fn = this; // buyCar

    context.fn = fn; // car.buyCar = buyCar;
    context.fn(...argsArray); // car.buyCar(...args);
}


Function.prototype.bind = function(context, ...argsArray) { 
    const fn = this;
    return function(...args) {
        return fn.call(context, ...argsArray, ...args);
    }
}




