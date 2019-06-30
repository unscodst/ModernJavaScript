//#region sample module

// const greeting = 'Hello World';
// console.log(greeting);



// CommonJS Module Syntax
// const person = require('./module_1');
// console.log(person.name);

// ES 2015 Module
// import {person, sayHello} from './module_2';
// import * as mod from './module_2';
// import greeting from './module_2';
// console.log(greeting);

// console.log(mod.sayHello(), mod.person.age)
//#endregion
import { http } from './http';
import { ui } from './ui';
// Get Posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for Post Add
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for Delete
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for Edit State
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for Cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);


// Get posts from db.json API Call
function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(error => console.log(error));
}

// Submit posts to db.json API Call
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;
  if(title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger')
  } else {    
    const data = {
      title,
      body
    }
    if(id === ''){
      // Create Post
      http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post Added', 'alert alert-success');
        ui.clearInputs();
        getPosts();
      })
      .catch(error => console.log(error))
    } else {
      // Update Post
      http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
        ui.showAlert('Post Updated', 'alert alert-success');
        ui.changeFormState('add');
        getPosts();
      })
      .catch(error => console.log(error))
    }

  }
}

// Delete Post
function deletePost(e) {
  e.preventDefault();
  if(e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if(confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        ui.showAlert('Post Deleted', 'alert alert-success');
        getPosts();
      })
      .catch(error => console.log(error));
    }
  }
}

// Enable Edit State
function enableEdit(e) {
  e.preventDefault();
  if(e.target.parentElement.classList.contains('edit')){
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;
    
    const data = {
      id,
      title,
      body
    }

    // Fill form with selected post
    ui.fillForm(data);
  }
}

// Cancel Edit State
function cancelEdit(e) {
  e.preventDefault();
  if(e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
}

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');