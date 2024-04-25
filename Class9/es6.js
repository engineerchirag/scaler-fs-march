// Default Arguments

function sum(a, b=0) {
    return a + b;
}

console.log(sum(1)); // 1

console.log(sum(1, 2)); // 3

// Array

var arr1 = [1,2,3];
var arr2 = arr1;

arr2[0] = 10;

console.log(arr1, arr2); // [10, 2, 3] [10, 2, 3]


// Avoid arr1 to be changed

var arr1 = [1,2,3];
var arr2 = arr1.slice(); // [...arr1]

arr2[0] = 10;

console.log(arr1, arr2); // [10, 2, 3] [10, 2, 3]

