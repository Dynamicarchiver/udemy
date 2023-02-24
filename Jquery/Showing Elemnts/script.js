$(document).ready(function() {
    $("#showMe").on("click", function(e) {
        e.preventDefault()
        $("#box").show()
    });
    $("#hideMe").on("click", function (e) {
        e.preventDefault()
        $("#box").hide()
    });
})