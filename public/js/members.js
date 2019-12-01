$(document).ready(function () {
  // Updates members.html to display the username of current user...
  let users;
  let statsCol = $('#stats-col');
  let avatarCol = $('#avatar-col');

  // Updates members.html to display the username of current user...
  // $.get("/api/user_data").then(function (data) {
  //   $(".member-name").text(data.email);
  // });
  function getUsers() {
    $.get('/api/user_data', function (data) {
      //console.log(data);//success
      users = data;
      if (!users) {
        displayEmpty();
        // console.log('empty');
      }
      else {
        avatarCol.append(addUsersData(users));

        // console.log('users exist');
      }
    });

  }
  getUsers();

  function addUsersData(user) {
    var newUserCard = $("<div>");
    newUserCard.addClass("card");
    let newUserTitle = $("<h1>");
    let newUserAvatar = $("<img>");
    newUserTitle.text(user.email);

    newUserAvatar.attr({
      'src': 'https://previews.123rf.com/images/nexusby/nexusby1810/nexusby181000286/111362910-default-avatar-placeholder-profile-icon-male.jpg',
      'width': '200em'
    });

    newUserCard.append(newUserAvatar, newUserTitle);
    newUserCard.data("user", user);
    return newUserCard;
  }
  function getScores() {
    $.get('/api/scores', function (data) {
      scores = data;
      if (!scores) {
        displayEmpty();
        // console.log('empty');
      }
      else {
        let statsCol = $('#stats-col');
        statsCol.append(addScoresData(scores));
        // console.log("scores " + scores);
        // console.log('scores exist');
      }
    });

  }
  getScores();

  function addScoresData(score) {
    // console.log($(score));
    var newScoreCard = $("<div>");
    newScoreCard.addClass("card");
    let newScorePoints = $("<h2>");
    let newScoreAnswered = $("<h2>");
    let newScoreCorrect = $("<h2>");
    let newScorePercentage = $("<h2>");
    newScorePoints.text("Points so far: " + score.totalScore);
    newScoreAnswered.text('Answered: ' + score.answered);
    newScoreCorrect.text('Correct: ' + score.correct);
    newScorePercentage.text("Percentage: " + ((score.correct / score.answered) * 100) + "%");

    var newTotalPoints = $("<div>");
    newTotalPoints.attr("id", "total-points").append(newScorePoints);

    let newAnswered = $("<div>");
    newAnswered.attr("id", "answered").append(newScoreAnswered);

    let newTotalPercentage = $("<div>");
    newTotalPercentage.attr("id", "total-percentage").append(newScorePercentage);

    let newCorrect = $("<div>");
    newScoreCorrect.attr("id", "correct").append(newScoreCorrect);

    newScoreCard.append(newTotalPoints, newAnswered, newTotalPercentage, newCorrect);
    newScoreCard.data("score", score);
    return newScoreCard;
  }
  function displayEmpty() {
    statsCol.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No users yet, navigate <a href='/signup'>here</a> in order to sign up.");
    statsCol.append(messageH2);
  }
});


