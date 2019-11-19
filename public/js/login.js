$(document).ready(function() {
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

 // Input validation...
 // ===============================================
  loginForm.on("submit", function(event) {
    event.preventDefault();
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
    $.post("/api/login", { email: email, password: password })
      .then(function() { window.location.replace("/members"); })
      .catch(function(err) { console.log(err); });
  }
});
