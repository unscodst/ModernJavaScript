// const matthew = {
//     name: 'Matthew',
//     age: 28
// }

// console.log(matthew);
// console.log(matthew.age);

// Constructor Function

// Person Constructor - Should start with a capital

function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    // console.log(this);
}

// Instantiate an Object
// const matthew = new Person('Matthew',28);
// const john = new Person('John', 30);

// console.log(matthew);

const matthew = new Person('Matthew', '9-10-1981');
console.log(matthew.calculateAge());