var Atlas = require('../models/Atlas');
// List of all Atlas
exports.Atlas_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Atlas list');
};
// List of all Atlas
exports.Atlas_list = async function(req, res) { 
    try{ 
        theAtlas = await Atlas.find(); 
        res.send(theAtlas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// for a specific Atlas.
exports.Atlas_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Atlas detail: ' + req.params.id);
};
// List of all Atlas
exports.Atlas_detail = async function(req, res) { 
    try{ 
        theAtlas = await Atlas.find(); 
        res.send(theAtlas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// Handle Atlas create on POST.
exports.Atlas_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Atlas create POST');
};
// List of all Atlas
exports.Atlas_create_post = async function(req, res) { 
    try{ 
        theAtlas = await Atlas.find(); 
        res.send(theAtlas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// Handle Atlas delete form on DELETE.
exports.Atlas_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Atlas delete DELETE ' + req.params.id);
};
// List of all Atlas
exports.Atlas_delete = async function(req, res) { 
    try{ 
        theAtlas = await Atlas.find(); 
        res.send(theAtlas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// Handle Atlas update form on PUT.
exports.Atlas_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Atlas update PUT' + req.params.id);
};
// List of all Atlas
exports.Atlas_update_put = async function(req, res) { 
    try{ 
        theAtlas = await Atlas.find(); 
        res.send(theAtlas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
