// var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });
//   // app.get("api/plan/:plan", function(req, res) {
//   //   db.Plan.findAll({
//   //     where: {
//   //       title: req.params.plan
//   //     },
//   //     include: [db.DailyWorkout]
//   //   }).then(function(dbPlan) {
//   //     res.json(dbPlan);
//   //   });
//   // });

//   // app.get("/api/muscle/:muscle", function(req, res) {
//   //   // 2; Add a join to include all of the Author's Posts here
//   //   db.Muscle.findAll({
//   //     where: {
//   //       muscle: req.params.muscle
//   //     },
//   //     include: [db.Exercise]
//   //   }).then(function(dbMuscle) {
//   //     res.json(dbMuscle);
//   //   });
//   // });

//   // app.get("/api/plans/:id"), function(req,res) {
//   //   db.Plan.findAll({
//   //     where: {
//   //       id: req.params.id
//   //     }, 
//   //     include: [db.DailyWorkout]
//   //   }
//   //   })
//   // }

//   // app.post()
//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({
//       where:
//         {id: req.params.id} }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
//  //create user
//  app.post("/api/users", function(req, res) {
//   db.user.create(req.body).then(function(data) {
//     res.json(data);
//   });
// });

//  // Delete a user by id if we get to it
//  app.delete("/api/users/:id", function(req, res) {
//   db.user.destroy({ where: { id: req.params.id } }).then(function(data) {
//     res.json(data);
//   });
// });


// };

// // app.get("/api/users")

// // app.get("/api/plans")
// // //display your plans

// // app


var db = require("../models");

module.exports = function (app) {
    app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.user.findAll({
      //probably shouldnt include this but hey
      include: [db.Plan]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/muscles", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Muscle.findAll().then(function(dbMuscle) {
      res.json(dbMuscle);
    });
  });


  //start of the stuff made after you fell asleep

  //shows full cascading structure
  app.get("/api/users/:id", function(req, res) {
    console.log(req);
    db.user.findOne({
      where: {
        id: req.params.id
      }, 
      include: [{model: db.Plan,
        include: [{model: db.DailyWorkout, order: ['weekday']}]
      
    }]}).then(function(dbUser) {
      res.json(dbUser)
    });
  });

//shows all associated exercises for a muscle group
  app.get("/api/exercises/:muscle", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Muscle.findAll({
      where: {
        value: req.params.muscle
      },
      include: [db.Exercise]
    }).then(function(dbMuscle) {
      res.json(dbMuscle);
    });
  });

  //shows daily workouts of specified plan change params to session id
  //probably should skip the include and just grab the dailyworkouts directly?
  app.get("/api/plans/:id", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Plan.findAll({
      where: {
        id: req.params.id
      },
      include: [db.DailyWorkout]
    }).then(function(dbPlan) {
      res.json(dbPlan);
    });
  });

  //finds all of users plans and their associated dailyworkouts
  app.get("/api/plans", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Plan.findAll({
      where: {
        UserId: req.user.id
      },
      include: [db.DailyWorkout]
    }).then(function(dbPlan) {
      res.json(dbPlan);
    });
  });
  
  // app.get("/directory", function(req, res) {
  //   db.user.findOne({
  //     where: {
  //     id: 7
  //   }, 
  //   include: [{model: db.Plan,
  //     include: [db.DailyWorkout]}]
    
  // }).then(function(dbUser) {
  //   res.json(dbUser)
  // });

  // });

  app.get("/directory", function(req, res) {
    db.user.findOne({
      where: {
      id: req.user.id
    },
    include: [db.Plan]
  }).then((user) => {
    res.render('directory', { user })});
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