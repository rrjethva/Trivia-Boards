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
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      // .then(function () { res.render('members', { email: req.body.email }) })
      .then(function (dbPost) {
        return res.json(dbPost);
      })
      .catch(function (err) { res.status(401).json(err); });
  });

  // Gets user data for use in client-side JS...
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      return res.json({});
    }
    console.log(req.user);
    // // IF the user is not logged in....
    db.User.findAll({
      where: {
        email: req.user.email
      }
    })
      .then(function (dbUser) {
        res.json({
          email: req.user.email,
          id: req.user.id,
          animalsScore: req.user.animalsScore,
          moviesScore: req.user.moviesScore,
          sportsScore: req.user.sportsScore,
          geographyScore: req.user.geographyScore,
          musicScore: req.user.musicScore
        });
      });
  });

  app.post("/api/scores/animals", function (req, res) {
    db.User.find({ where: {email: req.user.email}

    }).then(function(dbUser) {
      if (dbUser) {
        dbUser.update({
          animalsScore: req.animalsScore
        })
      }
      res.json({
        email: req.user.email,
        id: req.user.id,
        animalsScore: req.user.animalsScore,
        moviesScore: req.user.moviesScore,
        sportsScore: req.user.sportsScore,
        geographyScore: req.user.geographyScore,
        musicScore: req.user.musicScore
      })
    })
  });

  // Gets user data for use in client-side JS...
  app.get("/api/scores", function (req, res) {

  });


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
