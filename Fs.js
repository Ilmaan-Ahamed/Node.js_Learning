// Fs - File System 

const fs = require('fs');

// // Creating Folder mkdir

if( ! fs.existsSync('./docs'))
{
    fs.mkdir('./docs', (err) =>{
    if(err){
        console.log(err.message);
    }
    else
        console.log('Folder created')
    })

    console.log('here Here');
}

// write file
fs.writeFile('./docs/file.txt', 'hi file.txt Created Succesfully' , (err) =>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log('File Written');
    }
})

// read file
if(fs.existsSync('./docs/file.txt')){
    fs.readFile('./docs/file.txt', (err, data)=> {
    if(err){
        console.log(err.message);
    }
    else
        // Convert to String use to.String() Function
        console.log(data.toString());
    }
    )
}

// delete file
if(fs.existsSync('./docs/file.txt')){

    fs.unlink('./docs/file.txt', (err)=>{
        if(err)
            console.log(err.message);
        else
            console.log('file deleted');

    });

}

// Delete Folder
if(fs.existsSync('./docs')){

    fs.rmdir('./docs', (err)=> {
        if(err)
            console.log(err.message);
        else
            console.log('Folder deleted')
    } )
}