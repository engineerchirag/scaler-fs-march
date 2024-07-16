// Eg: 1

let arr = [1, 2, 3, 4, 5];

function sum(arr1) {
    // code goes here
    let total = 0;
    // Imperative Code
    // for(let i = 0; i < arr1.length; i++) {
    //     total += arr1[i];
    // }

    // Declarative Code
    arr1.forEach(function(item, idx) {
        total += item;
    }); 

    return total;
}

sum(arr); // 15

// Eg: 2

function double(arr1) { // [1, 2, 3, 4, 5]
    // code goes here

    // const result = [];
    // arr1.forEach(function(item, idx) {
    //     result.push(item*2);
    // });

    // Alternative option is map function
    // 1. Returns an new array of same size as input
    const result = arr1.map(function(item, idx) { 
        return item * 2;
    });


    return result;
}

double(arr); //  [2, 4, 6, 8, 10]

// Eg: 3

let arr2 = ['Dave', 'Vishal', 'Sarkar', 'Tapi', 'Jana', 'Saxena'];

function toUpperCase(arr) {
    // code goes here
    return arr.map(function (item, idx) {
        return item.toUpperCase();
    });
}

toUpperCase(arr2); // ['DAVE', 'VISHAL', 'SARKAR', 'TAPI', 'JANA', 'SAXENA'];

// Eg: 4

let arr3 = [1,2,3,4,5,6,7,8];

function filterEvenNumbers(arr) {
    // code goes here

    // forEach
    // map x

    // const result = [];
    // arr.forEach(function(item, idx) {
    //     if (item % 2 === 0) {
    //         result.push(item);
    //     }
    // });
    // return result;

    // Alternative using filter
    // Returns an new array with subset of input array

    const result = arr.filter(function(item, idx) {
        return item % 2 === 0;
    })
    return result;
}

filterEvenNumbers(arr3); // [2,4,6,8];


// Eg: 4

let arr4 = [-1,2,-3,4,-5,6,7,-8];

function getPositiveNumbers(arr) {
    // code gies here
    return arr4.filter(function(item, idx) {
        return item > 0;
    })
}

getPositiveNumbers(arr4) // [2,4,6,7];

// Eg: 5

let arr5 = [{ amount: 100}, { amount: 200}, { amount: 500}, { amount: 700}];

function accountSummary(arr) {
    // code goes here
    // let result = 0;
    // arr5.forEach(function(item, idx) {
    //     result += item.amount;
    // });

    // return result;

    // Alternative is reduce
    // 1. Accumulation 2. Transformation

    arr.reduce(function(acc, item, idx) {
        acc += item.amount;
        return acc;
    }, 0);


}

accountSummary(arr5) // 1500


// Eg: 6

const letters = ['C', 'H' ,'A', 'M' , 'P', 'S'];

function combineLetters(arr) {
    // code goes here

    const result = arr.reduce(function(acc, item, idx) {
        return acc + item;
    }, '');

    return result;
}

combineLetters(letters) // CHAMPS