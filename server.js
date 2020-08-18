const port = process.env.PORT || 3000;

const express = require('express');
const app = express();
const hbs = require('hbs');
const { registerPartials } = require('hbs');

require('./hbs/helper');

app.use(express.static(__dirname + '/public'));
//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Javier',

    })

})

app.get('/about', (req, res) => {
    res.render('about')

})

app.listen(port, () => {
    console.log(`Escuchando ${port}`);
})