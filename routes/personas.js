const { LOADIPHLPAPI } = require('dns');
const express = require ('express');
const router = express.Router();

router.post('/', (req, res)=> {
    res.send('Estas en la pagina de personas')
});
    
router.post('/',(req, res)=>{
    //console.log(req.body);
    const datosPersonas = req.body;
    const mensaje2 = req.body.otroMensaje;
    //res.send('Datos de personas');
    res.status(201).json({
        ok:true,
    mensaje:'Informacion del cliente llego correctamente',
    datosPersonas,
    mensajeAlterno: mensaje2
    });
});
   

router.get('/integrantes', (req, res)=>{
    console.log(req);
    res.send('Estas en la pagina de integrantes')
});

module.exports = router;