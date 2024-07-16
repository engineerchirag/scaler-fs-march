// Question 1:

/////// Before

var result = sum(1, 2);
console.log(result);

function sum(a, b) {
    var total = a +  b;
    return total;
}

/////// After

var result;
function sum(a, b) {
    var total = a +  b;
    return total;
}

result = sum(1, 2);
console.log(result);


// Question 2:

/////// Before

var result = sum(1, 2);
console.log(result);

var sum = function(a, b) {
    var total = a +  b;
    return total;
}

/////// After

var result;
var sum;

result = sum(1, 2); // error - undefined is not a function
console.log(result);

sum = function(a, b) {
    var total = a +  b;
    return total;
}

// Question 3:

function sum(a, b) {
    total = a +  b;
    return total;
}

var result = sum(1, 2);
console.log(result, total); // A: 3  B: 3 (global declaration)


// Question 4:

////// Before
function sum(a, b) {
    let total = a +  b;
    return total;
}
console.log(result, sum); // result? sum?
let result = sum(1, 2);

///// After

function sum(a, b) {
    let total = a +  b;
    return total;
}

console.log(result, sum);
let result = sum(1, 2);




// Question:

let result = sum(1, 2);
console.log(result);

let sum = function(a, b) {
    var total = a +  b;
    return total;
}
