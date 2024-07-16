console.log('1: ', this); //

function test() {
    return this;
}
console.log('2: ', test()); // crush > global

const obj = {
    name: "Suman Pathak",
    age: 60,
    getThis: function() {
        return this;
    }
}

console.log('3: ', obj.getThis()); // gf > obj

const getThisFn1 = obj.getThis;

console.log('4: ', getThisFn1()); // crush > global

const obj2 = {
    name: "Sweetee Kumari",
    age: 18,
    getThis: obj.getThis,
}

console.log('5: ', obj2.getThis()); // gf > obj2


const obj3 = {
    name: "Bandi Rakesh",
    age: 21,
    getThis: obj2.getThis,
}

console.log('6: ', obj3.getThis()); // gf > obj3


function getThisFn() {
    return this;
}

const obj4 = {
    name: "Smruthul",
    age: 21,
}

const obj5 = {
    name: "Bandi Rakesh",
    age: 24,
}

console.log('7: ', getThisFn()); // crush > global

obj4.getThisFn = getThisFn;

console.log('8: ', obj4.getThisFn()); // obj4

obj5.getThisFn = getThisFn;

console.log('9: ', obj5.getThisFn()); // obj5


console.log('10: ', obj5.getThisFn.call(obj4)); // obj4

console.log('11: ', obj5.getThisFn()) // obj5


console.log('12: ', getThisFn.apply(obj4)); // obj4


const getThisFnAfterMarriage = obj4.getThisFn.bind(obj5);

console.log('13: ', getThisFnAfterMarriage()); // obj5

console.log('14: ', getThisFnAfterMarriage.call(obj4)); // 

const obj6 = {
    name: "Rishabh Sharma",
    age: 28,
    getThis: getThisFnAfterMarriage,
}

console.log('15: ', obj6.getThis()); // obj5