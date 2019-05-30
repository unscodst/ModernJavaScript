// document.getElementById();
let val;

// const taskTitle = document.getElementById('task-title');

// // Get things from the element
// val = taskTitle.id;
// val = taskTitle.className;

// // Change styling
// val = taskTitle.style.background = '#333';
// val = taskTitle.style.color = '#fff';
// val = taskTitle.style.padding = '5px';

// // Change content
// val = taskTitle.textContent = 'Task List';
// val = taskTitle.innerText = 'My Tasks';
// val = taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//const taskQuery = document.querySelector('#task-title');
let elementTag;

let taskQuery = function(elementTag){
   return document.querySelector(elementTag);
}


elementTag = '#task-title';
elementTag = '.card-title';
elementTag = 'h5';
elementTag = 'li';
val = taskQuery(elementTag).style.color = 'red';

elementTag = 'ul li';
val = taskQuery(elementTag).style.color = 'blue';

elementTag = 'li:last-child';
val = taskQuery(elementTag).style.color = 'red';

elementTag = 'li:nth-child(3)';
val = taskQuery(elementTag).style.color = 'yellow';

elementTag = 'li:nth-child(4)';
val = taskQuery(elementTag).textContent = 'Hello World';

elementTag = 'li:nth-child(odd)';
val = taskQuery(elementTag).style.background = '#ccc';

elementTag = 'li:nth-child(even)';
val = taskQuery(elementTag).style.background = '#ddd';


console.log(val)