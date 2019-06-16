const http = new EasyHTTP;
const url = 'https://jsonplaceholder.typicode.com/';

// User Data
const data = {
    name: 'John Doe',
    username: 'jdoe',
    email: 'jdoe@gmail.com'
}

// // Get Users
// http.get(url + 'users')
// .then(data => console.log(data))
// .catch(error => console.log(error));



// Create User
// http.post(url + 'users', data)
// .then(data => console.log(data))
// .catch(error => console.log(error));

// Update User
http.put(url + 'users/2', data)
.then(data => console.log(data))
.catch(error => console.log(error));

// Delete User
// http.delete(url + 'users/2')
// .then(data => console.log(data))
// .catch(error => console.log(error));
