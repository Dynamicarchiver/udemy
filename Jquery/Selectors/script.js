$(document).ready(function () {
  $("h1, p").text("Changed via Jquery");
  // $("p").html("<strong>This is replace and bolded</strong>")
  $("p.custom-class").text("Changed again the sceond time");
  $("p#custom-id").html("<em>Changed the third time</em>");
});
