var primeSifting = function(number) {

  var result = false;
  for (var i = 2; i < number; i++) {
    if(number % i)
      result = true;
  }
  if(number == 1)
    result = true;

  return result;


};
