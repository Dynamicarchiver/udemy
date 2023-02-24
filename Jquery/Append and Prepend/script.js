$(document).ready(function () {
    console.log("JQuery is ready");
    $("h1")
        .text("This is changed text")
        .append("<u>This is underline</u>")
        .prepend("<i>This is italics</i>");

})