var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
//var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/local';
//var Schema = mongoose.Schema;

var Product = require(path.join(__dirname + '/app/models/product'));

app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/products', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/test', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/products/', function (req, res) {
    var parr = [];
    mongoose.connect(url, function(err, db) {
        if(err) {
            console.log("Error");
        } else {
            console.log("Yes, Connected...!!!!");
        }

        Product.count((err, productsCount) => {
            if(err) {
                console.log(err);
            } else {
                console.log("productsCount" + productsCount);
            }

            Product.find({}, (err, products) => {
                res.json(products);      
            });
        });
    });
});

app.listen(3000);