// Server.js
// Purpose: minimal HTTP server example using Node's built-in `http` module.
// How to run: `node Server.js` and open http://localhost:3000 in your browser.
// Notes: Useful for learning basic request/response handling without Express.

const http = require('http');

const server = http.createServer((req, res) =>{
    console.log("Request Made");
    console.log(req.url);
    console.log(req.method);

    res.setHeader('Content-Type', 'text/html');
    res.write('<head rel="script" href=""></head>');
    res.write('<h1>wizard here</h1>');
    res.write('<h4>Thor Where</h4>')
    res.end();
});

server.listen(3000, 'localhost', ()=>{
    console.log("Server is Listening")
})