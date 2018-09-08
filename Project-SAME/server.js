var express    = require('express')
var app        = express()
//passport
var passport   = require('passport')
var session    = require('express-session')

var bodyParser = require('body-parser')
var env        = require('dotenv').load()
var exphbs = require('express-handlebars'),
  handlebars = require('handlebars'),
  helpers = require('handlebars-form-helpers').register(handlebars);

var hbs = exphbs.create({
  helpers: {
    namespace: 'custom',
    validationErrorClass: 'custom-validation-class'
  },
  defaultLayout: 'main'
});




require("dotenv").config();

var db = require("./models");



var PORT = process.env.PORT || 3000;


// // Compares first value to the second one allowing entering IF clouse if true.
// // Otherwise entering ELSE clause if exist.
// Handlebars.registerHelper('ifEquals', function(a, b, options) {
//   if (a === b) {
//     return options.fn(this);
//   }

//   return options.inverse(this);
// });


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Passport 
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes

var authRoute = require('./routes/auth.js')(app, passport);

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//load passport strategies
require('./config/passport/passport.js')(passport, db.user);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
