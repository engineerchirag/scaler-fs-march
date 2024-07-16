class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} ----`;
    }
}

class Dog extends Animal{
    constructor(breed, name) {
        super(name);
        this.breed = breed;
    }
}

const Dog1 = new Dog('X', 'Tommy');