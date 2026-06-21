const exp = require('express');
const app = exp();

app.listen(3000);

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

app.use((req, res)=>{
    res.sendFile('./HTML_Response/notfound.html' {root: __dirname} )
})
