const express = require('express');
const router = express.Router();

//get a list of vans from the db
router.get('/vans', function(req, res){
    res.send({type: 'GET'});

});

//Add a new van to the db
router.post('/vans', function(req, res){
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });

});
//update a van in the db
router.put('/vans/:id', function(req, res){
    res.send({type: 'PUT'});

});

//Delete a ninja from the db
router.delete('/vans/:id', function(req, res){
    res.send({type: 'DELETE'});

});

module.exports = router;