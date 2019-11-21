$(document).on("submit", function(e) {
    e.preventDefault();
    var user = {
        email: $("#email-input").val().trim(),
        password: $("#password-input").val().trim()
    }
    $.post("/api/signup", function(data) {
        console.log(data);
    })
})