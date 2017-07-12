var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/local';
//var Schema = mongoose.Schema;
var db = mongoose.connect(url);

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

app.get('/welcome', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


/*function getNextSequenceValue(sequenceName) {

   
    return 2;

}*/



var productRouter = require('./router/productRouter')(Product);
app.use('/api/products/', productRouter);





app.listen(3000);