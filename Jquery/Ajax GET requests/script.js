$(document).ready(function() {
    $.get(
      "https://swapi.dev/api/people/1/",
      function (data) {
        console.log(data.name)
      },
    );
})