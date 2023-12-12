const express = require("express")
const path = require("path")
const app = express()
const fs = require("fs")
port = 80;

//Express
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//END points
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
})