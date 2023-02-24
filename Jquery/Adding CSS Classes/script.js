$(document).ready(function() {
    // setTimeout( function () {
    // $(".box").addClass("blue");
    // }, 3000);

    $("button").on("click", () => {
        $(".box").addClass("blue")
    })
    $("#full-width").on("click", () => {
        $(".box").addClass("full-width")
    })
    $("#default").on("click", () => {
        $(".box").removeClass("full-width")
        $(".box").removeClass("blue")
    })
})