function compute(fn, a, b) {
    return fn(a, b);
}

function sum(a, b) {
    return a + b;
}

const total = compute(sum, 100, 300); //callback






