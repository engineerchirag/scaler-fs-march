// Question 1:
console.log('A');

setTimeout(function() {
    console.log('B');
}, 1000);

setTimeout(function() {
    console.log('C');
});

Promise
    .resolve()
    .then(() => console.log('D'));

console.log('E');

