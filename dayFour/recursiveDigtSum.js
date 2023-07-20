function getDigitSum(num) {
  if (num < 10) {
    return num;
  } else {
    var sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return getDigitSum(sum);
  }
}

function superDigit(n, k) {
  var num = 0;
  for (var i = 0; i < n.length; i++) {
    num += parseInt(n[i]);
  }
  
  num *= k;
  return getDigitSum(num);
}
