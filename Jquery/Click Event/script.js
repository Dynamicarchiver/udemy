// $("button").click(function () {
//   console.log("I am clicked");
// });

$(document).on("click","button", function () {
  console.log("This is clickable too");
});

const $parent = $("div#put");
$parent.html("<button>Click Me dynamically </button>")


