var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models/user");

// Configures passport.js to use a new LocalStrategy for login (username[email]/password);
passport.use(new LocalStrategy(

    // Username in the form of an email
    { usernameField: "email" },
    function(email, password, done) {
      // When user submits login creds, this code will execute.
      db.User.findOne({

        // Goes through the user database and finds the username requested.
        where: {email: email}

      }).then(function(dbUser) {

        // If no user exists with that email address...
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        }

        // If the user exists, but the password provided is incorrect...
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  ));
  
// Boiler plate code to make user creds persist across sessions...
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

// EXPORTS PASSPORT CONFIGURATION....
module.exports = passport;

// =====================================================================
// ========================= DEVELOPER NOTES ===========================
// =====================================================================

/*
THE FORM:
========================================================================
A form is placed on the log in webpage, allowing the user to enter
their log-in creds and log in and continue...
========================================================================

<form action="/login" method="post">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/>
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password"/>
    </div>
    <div>
        <input type="submit" value="Log In"/>
    </div>
</form>
=======================================================================


THE ROUTE:
=======================================================================
The login form is submitted to the server via POST...
=======================================================================

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

=======================================================================

PARAMS:
======================================================================
LocalStrategy expects to find credentials in params names "username"
and "password".
======================================================================

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd'
  },
  function(username, password, done) {
    // ...
  }
));
*/

// =====================================================================
// =====================================================================
// =====================================================================