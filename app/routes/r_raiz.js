module.exports = (app) => {
    app.get('/', (req, res) => {
        var MongoClient = require('mongodb').MongoClient;
        var uri = "mongodb://localhost:27018/pokemongo";

        MongoClient.connect(uri, {useNewUrlParser: true}, (error, client) => {
            var db = client.db('pokemongo');

            db.collection('pokemons').find({}).toArray((error, result) => {
                res.render('raiz', {
                    pokemon: result
                });
            });

        });
    });
}