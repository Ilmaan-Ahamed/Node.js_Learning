// hello.js
// Purpose: small examples demonstrating timers, global object, and module-level variables.
// How to run: `node hello.js` — it prints a few runtime values and shows setInterval / setTimeout usage.
// Notes: This file is for learning Node.js runtime features (global, __dirname, __filename).

const hello = (hname) =>{
    console.log(`Hello, ${hname}!`);
}
// hello("wizzard");

// global object 
console.log(global);

setTimeout(() => {
   console.log("This is a timeout function");
   clearInterval(interval);
}, 5000);

const interval = setInterval(() => {
    console.log("This is an interval function");
}, 1000);

console.log(__dirname);  // directory name of the current module
console.log(__filename); // file name of the current module

