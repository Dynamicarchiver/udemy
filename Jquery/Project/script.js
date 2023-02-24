$(document).ready(function () {
    $("button").on("click", function () {
        const randomNumber = Math.ceil(Math.random() * 88);
        const $name = $(".name");
        const $image = $("img")
        $.get(
          `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`,
          function (data) {
            $name.text(data.name);
            $image.attr("src", data.image);
            $image.attr("alt", `${data.name} image ${data.id}`)
          },
        );
    })
});