var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Atlas_controller = require('../controllers/Atlas');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Atlas ROUTES ///
// POST request for creating a Atlas.
router.post('/Atlass', Atlas_controller.Atlas_create_post);
// DELETE request to delete Atlas.
router.delete('/Atlass/:id', Atlas_controller.Atlas_delete);
// PUT request to update Atlas.
router.put('/Atlass/:id', Atlas_controller.Atlas_update_put);
// GET request for one Atlas.
router.get('/Atlass/:id', Atlas_controller.Atlas_detail);
// GET request for list of all Atlas items.
router.get('/Atlass', Atlas_controller.Atlas_list);


 

module.exports = router;