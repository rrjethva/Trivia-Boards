$(document).ready(function() {
  // Updates members.html to display the username of current user...
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});
