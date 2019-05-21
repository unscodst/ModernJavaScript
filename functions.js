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
const todo =  {
    add: function () {console.log('Add todo..');},
    edit: function(id) { console.log(`Edit todo ${id}`)}
}
todo.delete = function() {
    console.log('Delete todo..')
}

todo.add();
todo.edit(22);
todo.delete();