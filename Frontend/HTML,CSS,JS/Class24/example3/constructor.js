function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} ---`;
}


function Dog(breed, name) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

const Dog1 = new Dog('X', 'Pappu');
