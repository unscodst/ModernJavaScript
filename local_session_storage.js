// Set local storage item - stays until you manually clear it in the settings
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set session storage item - stays until you close the browser
// sessionStorage.setItem('name', 'Beth');

// remove item from storage
// localStorage.removeItem('name');

// get item from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear();

// console.log(name,age)

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const task = document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('Task Saved')
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
    console.log(task);
});