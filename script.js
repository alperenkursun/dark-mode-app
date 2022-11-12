$(document).ready(function () {
  $("*").css("transition", "1.2s");
  $("button").click(function () {
    if ($("button").text() == "Dark") {
      $("body").removeClass("bg-white").addClass("bg-dark");
      $("button").removeClass("btn-dark").addClass("btn-light").text("Light");
      $("h1").removeClass("text-black").addClass("text-white");
      $("h2").removeClass("text-danger").addClass("text-info");
      $("em").removeClass("text-secondary").addClass("text-light");
      $("p").removeClass("text-black").addClass("text-white");
    } else {
      $("body").removeClass("bg-dark").addClass("bg-white");
      $("button").removeClass("btn-light").addClass("btn-dark").text("Dark");
      $("h1").removeClass("text-white").addClass("text-black");
      $("h2").removeClass("text-info").addClass("text-danger");
      $("em").removeClass("text-light").addClass("text-secondary");
      $("p").removeClass("text-white").addClass("text-black");
    }
  });
});
