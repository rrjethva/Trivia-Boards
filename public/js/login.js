$(document).ready(function() {
  console.log('HELLO!!!');
  var loginForm = $("#user-submit");
  var emailInput = $("#user-input");
  var passwordInput = $("#password-input");

 // Input validation...
 // ===============================================
  loginForm.on("click", function(event) {
    event.preventDefault();
    console.log('am i here?')
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    // If the user did not supply a username OR a password...
    if (!userData.email || !userData.password) {
      return;
    }

    // If a username and password are given...
    // execute loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser POST to "api/login" route
  // if successful, redir to members page...
  function loginUser(email, password) {
    console.log(email, password);
    $.post("/api/login", { email: email, password: password })
      .then(function() { window.location.replace("/members"); })
      .catch(function(err) { console.log(err); });
  }
});
