var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app) {


// =================================================================
// ======================= PASSPORT ROUTES =========================
// =================================================================



// =====================================================
// ================ USER LOGIN ROUTE ===================
// =====================================================


// If the user has valid login creds, send them to the members page.
/// Otherwise... send error...
app.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

// =====================================================
// =============== USER SIGN-UP ROUTE ==================
// =====================================================

// The users password is hashed/serialized and stored...
// IF user is created successfully, log the user in...
// ELSE send an error...

app.post("/api/signup", function(req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function() { res.redirect(307, "/api/login"); })
    .catch(function(err) { res.status(401).json(err); });
});


// =====================================================
// ================ USER LOGOUT ROUTE ==================
// =====================================================

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

// =====================================================
// ================ GET USER  DATA ROUTE ===============
// =====================================================

  // Gets user data for use in client-side JS...
  app.get("/api/user_data", function(req, res) {
    console.log(req.user);
    // IF the user is not logged in....
    if (!req.user) {
      // Return empty JSON object...
      res.json({});
    } else {
      // Return JSON with username and user ID...
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

// =================================================================
// =================================================================
// =================================================================


  




  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
