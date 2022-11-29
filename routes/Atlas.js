var express = require('express');
const Atlas_controller=require('../controllers/Atlas');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', Atlas_controller.Atlas_view_all_Page);

router.get('/create',secured, Atlas_controller.Atlas_create_Page); 
router.get('/detail', Atlas_controller.Atlas_view_one_Page); 
router.get('/update',secured, Atlas_controller.Atlas_update_Page); 
router.get('/delete',secured, Atlas_controller.Atlas_delete_Page); 

module.exports = router;