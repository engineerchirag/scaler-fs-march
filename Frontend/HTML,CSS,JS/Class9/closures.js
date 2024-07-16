function global(a) {
    var g = 'g';
    function outer(b) {
        var o = 'o';
        function inner(c) {
            var i = 'i';
        }
    }
}

// Question 1:

function x() {
    var outer = 'outer';
    return function() {
        console.log(outer);
    }
}

const innerFn = x();
console.log(innerFn);
console.log(innerFn());

// Question 2:

function x(a) {
    function y(b) {
        return a + b;
    }

    return y;
}

const innerFn = x(1);
console.log(innerFn(2));

// Question 3:

console.log(multiply(1)(2)(3)); // 6

function multiply(x) {
    // code goes here
    return function (y) {
        return function (z) {
            return x * y * z;
        }
    }
}

console.log(multiply(1)(2));  // ??


// Question 4:

function memoizeFn(x) {
    // code goes here
    return function(y) {
        return x + y;
    }
}

const sum10 = memoizeFn(10);

sum10(1); // 11
sum10(2); // 12
sum10(3); // 13

const sum15 = memoizeFn(15);

sum15(1); // 16
sum15(2); // 17
sum15(3); // 18



// Question 5:

function counter(x) {
    // code goes here
    let y = x;
    return function() {
        y = y + 1;
        return y;
    }
}

const countInc = counter(10);

countInc(); // 11
countInc(); // 12
countInc(); // 13
countInc(); // 14