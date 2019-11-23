$(document).ready(function () {
  // Updates members.html to display the username of current user...
  let users;
  let statsCol = $('#stats-col');
  console.log(statsCol);
  // Updates members.html to display the username of current user...
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  function getUsers() {
    $.get('/api/user_data', function (data) {
      // console.log("Users", data);
      users = data;
      if (!users) {
        displayEmpty();
        console.log('empty');
      }
      else {
        statsCol.empty();
        statsCol.append(addUsersData(users));
      }
    });

  }
  getUsers();

  function addUsersData(user) {
    var newUserCard = $("<div>");
    newUserCard.addClass("card");
    let newUserTitle = $("<h1>");
    let newUserDate = $("<small>");
    let newUserPoints = $("<h2>");
    let newUserQuestions = $("<h2>");
    let newUserPercentage = $("<h2>");
    // let newUserOverall = $("<h2>");
    newUserPoints.text(user.email);
    newUserQuestions.text(user.answered);
    newUserPercentage.text(user.correct / user.answered);
    // newUserOverall.text(user.);

    newUserTitle.append("Your Profile");

    var newTotalPoints = $("<div>");
    newTotalPoints.attr("id", "total-points");
    newTotalPoints.append(newUserPoints);

    let newTotalQuestions = $("<div>");
    newTotalQuestions.attr("id", "total-questions");
    newTotalQuestions.append(newUserQuestions);

    let newTotalPercentage = $("<div>");
    newTotalPercentage.attr("id", "total-percentage");
    newTotalPercentage.append(newUserPercentage);

    newUserCard.append(newUserTitle, newUserDate, newUserPoints, newUserQuestions, newUserPercentage);
    newUserCard.data("user", user);
    return newUserCard;
  }
  function displayEmpty() {
    statsCol.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No users yet, navigate <a href='/signup'>here</a> in order to sign up.");
    statsCol.append(messageH2);
  }
});