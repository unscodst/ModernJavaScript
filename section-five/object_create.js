document.querySelector('.title').textContent = 'Object.create()';

const personPrototypes = {
    greeting: function() {
        return `Hello ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;
mary.getsMarried('Thompson');

console.log(mary);
console.log(mary.greeting());
const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Trav'},
    age: {value: 30}
});

console.log(brad);

console.log(brad.greeting(0))