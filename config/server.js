var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./app/public/'));

app.use((req, res, next) => {
    next();
});

consign()
    .include('./app/routes/')
    .then('config/mongoConnection.js')
    .into(app);

module.exports = app;