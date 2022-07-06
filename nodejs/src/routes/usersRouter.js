// Express
const express = require('express');
// Enrutador
const router = express.Router();

/* Ogtener pag principal  - GET index page. */
router.get('/users', function(req, res, next) {
  return res.json({ message: "page Users!" });
});

// Exportar Modulo Router
module.exports = router;
