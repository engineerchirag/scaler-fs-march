console.log('1');

setTimeout(() => {
    console.log('2')
}, 1000);

setTimeout(() => {
    console.log('3')
});

for(var i = 0; i < 3; i++) {
    console.log('4');
}

console.log('5');

setTimeout(() => {
    console.log('6')
}, 0);