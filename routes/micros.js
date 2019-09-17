var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('micro-iframe', { title: 'iframe' });
});
router.get('/micro-uno', function(req, res, next) {
  res.render('micro-uno', { title: 'micro-uno' });
});
router.get('/micro-dos', function(req, res, next) {
  res.render('micro-dos', { title: 'micro-dos' });
});

module.exports = router;
