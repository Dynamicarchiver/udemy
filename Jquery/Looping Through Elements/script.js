$(document).ready(function() {
    $("div").each(function(index, element) {
        const $originalText = $(element).text()
        $(element).text(`${index}. ${$originalText}`)
        if (index === 2) {
            $(element)
                .css("background-color", "black")
                .css("color", "white")
        }
    })
})