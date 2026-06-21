// Import All vaiables form Data file
const imports = require('./data'); // runs the files

// Import Spcific Vaiables & print easy
const {names} = require('./data')
console.log(names);


// Print all Variables
console.log(imports);

// Can Print Spcific Variable 
console.log(imports.ages);

const os = require('os');
console.log(os.homedir());
