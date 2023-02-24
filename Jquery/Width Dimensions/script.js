$(document).ready(function() {
    const $box = $(".box");

    console.log("Width: ", $box.width());
    console.log("Inner Width", $box.innerWidth())
    console.log("Outer width: ", $box.outerWidth())
    console.log("Outer width true: ", $box.outerWidth(true));

    console.log("Height: ", $box.height());
    console.log("Inner Height", $box.innerHeight());
    console.log("Outer Height: ", $box.outerHeight());
    console.log("Outer Height true: ", $box.outerHeight(true));


    console.log($(window).height());
    console.log($(window).width());


})