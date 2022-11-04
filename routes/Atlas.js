var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Atlas', { title: 'Search Results Atlas' });
});

module.exports = router;
