// Modules.js
// Purpose: demonstrates how to import and use modules in Node.js (local modules and built-in modules).
// How to run: `node Modules.js` — ensure `data.js` is present in the same folder.
// Notes: Shows both default object exports and destructuring import syntax.

// Import All variables from data.js
const imports = require('./data'); // runs the file

// Import specific variable using destructuring
const {names} = require('./data')
console.log(names);


// Print all variables exported from data.js
console.log(imports);

// Print a specific exported variable
console.log(imports.ages);

const os = require('os');
console.log(os.homedir());
