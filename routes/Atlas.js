var express = require('express');
const Atlas_controlers= require('../controllers/Atlas');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Atlas', { title: 'Search Results Atlas' });
// });

/* GET Atlas */ 
router.get('/', Atlas_controlers.Atlas_view_all_Page ); 

module.exports = router;
