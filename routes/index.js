var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'Express 4 demo'});
});

module.exports = router;