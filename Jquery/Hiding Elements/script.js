$(document).ready(function() {
    $("#clickMe").on("click", function (e) {
        e.preventDefault()
        $("#box").hide();
    });
    $("#showMe").on("click", function (e) {
        e.preventDefault()
        $("#box").show()
    });
})