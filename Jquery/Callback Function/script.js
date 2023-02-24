$(document).ready(function() {
    $("button").on("click", function() {
        $(".box").fadeOut( function() {
            $(this).remove()
        })
    })
})