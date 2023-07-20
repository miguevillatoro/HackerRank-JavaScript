function diagonalDifference(arr) {
  var n = arr.length;
  var primaryDiagonalSum = 0;
  var secondaryDiagonalSum = 0;

  for (var i = 0; i < n; i++) {
    primaryDiagonalSum += arr[i][i];
    secondaryDiagonalSum += arr[i][n - 1 - i];
  }

  var difference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
  return difference;
}