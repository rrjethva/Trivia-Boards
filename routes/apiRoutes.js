var db = require("../models");
var passport = require("../config/passport");


module.exports = function (app) {


  // =================================================================
  // ======================= PASSPORT ROUTES =========================
  // =================================================================



  // =====================================================
  // ================ USER LOGIN ROUTE ===================
  // =====================================================


  // If the user has valid login creds, send them to the members page.
  /// Otherwise... send error...
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // =====================================================
  // =============== USER SIGN-UP ROUTE ==================
  // =====================================================

  // The users password is hashed/serialized and stored...
  // IF user is created successfully, log the user in...
  // ELSE send an error...


  app.post("/api/user_data", function (req, res) {
    // console.log("helllllo"); //success
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      // .then(function () { res.render('members', { email: req.body.email }) })
      .then(function (dbPost) {
        res.status(201).json(dbPost.email);
      })
      .catch(function (err) { res.status(401).json(err); });
  });

  // app.post("/api/posts", function(req, res) {
  //   console.log(req.body);
  //   db.Post.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // Gets user data for use in client-side JS...
  app.get("/api/user_data", function (req, res) {
    // console.log(req.body);
    // // IF the user is not logged in....

    // Return JSON with username and user ID...
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });



  // app.post("/api/characters", function(req, res) {
  //   // req.body hosts is equal to the JSON post sent from the user
  //   // This works because of our body parsing middleware
  //   var newCharacter = req.body;

  //   // Using a RegEx Pattern to remove spaces from newCharacter
  //   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  //   console.log(newCharacter);

  //   characters.push(newCharacter);

  //   res.json(newCharacter);
  // });


  // =====================================================
  // ================ USER LOGOUT ROUTE ==================
  // =====================================================

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // =====================================================
  // ================ GET USER  DATA ROUTE ===============
  // =====================================================



  // app.get("/api/todos", function(req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Todo.findAll({}).then(function(dbTodo) {
  //     // We have access to the todos as an argument inside of the callback function
  //     res.json(dbTodo);
  //   });
  // });




  // db.Post.findAll({}).then(function(dbPost) {
  //   res.json(dbPost);
  // });

  // app.get("/api/user_data/", function(req, res) {
  //   db.Post.findOne({
  //     where: {
  //       email: req.user.email
  //     }
  //   })
  //     .then(function(dbPost) {
  //       console.log(dbPost);
  //       console.log('datadope');
  //       res.render('members', {
  //         id: dbPost.id,
  //         email: dbPost.email
  //       });
  //     });
  // });



  // =================================================================
  // =================================================================
  // =================================================================







  //   // Get all examples
  //   app.get("/api/examples", function (req, res) {
  //     db.Example.findAll({}).then(function (dbExamples) {
  //       res.json(dbExamples);
  //     });
  //   });

  //   // Create a new example
  //   app.post("/api/examples", function (req, res) {
  //     db.Example.create(req.body).then(function (dbExample) {
  //       res.json(dbExample);
  //     });
  //   });

  //   // Delete an example by id
  //   app.delete("/api/examples/:id", function (req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
  //       res.json(dbExample);
  //     });
  //   });
};
