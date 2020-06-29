const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
    //Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'manu'
    });
    res.end;
})

app.get('/about', (req, res) => {

    res.render('about');
    //res.end;
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});