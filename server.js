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
           // console.log("Error");
        } else {
           // console.log("Yes, Connected...!!!!");
        }

        Product.count((err, productsCount) => {
            if(err) {
                //console.log(err);
            } else {
                //console.log("productsCount" + productsCount);
            }

            Product.find({}, (err, products) => {
                res.json(products);      
            });
        });
    });
});

app.post('/api/products/', function (request, res) {
    var parr = [];

    console.log("Request Paramerts" + request.query.param['name']);
    console.log("Request Paramerts --->>" + request.param['name']);
    console.log("Request Paramerts --->>" + request.params['name']);
    mongoose.connect(url, function(err, db) {
        if(err) {
            console.log("Error");
        } else {
            console.log("Yes, Connected...!!!!");
        }

        var newproduct = new Product({
            
        "productId": 7,
        "productName": "camera",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    
        });
        console.log("newproduct --->>>" + newproduct);

        newproduct.save((err) => {
            if(err) {
                console.log("Error");
            } else {
                console.log("Saved Successfully...");
            }
        })

        
    });
});

app.listen(3000);