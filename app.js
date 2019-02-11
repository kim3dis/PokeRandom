var app = require('./config/server');
var porta = "3000";


app.listen(porta, ()=> {
    console.log('Servidor ativo na porta ' + porta);
});