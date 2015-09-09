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
