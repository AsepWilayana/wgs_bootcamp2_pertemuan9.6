const http = require('http');
const fs = require('fs');
const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;
var morgan = require('morgan')
 
// create "middleware"
app.use(morgan('dev'))

app.set('view engine', 'ejs')

// untuk membuka/akses image
app.use(express.static('assets/'))
// app.use('/img', express.static((__dirname, 'assets/img')))

app.use(expressLayouts);
app.set('layout','layout/layout')

app.get('/', (req, res) =>{
    const nama = "Asep Wilayana";
    const title = "Web Server EJS";

    cont = [
        {
            name: 'asep',
            email: 'asep@gmail.com'
        },
        {
            name: 'aswil',
            email: 'aswil@gmail.com'
        },
        {
            name: 'asep wilayana',
            email: 'asepwilayana@gmail.com'
        }
    ]

    res.render('index', {nama:nama, title:title, cont})
})
app.get('/contact', (req, res) =>{
    const title = "Web Server EJS";
    res.render('contact', { title:title})
})
app.get('/about', (req, res) =>{
    const title = "Web Server EJS";
    res.render('about',{ title:title})

})
app.get('/product/:id', (req, res) =>{
    res.send('product id :' + req.params.id + '<br/>' + 'category id :' + req.query.category)
})
app.use('/', (req,res) => {
    res.status(404).send('page not found : 404');
})

.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})