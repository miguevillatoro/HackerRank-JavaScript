function processData(input) {
  const operations = input.split('\n').slice(1); // Obtener las operaciones sin el primer número
  let text = ''; // Inicializar el texto vacío
  const history = []; // Historial de operaciones para el deshacer

  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i].split(' '); // Dividir la operación en partes

    switch (operation[0]) {
      case '1':
        // Operación de append (W)
        history.push(text); // Agregar el estado actual al historial
        text += operation[1]; // Concatenar la cadena al texto
        break;

      case '2':
        // Operación de delete (K)
        history.push(text); // Agregar el estado actual al historial
        const deleteCount = parseInt(operation[1]);
        text = text.slice(0, -deleteCount); // Eliminar los últimos K caracteres
        break;

      case '3':
        // Operación de print (K)
        const printIndex = parseInt(operation[1]);
        console.log(text[printIndex - 1]); // Imprimir el K-ésimo carácter
        break;

      case '4':
        // Operación de undo ()
        const previousState = history.pop(); // Obtener el estado anterior del historial
        text = previousState || ''; // Restaurar el estado anterior o dejar el texto vacío si no hay estado anterior
        break;

      default:
        break;
    }
  }
}