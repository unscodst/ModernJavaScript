const http = new easyHTTP;
const initialURL = 'https://jsonplaceholder.typicode.com/'

// GET All Posts
// http.get(initialURL + 'posts', function(error,response) {
//     if(error) {
//         console.log(error);
//     } else console.log(response)
// });

// GET Single Post
// http.get(initialURL + 'posts/1', function(error,response) {
//     if(error) {
//         console.log(error);
//     } else console.log(response)
// });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};
// Create POST
// http.post(initialURL + 'posts', data, function(error, post) {
//     if(error) {
//         console.log(error);
//     } else console.log(post)
// });

// Update PUT
// http.put(initialURL + 'posts/1', data, function(error, post) {
//     if(error) {
//         console.log(error);
//     } else console.log(post)
// });

// DELETE post
http.delete(initialURL + 'posts/1', function(error,response) {
    if(error) {
        console.log(error);
    } else console.log(response)
});

