class Bird {
    #breed;
    constructor(breed, name) {
        this.#breed = breed;
        this.name = name;
    }

    fly() {
        console.log('It can fly');
    }

    getDescription() {
        console.log(`${this.name} is a bird of breed ${this.#breed}`)
    }
}

class Pengiun extends Bird{
    constructor(country, breed, name) {
        super(breed, name)
        this.country = country;
    }

    fly() {
        console.log('It can\'t fly');
    }
}

const MyPengiun = new Pengiun('India', 'X', 'Sweetu');

