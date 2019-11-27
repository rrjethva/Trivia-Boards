// console.log('helloggg'); //success
$('#signup-button').on("click", function(e) {
    e.preventDefault();
    //console.log("hello"); //success
    var user = {
        email: $("#email-input").val().trim(),
        password: $("#password-input").val().trim()
    }
    //console.log(user); //success
    $.post("/api/user_data", user, function(data) {

        window.location.href = '/members';
        // console.log(data);
    })
});

