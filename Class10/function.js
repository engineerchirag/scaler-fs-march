
// Eg: 1
var x = 1, y = 2;
function sum(a, b) {
    return a + b;
}
console.log(sum(x, y));

// Eg: 2

var z = [1, 2];
function total(arr) {
    return arr[0] + arr[1];
}

z[0] = 10;
console.log(total(z));

// Eg: 3
var x = 1, y = 2;
function sum(a, b) {
    a = 10;
    return a + b;
}
// Pass by value
console.log(sum(x, y)); // A: 12
console.log(x, y); // B: 1, 2


// Eg: 4

var z = [1, 2];
function total(arr) {
    arr[0] = 10;
    return arr[0] + arr[1];
}

// Pass by reference
console.log(total(z));  // A: 12
console.log(z); // B: [10, 2]

// Eg: 5

var x = 1, y = 2;
function sum(a, b) {
    a = 10;
    return a + b;
}

// Pure Function
console.log(sum(x, y)); // 12
console.log(sum(x, y)); // 12
console.log(sum(x, y)); // 12
console.log(sum(x, y)); // 12
console.log(sum(x, y)); // 12
console.log(sum(x, y)); // 12

// Eg: 6

let count = 0;
function counter() {
    count++;
    return count;
}

// Impure Function
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4


// Eg: 7

function compute(fn, a, b) {
    return fn(a, b);
}

function sum(x, y) {
    return x + y;
}

function subtract(x, y) {
    return y - x;
}

// Pass functions as argument in JS
console.log(compute(sum, 2, 3)); // 5
console.log(compute(subtract, 2, 3)); // 1

// Eg: 8

function x (a) {
    return function (b) {
        return a + b;
    }
}

// Function can return another function
console.log(x(1)(2));






