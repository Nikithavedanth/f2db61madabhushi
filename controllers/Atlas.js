var Atlas = require('../models/Atlas');

// List of all Atlas 
exports.Atlas_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Atlas list');
};

// List of all Atlas 
exports.Atlas_list = async function (req, res) {
    try {
        theAtlass = await Atlas.find();
        res.send(theAtlass);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle building the view for creating a Atlas. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Atlas_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Atlascreate', { title: 'Atlas Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a Atlas. 
// query provides the id 
exports.Atlas_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Atlas.findById(req.query.id) 
        res.render('Atlasupdate', { title: 'Atlas Update', toShow: result }); 
    } 
    catch(err){   
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
 // Handle a delete one view with id from query 
exports.Atlas_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Atlas.findById(req.query.id) 
        res.render('Atlasdelete', { title: 'Atlas Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// List of all Atlas 
exports.Atlas_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Atlas.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle Atlas create on POST. 
exports.Atlas_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Atlas create POST');
};

// List of all Atlas 
exports.Atlas_create_post = async function (req, res) {
    try {
        theAtlass = await Atlas.find();
        res.send(theAtlass);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

 // Handle Atlas delete form on DELETE. 
exports.Atlas_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Atlas delete DELETE ' + req.params.id);
    
};
// Handle Atlas delete on DELETE. 
exports.Atlas_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Atlas.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.Atlas_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Atlas.findById( req.query.id) 
        res.render('Atlasdetail',{ title: 'Atlas Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// List of all Atlas 
exports.Atlas_delete = async function (req, res) {
    try {
        theAtlass = await Atlas.find();
        res.send(theAtlass);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Atlas update form on PUT. 
exports.Atlas_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Atlas update PUT' + req.params.id);
};

//List of all Atlas 
exports.Atlas_update_put = async function(req, res) { 
    try{ 
        theAtlass = await Atlas.find(); 
        res.send(theAtlass); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// Handle Atlas update form on PUT. 
exports.Atlas_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Atlas.findById(req.params.id)
        // Do updates of properties 

        if (req.body.name)toUpdate.name = req.body.name;
        if (req.body.state) toUpdate.state = req.body.state;
        if (req.body.stateranking) toUpdate.stateranking = req.body.stateranking;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS 
// Handle a show all view 
exports.Atlas_view_all_Page = async function (req, res) {
    try {
        theAtlass = await Atlas.find();
        res.render('Atlass', {
            title: 'Atlas Search Results',
            results: theAtlass
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Atlas create on POST. 
exports.Atlas_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Atlas();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Atlas_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name;
    document.state = req.body.state;
    document.stateranking = req.body.stateranking;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

