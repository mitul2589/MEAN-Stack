var http = require('http');
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/local';
var db = mongoose.connect(url);

// Configuring Passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
var bCrypt = require('bcrypt-nodejs');

var flash = require('connect-flash');
app.use(flash());


app.use(expressSession({ secret: 'mySecretKey' }));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(__dirname + '/public')); // To access static files under public folder
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

var Product = require(path.join(__dirname + '/app/models/products'));
var Counter = require(path.join(__dirname + '/app/models/counters'));
var User = require(path.join(__dirname + '/app/models/users'));

var passportRouter = require('./router/passportRouter')(passport);
app.use('/', passportRouter);

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

app.get('/', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/products', isAuthenticated, function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/welcome', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/parent', isAuthenticated, function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});

var productRouter = require('./router/productRouter')(Product);
app.use('/api/products/', productRouter);






app.use(express.static(__dirname), isAuthenticated);

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use('login', new LocalStrategy(
    {
        passReqToCallback: true,
    },
    function (req, username, password, done) {
        User.findOne({ 'username': username },
            function (err, user) {
                // In case of any error, return using the done method
                if (err)
                    return done(err);
                // Username does not exist, log error & redirect back
                if (!user) {
                    console.log('User Not Found with username ' + username);
                    return done(null, false,
                        req.flash('message', 'User Not found.'));
                }
                // User exists but wrong password, log the error 
                if (!isValidPassword(user, password)) {
                    console.log('Invalid Password');
                    return done(null, false,
                        req.flash('message', 'Invalid Password'));
                }
                // User and password both match, return user from 
                // done method which will be treated like success
                return done(null, user);
            }
        );
    }
));

var isValidPassword = function(user, password){
  return bCrypt.compareSync(password, user.password);
}

passport.use('signup', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    findOrCreateUser = function(){
      // find a user in Mongo with provided username
      User.findOne({'username':username},function(err, user) {
        // In case of any error return
        if (err){
          console.log('Error in SignUp: '+err);
          return done(err);
        }
        // already exists
        if (user) {
          console.log('User already exists');
          return done(null, false, 
             req.flash('message','User Already Exists'));
        } else {
          // if there is no user with that email
          // create the user
          var newUser = new User();
          // set the user's local credentials
          newUser.username = username;
          newUser.password = createHash(password);
          newUser.email = req.param('email');
          newUser.firstName = req.param('firstName');
          newUser.lastName = req.param('lastName');
 
          // save the user
          newUser.save(function(err) {
            if (err){
              console.log('Error in Saving user: '+err);  
              throw err;  
            }
            console.log('User Registration succesful');    
            return done(null, newUser);
          });
        }
      });
    };
     
    // Delay the execution of findOrCreateUser and execute 
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  }));

  // Generates hash using bCrypt
var createHash = function(password){
 return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}


fs.readFile(path.join(__dirname + '/index.html'), (err, data) => {
    fs.writeFile(path.join(__dirname + '/indexCopy.html'), data);
});

http.createServer((req, res) => {
    res.end("Hello World....!!!");
}).listen(4000);

app.listen(3000);