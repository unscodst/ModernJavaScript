// FUNCTION DECLARATIONS
// function great(firstName = 'John', lastName = 'Doe') {
//     //console.log('Hello');
//     return 'Hello ' + firstName + ' ' + lastName;
// }
// console.log(great());

// FUNCTION EXPRESSIONS
// const square = function(x = 3){
//     return x * x;
// };

// console.log(square(8));

// IMMIDIATLY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// (function(name){
//     console.log('IFFE Ran..')
//     console.log('Hello ' + name)
// })('Brad');

// PROPERTY METHODS
numbers = [2,3]
const todo =  {
    add: todoAdd(numbers),
    edit: function(id) { console.log(`Edit todo ${id}`)}
}
todo.delete = function() {
    console.log('Delete todo..')
}
function todoAdd(numbers) {
    console.log('Add todo..');
    console.log(numbers[0] + numbers[1])
}
// todo.add();
todo.edit(22);
todo.delete();