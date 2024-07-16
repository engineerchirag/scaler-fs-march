console.log('1');

function getTotal(a,b) {
    console.log('2');
    return a + b;
}

function sum(a,b) {
    console.log('3');
    return getTotal(a, b);
}

sum(1,2);

console.log('4');