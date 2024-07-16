// Implement a polyfill of forEach

const numbers = [1, 2, 3, 4, 5];

const multiplier = 2;

const multiply = function(element) {
    console.log(element * multiplier);
}

numbers.forEach(function (element) {
    multiply(element);
});

const obj = {
  multiplier: 2,
  multiply(element) {
    console.log(element * this.multiplier);
  },
};
let cb = function (element, idx, arr) {
    this.multiply(element);
  };

numbers.forEach(cb, obj);

// Iterate through all items and execute the callback


if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(cb, thisArgs) {
        console.log(thisArgs); // obj
        let arr = this;
    
        for(let i = 0; i < arr.length; i++) {
            cb.call(thisArgs, arr[i], i, arr);
            // cb.apply(thisArgs, [arr[i], i, arr]);
        }
    }
}


// Polyfill for map


Array.prototype.map = function(cb, thisArgs) {
    const arr = this;

    const result = [];

    for(let i = 0; i < arr.length; i++) {
        result.push(cb.call(thisArgs, arr[i], i, arr));
    }

    return result;
}