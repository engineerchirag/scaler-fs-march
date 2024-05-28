const marriage = {
    name: "Bandi Rakesh",
    age: 30,
    company: 'Microsoft',
    city: 'Bangalore',
    getDetails: function() {
        console.log(this);
    }
};

function Person(name, age, company, city) {
    this.name = name;
    this.age = age;
    this.company = company;
    this.city = city;
    this.getDetails = function() {
        console.log(this);
    }
}

const p1 = Person("Bandi Rakesh", 30, 'Microsoft', 'Bangalore');
// const p2 = Person("Rishabh Sharma", 28, 'Google', 'Bangalore');

console.log(p1);