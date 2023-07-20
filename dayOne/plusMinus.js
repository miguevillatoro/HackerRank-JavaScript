function plusMinus(arr) {
  var positivos = 0;
  var negativos = 0;
  var cero = 0;
  var totalElementos = arr.length;

  for (var i = 0; i < totalElementos; i++) {
    if (arr[i] > 0) {
      positivos++;
    } else if (arr[i] < 0) {
      negativos++;
    } else {
      cero++;
    }
  }

  var proporcionPositivos = positivos / totalElementos;
  var proporcionNegativos = negativos / totalElementos;
  var proporcionCero = cero / totalElementos;

  console.log(proporcionPositivos.toFixed(6));
  console.log(proporcionNegativos.toFixed(6));
  console.log(proporcionCero.toFixed(6));
}