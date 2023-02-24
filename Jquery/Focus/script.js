$(document).ready(function() {
    $("[name='myInput']").on("focus", function () {
        console.log("You focused into this input area")
    });
})