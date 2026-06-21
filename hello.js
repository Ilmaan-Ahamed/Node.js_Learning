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

