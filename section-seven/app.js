
//#region ES7 Async/Await
// async function myFunc() {
//     // return 'Hello';
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = false;
//     if(!error) {
//         const response = await promise; // Wait until promise is resolved
//         return response;
//     } else await Promise.reject(new Error('Something went wrong'))

// }
// myFunc()
// .then(response => console.log(response))
// .catch(error => console.log(error))

async function getUsers() {
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once it's resolved
    const data = await response.json();

    // Only proceed once the second promise is resolved.
    return data;
}

getUsers()
.then(users => console.log(users))


//#endregion

//#region Fetch Arrow Functions
// document.getElementById('button1').addEventListener('click', getText);
// document.getElementById('button2').addEventListener('click', getJson);
// document.getElementById('button3').addEventListener('click', getExternal);

// // Get local text file data
// function getText() {
//     fetch('test.txt')
//     .then(response => response.text())
//     .then(data => {
//         // console.log(data);
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch(error => console.log(error));
// };

// // Get local JSON data
// function getJson() {
//     fetch('post.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         let output = '';
//         data.forEach(post => {
//             output += `
//                 <li>${post.title}</li>
//             `;
//         });
//         document.getElementById('output').innerHTML = output;
        
//     })
//     .catch(error => console.log(error));
// }

// // Get from external API
// function getExternal() {
//     fetch('https://api.github.com/users/unscodst/repos')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         let output = '';
//         data.forEach(repo => {
//             output += `
//                 <li>${repo.name}</li>
//             `;
//         });
//         document.getElementById('output').innerHTML = output;
        
//     })
//     .catch(error => console.log(error));
// }

//#endregion

//#region Arrow Functions
// const sayHello = function() {
//     console.log('Hello')
// }

// const sayHello = () => {
//     console.log('Hello')
// }

// One line functon does not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// return object
// const sayHello = () => ({msg: 'Hello'});

// Single Parameter does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`)

// Multiple Parameters need parenthesis
// const sayHello = (fisrtName, lastName) => console.log(`Hello ${fisrtName} ${lastName}`);

// sayHello('Brad','Smith');

// const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// Shortest
// const nameLengths = users.map(name => name.length);

// console.log(nameLengths)

//#endregion

//#region Fetch API Sandbox
// document.getElementById('button1').addEventListener('click', getText);
// document.getElementById('button2').addEventListener('click', getJson);
// document.getElementById('button3').addEventListener('click', getExternal);

