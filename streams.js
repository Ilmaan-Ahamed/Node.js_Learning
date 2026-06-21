//A ReadStream is a stream that allows you to read data from a resource. Node.js provides ReadStream implementations for different use cases, 
// such as reading from files (fs.ReadStream) or standard input (process.stdin).

const fs = require('fs');

// Read Stream
// to aviod the toString funct use this {encoding: 'utf8'} on imporing file
const readStream = fs.createReadStream('./docs/HugeFile.txt', {encoding: 'utf8'})
 
readStream.on('data',(buffer) =>{
    console.log('\nNew Buffer\n');
    console.log(buffer);
})

// Write Stream
const writestream = fs.createWriteStream('./docs/copyHugeFile.txt')

// Mehtod 1
readStream.on('data',(buffer) =>{
    writestream.write('\nNew Buffer\n');
    writestream.write(buffer);
})

// Mehtod 2
readStream.pipe(writestream);