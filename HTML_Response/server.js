const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) =>{
    

    res.setHeader('Content-Type', 'text/html');

    console.log(req.url);
    let routePath = __dirname;

    if (req.url == '/') {
        routePath = path.join(routePath, 'index.html');
        res.statusCode = 200;
    }
    else if (req.url == '/home') {
        res.statusCode = 301; 
        res.setHeader('Location', '/');
        res.end();
    }
    else if (req.url == '/join' ) {
        routePath = path.join(routePath, 'join.html');
        res.statusCode = 200;
    }
    else if (req.url == '/about' ) {
        routePath = path.join(routePath, 'about.html');
        res.statusCode = 200;

    }
    else{
        routePath = path.join(routePath, 'notfound.html');
        res.statusCode = 404;
    }
    
// 301 permernat Re Directions 
// 302 temporty Re Directions
// 200 succsess, 201 created 
// 404 not found 
// 500 internal server error



    fs.readFile(routePath, (err, data) => {
        if (err) {
            console.log('File not found:', routePath);
            // res.statusCode = 404;
            res.end('404 - File not found: ' + routePath);
        }
        else{
        res.write(data);
        res.end();
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, 'localhost', () => {
    console.log("Server is Listening on " + PORT)
});