// // Get local text file data
// function getText() {
//     fetch('test.txt')
//     .then(function(response) {
//         return response.text();
//     })
//     .then(function(data) {
//         // console.log(data);
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(error) {
//         console.log(error)
//     });
// };

// // Get local JSON data
// function getJson() {
//     fetch('post.json')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         let output = '';
//         data.forEach(function(post) {
//             output += `
//                 <li>${post.title}</li>
//             `;
//         });
//         document.getElementById('output').innerHTML = output;
        
//     })
//     .catch(function(error) {
//         console.log(error)
//     });
// }

// // Get from external API
// function getExternal() {
//     fetch('https://api.github.com/users/unscodst/repos')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         let output = '';
//         data.forEach(function(repo) {
//             output += `
//                 <li>${repo.name}</li>
//             `;
//         });
//         document.getElementById('output').innerHTML = output;
        
//     })
//     .catch(function(error) {
//         console.log(error)
//     });
// }

//#endregion

//#region Promises
// const posts = [
//     {title: 'Post One', body:'This is post one'},
//     {title: 'Post Two', body:'This is post two'}
// ];

// function createPost(post) {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             posts.push(post);
//             const error = true;
//             if(!error) {
//                 resolve();
//             } else reject('Error: Something went wrong')
            
//         },2000)
//     })
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `
//                 <li>${post.title}</li>
//             `;
//         });
//         document.body.innerHTML = output;
//     },1000)
// }
// // Promises are called after the initial function is resolved.
// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(function(error) {
//     console.log(error);
// })
//#endregion

//#region Callback Function
// const posts = [
//     {title: 'Post One', body:'This is post one'},
//     {title: 'Post Two', body:'This is post two'}
// ]

// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     },2000)
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `
//                 <li>${post.title}</li>
//             `;
//         });
//         document.body.innerHTML = output;
//     },1000)
// }

// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();


// // Callback - A function passed into another function and then called.
// function createPost(post,callback) {
//     setTimeout(function() {
//         posts.push(post);
//         callback()
//     },2000)
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `
//                 <li>${post.title}</li>
//             `;
//         });
//         document.body.innerHTML = output;
//     },1000)
// }
// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
//#endregion

//#region Chuck Norris Jokes API
// document.querySelector('.get-jokes').addEventListener('click',getJokes);

// function getJokes(e) {
//     const number = document.querySelector('input[type="number"]').value;

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

//     xhr.onload = function() {
//         if(this.status === 200){
//             const response = JSON.parse(this.responseText);

//             let output = '';
//             if(response.type === 'success') {
//                 response.value.forEach(function(joke) {
//                     output += `
//                         <li>${joke.joke}</li>
//                     `;
//                 })

//             } else output += '<li>Something went wrong</li>';

//             document.querySelector('.jokes').innerHTML = output;

//             console.log(response)
//         }
//     }

//     xhr.send();
//     e.preventDefault();
// }
//#endregion

//#region XHR JSON
// document.getElementById('button1').addEventListener('click', loadCustomer);
// document.getElementById('button2').addEventListener('click', loadCustomers);


// // Load Customer
// function loadCustomer(e) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'customer.json', true);

//     xhr.onload = function() {
//         if(this.status === 200) {
//             const customer = JSON.parse(this.responseText);

//             const output = `
//              <ul>
//                 <li> ID: ${customer.id}</li>
//                 <li> Name: ${customer.name}</li>
//                 <li> Company: ${customer.company}</li>
//                 <li> Phone: ${customer.phone}</li>
//              </ul>
//             `;

//             document.getElementById('customer').innerHTML = output;
//         }
//     }

//     xhr.send();
// }

// // Load Customers
// function loadCustomers(e) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'customers.json', true);

//     xhr.onload = function() {
//         if(this.status === 200) {
//             const customers = JSON.parse(this.responseText);

//             let output = '';

//             customers.forEach(function(customer) {
//                 output += `
//                 <ul>
//                     <li> ID: ${customer.id}</li>
//                     <li> Name: ${customer.name}</li>
//                     <li> Company: ${customer.company}</li>
//                     <li> Phone: ${customer.phone}</li>
//                 </ul>
//                 `;
//             });
            

//             document.getElementById('customers').innerHTML = output;
//         }
//     }

//     xhr.send();
// }
//#endregion

//#region XHR Code
/// XHR Code
// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
//     // Create an XHR Object
//     const xhr = new XMLHttpRequest();

//     // OPEN
//     xhr.open('GET', 'data.txt', true);

//     // Optional - used for spiners/loaders
//     xhr.onprogress = function() {
//         console.log('Ready State: ', this.readyState)
//     }

//     xhr.onload = function() {
//         if(this.status === 200) {
//             // console.log(this.responseText)
//             document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
//         }
//     }

//     // xhr.onreadystatechange = function() {
//     //     if(this.status === 200 && this.readyState === 4) {
//     //         console.log(this.responseText)
//     //     }
//     // }
//     xhr.onerror = function() {
//         console.log('Request error...')
//     }
//     xhr.send();

//     // readyState Values
//     // 0: request not initialized
//     // 1: server connection established
//     // 2: request received
//     // 3: processing request
//     // 4: request finished and response is ready

//     // HTTP Statuses
//     // 200: "OK"
//     //403: "Forbidden"
//     //404: "Not Found"
// }
//#endregion