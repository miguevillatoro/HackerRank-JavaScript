function countingSort(arr) {
  var frequency = new Array(100).fill(0); // Creamos una matriz de frecuencia con tamaño 100

  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    frequency[value]++;
  }

  return frequency;
}