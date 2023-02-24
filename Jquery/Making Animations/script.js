$(document).ready(function() {
    $("button").on("click",function() {
        $(".box").animate({
            opacity: 0.5,
            width: "500px"
        }, 4000)
    })
})