$(document).ready(function() {
    $("input").on("blur", function () {
        // console.log("You blred away in the input arae");
        // console.log($(this).val())
        let website = $(this).val()
        if (website.substr(0, 4) !== "http"){
            website = `http://${website}`
        }
        $(this).val(website)
    });
})