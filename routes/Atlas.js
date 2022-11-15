var express = require('express');
const Atlas_controlers= require('../controllers/Atlas');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Atlas', { title: 'Search Results Atlas' });
// });
/* GET detail Atlas page */ 
router.get('/detail', Atlas_controlers.Atlas_view_one_Page); 
/* GET Atlas */ 
router.get('/', Atlas_controlers.Atlas_view_all_Page ); 
// GET request for one Atlas. 
router.get('/Atlass/:id', Atlas_controlers.Atlas_detail);
/* GET create Atlas page */ 
router.get('/create', Atlas_controlers.Atlas_create_Page); 
/* GET create update page */ 
router.get('/update', Atlas_controlers.Atlas_update_Page); 
/* GET delete Atlas page */ 
router.get('/delete', Atlas_controlers.Atlas_delete_Page); 
 
 
module.exports = router;
 