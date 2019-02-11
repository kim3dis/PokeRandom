module.exports = (app) => {
    app.get('/add', (req,res) => {
        res.render('add');
    });


    app.post('/enviar', (req,res) => {
        var pokename = req.body.name;
        var pokenumber = req.body.number;
        var pokeimg = req.body.img;
        var poketype1 = req.body.type;
        var poketype2 = req.body.type2;

        var arrayType = [];
        arrayType.push(poketype1);
        if(!poketype2 == null || !poketype2 == ""){
            arrayType.push(poketype2);
        };
        


        var MongoClient = require('mongodb').MongoClient;
        var uri = "mongodb://localhost:27018/pokemongo";

        MongoClient.connect(uri, {useNewUrlParser: true}, (error, client) => {
            var db = client.db('pokemongo');

            db.collection('pokemons').insertOne({
                pokenumber: pokenumber,
                pokename: pokename,
                pokeimg: pokeimg,
                poketype: arrayType
            }, (error, result) => {
                res.redirect('/add');
            });
        });
    });
}