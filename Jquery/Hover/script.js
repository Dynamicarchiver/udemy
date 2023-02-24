$(document).ready(function() {
    $("#box")
    .on("mouseenter", function () {
        console.log("Your mouse is hovering over this box")
    })
    .on("mouseleave", function () {
        console.warn("You left the box area");
    })
})