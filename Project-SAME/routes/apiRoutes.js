var db = require("../models");

module.exports = function (app) {
    app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({
      include: [db.Plan]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/plans", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Plan.findAll({
      include: [db.DailyWorkout]
    }).then(function(dbPlan) {
      res.json(dbPlan);
    });
  });
  
  app.get("/api/users/:id", function(req, res) {
    console.log(req);
    db.User.findOne({
      where: {
        id: req.params.id
      }, 
      include: [db.Plan]
    }).then(function(dbUser) {
      res.json(dbUser)
    });
  });
  

  // app.get("/api/authors", function(req, res) {
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.Author.findAll({
  //     include: [db.Post]
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

  // app.get("/api/authors/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.Author.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Post]
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

  // app.post("/api/authors", function(req, res) {
  //   db.Author.create(req.body).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

  // app.delete("/api/authors/:id", function(req, res) {
  //   db.Author.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });
};