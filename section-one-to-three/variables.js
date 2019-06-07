// // var, let, const
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name)

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number
// // Multi word vars
// var firstName = 'Sara'; // Camel
// var first_name = 'Caitlin'; // Underscore
// var FirstName = 'Sam'; // Pascal

// LET
// let name; 
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
const name = 'John';
console.log(name);
// Can't Reassign
// name = 'Sara';
// console.log(name);
// Have to assign value
// const greeting; -- Doesn't work
const person = {
    name: 'John',
    age: 30
}
console.log(person);
person.name = 'Sara';
console.log(person);

const numbers = [1,2,3,4];
console.log(numbers);
numbers.push(5,6,7);
console.log(numbers);
