var Atlas = require('../models/Atlas');
// List of all Atlas
exports.Atlas_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Atlas list');
};
// List of all Atlas
exports.Atlas_list = async function (req, res) {
    try {
        theAtlas = await Atlas.find();
        res.send(theAtlas);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Atlas.
exports.Atlas_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Atlas detail: ' + req.params.id);
};
// List of all Atlas
exports.Atlas_detail = async function (req, res) {
    try {
        theAtlas = await Atlas.find();
        res.send(theAtlas);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Atlas create on POST.
exports.Atlas_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Atlas create POST');
};
// List of all Atlas
exports.Atlas_create_post = async function (req, res) {
    try {
        theAtlas = await Atlas.find();
        res.send(theAtlas);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Atlas delete form on DELETE.
exports.Atlas_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Atlas delete DELETE ' + req.params.id);
};
// List of all Atlas
exports.Atlas_delete = async function (req, res) {
    try {
        theAtlas = await Atlas.find();
        res.send(theAtlas);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Atlas update form on PUT.
exports.Atlas_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Atlas update PUT' + req.params.id);
};
// List of all Atlas
exports.Atlas_update_put = async function (req, res) {
    try {
        theAtlas = await Atlas.find();
        res.send(theAtlas);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS 
// Handle a show all view 
exports.Atlas_view_all_Page = async function (req, res) {
    try {
        theAtlass = await Atlas.find();
        res.render('Atlass', { title: 'Atlas Search Results', results: theAtlass });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 
// Handle Atlas create on POST. 
exports.Atlas_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Atlas(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"name":"America", "state":"newyork", "stateranking":10} 
    document.name = req.body.name; 
    document.stateranking = req.body.stateranking; 
    document.state= req.body.state; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 