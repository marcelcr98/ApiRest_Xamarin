
var express = require('express');
var router = express.Router();

var model = require('../models/contactModel');

router.get('/', function(req, res) {
    model.getProducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    model.getProduct(id, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.post('/', function(req, res) {
    model.addProduct(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/', function(req, res) {
    model.updateProduct(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/:id', function(req, res) {
    let id = req.params.id;
    model.deleteProduct(id, function(err, result) {
        res.json({data: result, error: err});
    })
})
  
module.exports = router;