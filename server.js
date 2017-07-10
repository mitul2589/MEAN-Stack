var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/local';
//var Schema = mongoose.Schema;

var Product = require(path.join(__dirname + '/app/models/products'));
var Counter = require(path.join(__dirname + '/app/models/counters'));

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
                console.log(products);
                res.json(products);
            });
        });
    });
});

app.post('/api/products/', function (req, res) {
    //console.log("Request Paramerts" + req.body.productName);

    mongoose.connect(url, function (err, db) {
        if (err) {
            console.log("Error" + err);
        } else {
            console.log("Yes, Connected...!!!!");
        }

        var newproduct = new Product(req.body);

        function getNextSequenceValue(sequenceName, callback) {
            let seq = Counter.find({}, (err, item) => {
                console.log("Item --->" + item[0].sequence_value);
                item[0].sequence_value += 1;
                item[0].save((err, item) => {
                    callback(null, item.sequence_value);
                });
            });
        }

        getNextSequenceValue("productId", (err, seq) => {
            console.log("Sequence---->" + seq);
            newproduct._id = seq;
            console.log("newproduct --->>>" + newproduct);
            newproduct.save((err, item) => {
                console.log("Item =====" + item);
                if (err) {
                    console.log("Product Saving Error" + err);
                } else {
                    console.log("Saved Successfully..." + item);
                    res.json(item);
                }
            })
        });



        /*newproduct._id = getNextSequenceValue("productId"); //this.getNextSequenceValue('productId');
        console.log("newproduct --->>>" + newproduct);

        newproduct.save((err, item) => {
            if (err) {
                console.log("Product Saving Error" + err);
            } else {
                console.log("Saved Successfully..." + item);
                res.json(item);
            }
        })*/


    });
});

app.put('/api/products/', function (req, res) {
    console.log("Request Paramerts" + req.body);
    let body = req.body;
    mongoose.connect(url, function (err, db) {
        if (err) {
            console.log("Error");
        } else {
            console.log("Yes, Connected...!!!!");
        }

        Product.find({ '_id': req.body._id }, (err, product) => {
            console.log("Find Product" + product);
            var updatedProduct = new Product(req.body);
            console.log("Find Product" + updatedProduct);
            updatedProduct.update(body, (err, item) => {
                if (err) {
                    console.log("Product Saving Error" + err);
                } else {
                    console.log("Saved Successfully..." + item.productName);
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

        Product.remove({ '_id': req.params.productId }, (err, result) => {
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