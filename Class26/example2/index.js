const person1 = {
    name: 'Vishal',
    age: 25,

    printNameAndAge: function(location, isMarried) {
        console.log(this, location, isMarried);
    },
};

const person2 = {
    name: 'Rishabh',
    age: 30
};

person1.printNameAndAge('New York', false); // p1

person1.printNameAndAge.call(person2, 'San Francisco', true); // p2

person1.printNameAndAge.apply(person2, ['San Francisco', true]); // p2

person1.printNameAndAge('New York', false); // p1



const alice = {
    name: 'Alice',
    age: 30,
    introduce: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};

const intro = alice.introduce.bind(alice);
intro(); // alice







