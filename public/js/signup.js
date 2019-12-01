// console.log('helloggg'); //success
$('#signup-button').on("click", function (e) {
    e.preventDefault();
    // console.log("getting the js"); //success
    var user = {
        email: $("#email-input").val().trim(),
        password: $("#password-input").val().trim()
    }
    var score = {
        email: $("#email-input").val().trim(), 
        answered: "0",
        correct: "0",
        totalScore: "0"
    }
    console.log(score);
    //console.log(user); //success
    $.post("/api/user_data", user, function (data) {

        window.location.href = '/login';
        // console.log(data);
        //  console.log('printing but aint posting'); //success
    });
    $.post("/api/scores", score, function (data) {
        // console.log(data);
        //  console.log('printing but aint posting'); //success
    });
});

