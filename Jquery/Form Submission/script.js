$(document).ready(function() {
    $("form").on("submit", function(event) {
        event.preventDefault();
        console.log("Form was not submitted");
    })
    $("button").on("click", function (e) {
        e.preventDefault()
        console.log("Button is rendered useless");
    });
})