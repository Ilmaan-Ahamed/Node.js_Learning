// data.js
// Purpose: simple example module that exports sample arrays used by other files.
// How to use: require('./data') or destructure specific values: const { names, ages } = require('./data');
// Notes: This file exports sample data for learning module exports in Node.js.
names = ['thor' , 'hulk', 'wizard', 'spidey']
ages = [24, 30 ,12, 29];

// console.log(names)

// exports the file to Module file , exports anythings
module.exports = names;

//exports multiple variables
// type 01
// module.exports ={
//     name : names,
//     age  : ages
// };

// type 02
module.exports ={
    names,ages
};