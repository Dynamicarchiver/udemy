$(document).ready(function() {
    $.post('https://httpbin.org/post', {"Hello": "World"},
        function (data) {
            console.log("POST WAS COMPLETED WITH THIS DATA")
            console.log(data)
        },
    );
})