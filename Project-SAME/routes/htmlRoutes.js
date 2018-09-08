// 

var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index", {
        msg: "Welcome!",
        // examples: dbExamples
        examples: ""
      });

  });

  app.get("/directory", function(req, res) {
    db.User.findOne({where: {
      id: 1
    }}).then(function(user) {
    // db.Plan.findAll().then((plan) => {
    res.render('directory', { user })});
    // console.log("thes are the plans", plan);
  });

  app.get("/makeplan", function(req, res) {
    db.Muscle.findAll().then(function(muscles, weekday) {
    // db.Plan.findAll().then((plan) => {
    res.render('makeplan', { muscles, weekday: [{
      value: 1,
      text: 1
  }, {
      value: 2,
      text: 2
  }, {
      value: 3,
      text: 3
  }, {
      value: 4,
      text: 4
  }, {
      value: 5,
      text: 5
  }] })});
  });

    // res.render("directory");
  // });

  

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
<<<<<<< HEAD
};
=======
};

>>>>>>> master
