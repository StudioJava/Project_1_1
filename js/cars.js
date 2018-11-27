// JavaScript Document

$("#btn-1").click(function(){

  $("#image").fadeOut(500, function() {
    $(this).attr("src", "images/car-1.png");
    $("img").fadeIn(4000);
  });
});