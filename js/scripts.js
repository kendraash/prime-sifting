var primeSifting = function(number) {

  var result = true;
  for (var i = 2; i < number; i++) {
    if(number % i == 0) {
      result = false;
      break;
    }
  }
  if(number == 1)
    result = true;

  return result;
};

$(document).ready(function() {
  $("form#prime-sifting").submit(function(event){
    var number = parseInt($("input#number").val());
    var result = primeSifting(number)

    $(".number").text(number);

    if (!result) {
      $(".not-prime").text("not");
    }
    else {
      $(".not-prime").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
