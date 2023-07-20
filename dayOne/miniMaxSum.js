function miniMaxSum(arr) {
  var minSum = 0;
  var maxSum = 0;
  var totalSum = 0;

  // Calcula la suma total de los elementos
  for (var i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  // Encuentra el valor mínimo y máximo
  var minValue = Math.min.apply(null, arr);
  var maxValue = Math.max.apply(null, arr);

  // Calcula la suma mínima y máxima
  minSum = totalSum - maxValue;
  maxSum = totalSum - minValue;

  console.log(minSum + " " + maxSum);
}