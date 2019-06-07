document.querySelector('.title').textContent = 'Built in Constructors';

// // String
// const name1 = 'Jeff'; // Primitive value
// const name2 = new String('Jeff'); // Returns an object

// name2.foo = 'bar'; // Adds a property called foo with a value of bar to name2


// // Return no because name2 is Jeff but the type is not a string, it's an object
// if(name2 === 'Jeff') {
//     console.log('YES')
// } else {
//     console.log('NO');
//     console.log(typeof name2);
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);
// console.log(num1, typeof num1);
// console.log(num2, typeof num2);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);
// console.log(bool1, typeof bool1);
// console.log(bool2, typeof bool2);

// // Function
// const getSum1 = function(x, y) {
//     return x + y;
// }

// const getSum2 = new Function('x', 'y', 'return 1 + 1');
// console.log(getSum2(1,1))

// // Object
// const john1 = {name: "John"};
// const john2 = new Object({name: "John"});
// console.log(john2);

// // Arrays
// const arr1 = [1,2,3];
// const arr2 = new Array(1,2,3);
// console.log(arr2);

// // Regular Expressions
// const reg1 = /\w+/;
// const reg2 = new RegExp('\\w+');
// console.log(reg2)

