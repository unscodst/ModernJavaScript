// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks)
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click',removeTask);
    // Clear tasks event
    clearBtn.addEventListener('click',clearTasks);
    // Filter task event
    filter.addEventListener('keyup',filterTasks);
}

// Get Tasks from localStorage
function getTasks(e) {
    let tasks;

    // Check local storage for tasks. If tasks is null then set the local tasks to an empty array. Else set local tasks to what is inside the localStorage by parsing it from a string to an array.
    if(localStorage.getItem('tasks') === null) tasks = [];
    else tasks = JSON.parse(localStorage.getItem('tasks'))

    // Loop through the task list and make a list item for the task and then append it to the unordered-list
    tasks.forEach(function(task) {
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        // Add Class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);    
        // Append li to ul
        taskList.appendChild(li);
    })
}

// Add Task
function addTask(e) {
    if(taskInput.value === '') alert('Add a task');

    const li = document.createElement('li');

    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in localStorage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
    let tasks;

    // Check local storage for tasks. If tasks is null then set the local tasks to an empty array. Else set local tasks to what is inside the localStorage by parsing it from a string to an array.
    if(localStorage.getItem('tasks') === null) tasks = [];
    else tasks = JSON.parse(localStorage.getItem('tasks'))

    // Push the new task onto the tasks array.
    tasks.push(task);

    // Set tasks into localStrorage by stringifying it. We do this because localStorage only accepts strings and we want to save an array.
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
    console.log(e)
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm(`Do you want to remove ${e.target.parentElement.parentElement.innerText}?`))
        e.target.parentElement.parentElement.remove();

        // Remove from localStorage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
    e.preventDefault();
}

function removeTaskFromLocalStorage(taskItem) { 
    let tasks;

    // Check local storage for tasks. If tasks is null then set the local tasks to an empty array. Else set local tasks to what is inside the localStorage by parsing it from a string to an array.
    if(localStorage.getItem('tasks') === null) tasks = [];
    else tasks = JSON.parse(localStorage.getItem('tasks'))

    tasks.forEach(function(task,index) {
        if(taskItem.textContent === task) tasks.splice(index, 1);
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))

}

// Clear Tasks
function clearTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // Clear tasks from localStorage
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() { 
    localStorage.clear()
}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1) task.style.display = 'block';
            else task.style.display =  'none';
    });

}