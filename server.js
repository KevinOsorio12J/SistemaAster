//IMPORTACIONES

const express = require('express');
const morgan = require('morgan');
const hbs= require('hbs');
const path= require('path'); //SIRVE PARA QUE LA RUTA SIEMPRE SEA EXACTA

//INICIALIZACIONES
const server = express();

//SETTINGS
server.set('nombreAplicacion', 'Aplicacion API REST');
server.set('port', 2020);
server.set('view engine', 'hbs');
//console.log(path.join(__dirname,'/views'));

//MIDDLEWARES
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static('public'));
server.use(morgan('dev'));

//RUTAS

server.get('/', (req,res) =>{
    res.render('home');
});

 server.use('/personas', require ('./routes/personas'));


server.listen(server.get('port'), ()=>{
    console.log(`Servidor esta corriendo en el puerto ${server.get('port')}` );

});