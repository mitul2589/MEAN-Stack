var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/local';
//var Schema = mongoose.Schema;

var Product = require(path.join(__dirname + '/app/models/product'));

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/products', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/test', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


/*function getNextSequenceValue(sequenceName) {

   
    return 2;

}*/



app.get('/api/products/', function (req, res) {
    var parr = [];
    mongoose.connect(url, function (err, db) {
        if (err) {
            // console.log("Error");
        } else {
            // console.log("Yes, Connected...!!!!");
        }

        Product.count((err, productsCount) => {
            if (err) {
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

app.post('/api/products/', function (req, res) {
    console.log("Request Paramerts" + req.body.productName);

    mongoose.connect(url, function (err, db) {
        if (err) {
            console.log("Error" + err);
        } else {
            console.log("Yes, Connected...!!!!");
        }

        function getNextSequenceValue(sequenceName) {

            var sequenceDocument = db.counters.findAndModify({
                query: { _id: sequenceName },
                update: { $inc: { sequence_value: 1 } },
                new: true
            });

            return 2;

        }

        var newproduct = new Product(req.body);

        newproduct._id = getNextSequenceValue("productId"); //this.getNextSequenceValue('productId');
        console.log("newproduct --->>>" + newproduct);

        newproduct.save((err, item) => {
            if (err) {
                console.log("Product Saving Error" + err);
            } else {
                console.log("Saved Successfully..." + item);
                res.json(item);
            }
        })


    });
});

app.put('/api/products/', function (req, res) {
    console.log("Request Paramerts" + req.body.productName);

    mongoose.connect(url, function (err, db) {
        if (err) {
            console.log("Error");
        } else {
            console.log("Yes, Connected...!!!!");
        }

        Product.find({ 'productId': req.body.productId }, (err, product) => {
            console.log("Find Product" + product);
            product.save((err, item) => {
                if (err) {
                    console.log("Product Saving Error" + err);
                } else {
                    console.log("Saved Successfully..." + item);
                    res.json(item);
                }
            })
        });
    });
});

app.delete('/api/products/:productId', function (req, res) {
    console.log("Request Paramerts" + req.params.productId);

    mongoose.connect(url, function (err, db) {
        if (err) {
            console.log("Error" + err);
        } else {
            console.log("Yes, Connected...!!!!");
        }

        Product.remove({ 'productId': req.params.productId }, (err, result) => {
            console.log("result ---->>>>" + result);

            if (err) {
                console.log("Product Deleting Error" + err);
            } else if (result) {
                console.log("Deleted Successfully..." + result);
                res.json("Success");
            } else {
                console.log("No Result Found...!!!");
            }
        });
    });
});

app.listen(3000);