$(".popup-btn").click(function (e) {
  e.preventDefault();
  var href = $(this).attr("href");
  $(href).fadeIn(250);
  // $(href)
  //   .children$("popup-box")
  //   .removeClass("transform-out")
  //   .addClass("transform-in");
  // e.preventDefault();
});

$(".popup-close").click(function (e) {
  e.preventDefault();
  closeWindow();
});

function closeWindow() {
  $(".popup-wrap").fadeOut(200);
  $(".popup-box").removeClass("transform-in").addClass("transform-out");
}
