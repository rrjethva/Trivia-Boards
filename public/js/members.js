$(document).ready(function () {
$("#bodyWrapper").fadeIn(1000);
function getUser() {
  $.get("/api/user_data", function(data) {
    let user = data;
    let email = user.email;
      let emailArr = email.split("@");
    let username = emailArr[0];

    let animalsScore = user.animalsScore;
      if (animalsScore === null || animalsScore === "") {
        animalsScore = "N/A";
      }
    let moviesScore = user.moviesScore;
      if (moviesScore === null || moviesScore === "") {
        moviesScore = "N/A";
      }
    let sportsScore = user.sportsScore;
      if (sportsScore === null || sportsScore === "") {
        sportsScore = "N/A";
      }
    let geographyScore = user.geographyScore;
    if (geographyScore === null || geographyScore === "") {
      geographyScore = "N/A";
    }
    let musicScore = user.musicScore;
    if (musicScore === null || musicScore === "") {
      musicScore = "N/A";
    }

    $("#username").text(username);
    $("#userAnimalsScore").text(animalsScore);
    $("#userMoviesScore").text(moviesScore);
    $("#userSportsScore").text(sportsScore);
    $("#userGeographyScore").text(geographyScore);
    $("#userMusicScore").text(musicScore);
    $("#userImage").attr("src", "https://api.adorable.io/avatars/150/" + username + "@adorable.io.png");
    console.log(data);

  })
}
getUser();


$("#animalsPlayButton").on('click', function() {
  $.get("/game/category/animals", function(req, res) {
    window.location.replace("/game/category/animals");
  })
});

$("#moviesPlayButton").on('click', function() {
  $.get("/game/category/movies", function(req, res) {
    window.location.replace("/game/category/movies");
  })
});

$("#sportsPlayButton").on('click', function() {
  $.get("/game/category/sports", function(req, res) {
    window.location.replace("/game/category/sports");
  })
});

$("#geographyPlayButton").on('click', function() {
  $.get("/game/category/geography", function(req, res) {
    window.location.replace("/game/category/geography");
  })
});

$("#musicPlayButton").on('click', function() {
  $.get("/game/category/music", function(req, res) {
    window.location.replace("/game/category/music");
  })
});


});

