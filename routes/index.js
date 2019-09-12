var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Curso FlexBox 09-2019' });
});
router.get('/scream4', function(req, res, next) {
  res.render('scream4', { title: 'Scream 4 Film Synopsis' });
});

module.exports = router;
