// Express
const express = require('express');
// Enrutador
const router = express.Router();

/* Ogtener pag principal  - GET index page. */
router.get('/', function(req, res, next) {
  return res.json({ message: "page Index!" });
});
/* Ogtener pag principal  - GET Login. */
router.get('/login', function(req, res, next) {
  return res.status(200).json({ message: "page login!" });
});
/* Ogtener pag principal  - GET Login. */
router.get('/sign_in', function(req, res, next) {
  return res.status(200).json({ message: "page sign_in!" });
});
/* Ogtener pag principal  - GET home page. */
router.get('/home', function(req, res, next) {
  return res.status(200).json({ message: "page home!" });
});


// Exportar Modulo Router
module.exports = router;
