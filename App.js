const exp = require('express');

const morgan = require('morgan')

const app = exp();

app.listen(3000);

// // Middleware 
// app.use((req, res, next)=>{
//     console.log('Middleware 1')
//     console.log(req.host);
//     console.log(req.path);
//     console.log(req.method)
//     next();
// })

app.use(morgan('dev'))
// 
app.get('/', (req, res)=>{
    res.sendFile('./HTML_Response/index.html', {root: __dirname});
})

app.get('/join', (req, res)=>{
    res.sendFile('./HTML_Response/join.html', {root: __dirname});
})

app.get('/joinus',(req, res)=>{
    res.redirect('/join');
})

app.get('/about', (req, res)=>{
    res.sendFile('./HTML_Response/about.html', {root: __dirname});
})

// app.use((req, res,next)=>{
//     console.log('Middleware 2');
//     next();
// })

app.use((req, res)=>{
    res.status(404).sendFile('./HTML_Response/notfound.html', {root: __dirname} )
})


// Broweer -> Request -> Server -> Response -> Browser

//// Broweer -> Request -> Server {Middleware} -> Response -> Browser
