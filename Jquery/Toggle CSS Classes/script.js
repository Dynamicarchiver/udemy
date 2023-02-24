$(document).ready(function() {
    const $box = $(".box");

    // $(".toggle").on("click", () => {
    //     $box.toggleClass("blue")
    // })

    $("input").on("keyup", function() {
        const value = $(this).val();
        if (value === "Kalob") {
            $box.addClass("blue")
        } else {
        $box.removeClass("blue")
        }
    });
})