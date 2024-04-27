// Question 1:

console.log('A');

setTimeout(function() {
    console.log('B');
}, 1000);

['T', 'T'].forEach(function(item) {
    console.log(item);
});

console.log('C');

for(var i = 0; i < 3; i++) {
    console.log('D');
}

console.log('E');

// Question 2:

console.log('A');

setTimeout(function() {
    console.log('B');
}, 2000);

console.log('C');

setTimeout(function() {
    console.log('D');
}, 1000);

for(var i = 0; i< 10; i++) {
    console.log('E')
}

console.log('F');

// Question 3:

function fn1() {
    fn2();
    console.log('C');
}

function fn2() {
    fn3();
    console.log('B');
}

function fn3() {
    console.log('A');
}

fn1();


// Question 4:

function fn1() {
    console.log('C');
    fn2();
}

function fn2() {
    console.log('B');
    fn3();
}

function fn3() {
    console.log('A');
}

fn1();

console.log('D');
