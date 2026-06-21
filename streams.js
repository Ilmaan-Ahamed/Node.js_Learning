// streams.js
// Purpose: demo of Node.js file streams (readStream and writeStream) and piping large files efficiently.
// How to run: place a large file at `./docs/HugeFile.txt` then run `node streams.js`.
// Notes: Using streams avoids loading entire files into memory. Two methods shown: manual write and `pipe()`.

const fs = require('fs');

// Read Stream
// to avoid calling toString() use {encoding: 'utf8'} when creating the stream
const readStream = fs.createReadStream('./docs/HugeFile.txt', {encoding: 'utf8'})
 
readStream.on('data',(buffer) =>{
    console.log('\nNew Buffer\n');
    console.log(buffer);
})

// Write Stream
const writestream = fs.createWriteStream('./docs/copyHugeFile.txt')

// Method 1: handle chunks manually
readStream.on('data',(buffer) =>{
    writestream.write('\nNew Buffer\n');
    writestream.write(buffer);
})

// Method 2: use pipe (recommended for straightforward copying)
readStream.pipe(writestream);