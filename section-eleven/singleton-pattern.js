// Singleton Pattern - Singleton object is an immediate anonymous functon and can only return one instance of an object at a time. Can be used for something like one user object at a time.

// const singleton = (function() {
//     let instance;

//     function createInstance() {
//         const object = new Object({name: 'Jooje'});
//         return object;
//     }

//     return {
//         getInstance: function() {
//             if(!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
// })();

// const instanceA = singleton.getInstance();
// const instanceB = singleton.getInstance();

// console.log(instanceA === instanceB);