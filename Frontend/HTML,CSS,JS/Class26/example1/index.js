let a = [1,2,3,4];

// Returns a new array of same length

function myMap(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

// myMap(a, (item) => item * 2);

Array.prototype.myMap = function(callback) {
    const arr = this;
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

a.myMap((item) => item * 2); // [2,4,6,8]

let b = [2,3,4];

b.myMap((item) => item / 2); // [2,4,6,8]


// Polyfill for myFilter
// returns new array with subset based on condition

a.myFilter(item => item % 2 === 0);

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(callback) {
        const arr = this;
        let newArr = [];
        for(let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
    
}


// myReduce
// Acculation, transformation

// Acculation

let c = [12,3,40]; // Base: 0
let d = ['Ram', 'Shyam', 'Jana']; // Ram,Shyam,Jana > Base: ""

c.reduce((acc, item, idx) => {
    acc += item;
    return acc;
}, 0); // 55

let arr = [{ type: 'Credit', value: 100}, { type: 'Debit', value: 400}, { type: 'Credit', value: 300}];

// {
//     Credit: [{ type: 'Credit', value: 100}, { type: 'Credit', value: 300}],
//     Debit: [{ type: 'Debit', value: 400}]
// }

arr.reduce((acc, item) => {
    if (!acc[item.type]) {
        acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc; // {}
}, {});

// Polyfill for MyReduce