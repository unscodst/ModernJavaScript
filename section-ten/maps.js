// MAPS = Key:Value pairs - can user ANY TYPE as a key or value
const map1 = new Map();

// set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function(){};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// // Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// // Count values
// console.log(map1.size);

// Iterating Maps
// Loop user for...of to get keys and values
// for(let [key, value] of map1) {
//     console.log(`${key} = ${value}`)
// };

// Iterate keys only
// for(let key of map1.keys()) {
//     console.log(`${key}`)
// };

// Iterate values only
// for(let value of map1.values()) {
//     console.log(`${value}`)
// };

// Loop with forEach
// map1.forEach(function(value, key) {
//     console.log(`${key} = ${value}`)
// });

// Convert to arrays
// Create array of key value pairs
const keyValArray = Array.from(map1);
console.log(keyValArray)

// Create array of values
const valArray = Array.from(map1.values());
console.log(valArray)

// Create array of keys
const keyArray = Array.from(map1.keys());
console.log(keyArray)