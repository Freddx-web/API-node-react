// Express
const express = require('express');
// Enrutador
const router = express.Router();
//
const usuariosModel = require("../models/users");

/* Ogtener pag principal  - GET index page. */
router.get('/product', function(req, res, next) {
  return res.json({ message: "page Product!" });
});
//============================================================//
//                Enrutar Pag(Ver/usuario)                    //
//============================================================//
router.get('/', function (req, res, next) {

    // Se asignar el modelo(usuariosModel)
    usuariosModel
    // Funcion para obtener los datos
    .obtener()
    .then(usuarios => {
        //Renderizar pag(usuarios/ver)
        res.status(202).render("usuarios/ver", {
            usuarios: usuarios,
        });
    })
    //En caso si falla
    .catch(err => {
    return res.status(500).render('../views/errors/error', 
    { 
        title: 'Opss...!!',
        code: '500',
        msg: 'Alert Server'

        });
    });

});


// Exportar Modulo Router
module.exports = router;
