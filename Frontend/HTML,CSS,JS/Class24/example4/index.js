class Animal {
    constructor(name) {
        this.name = name;
        this.speak = function() {
            console.log('Animal - constructor')
        }
    }

    speak() {
        console.log('Animal prototype');
    }
}

class Dog extends Animal{
    constructor(breed, name) {
        super(name);
        this.breed = breed;
        this.speak = function(x) {
            console.log('Dog - constructor', x)
        }

    }

    speak(x, y) {
        console.log('Dog - prototype', x, y)
    }
}

const Dog1 = new Dog('X', 'Tommy');

