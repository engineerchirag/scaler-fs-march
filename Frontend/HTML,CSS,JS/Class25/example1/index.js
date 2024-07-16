class Bird {
    #breed;
    constructor(breed, name) {
        this.#breed = breed;
        this.name = name;
        this.fly = function () {
            console.log('It can fly');
        }
    }

    getDescription() {
        console.log(`${this.name} is a bird of breed ${this.#breed}`)
    }
}

const Pengiun = new Bird('X', 'Pengiun');
console.log(Pengiun.name);
console.log(Pengiun.#breed);


function Bird() {
    this.breed = breed;
    this.name = name;
    this.fly = function () {
        console.log('It can fly');
    }
}

Bird.prototype.getDescription = function() {
    console.log(`${this.name} is a bird of breed ${this.breed}`)
}

const Bird = {
    breed: 'X',
    name: 'Pengiun',
    fly: function() {},
    getDescription: function() {
        console.log(`${this.name} is a bird of breed ${this.breed}`)
    }
};


let Bird = Object.create({
    breed: 'X',
    color: 'white',
    fly: function() {},
    getDescription: function() {
        console.log(`${this.name} is a bird of breed ${this.breed}`)
    }
});


Object.defineProperty(Bird, 'name', {
    value: 'Pengiun',
    configurable: true,
    enumerable: true,
    writable: true
});