$(document).ready(function() {
    $(window).on("resize", function() {
        console.log($(window).width(), 'x', $(window).height())

        if($(window).width() <= 700) {
            $("body").css("backgroundColor", "gold");
        } else {
            $("body").css("backgroundColor", "purple");

        }
    })
})