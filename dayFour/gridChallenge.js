function gridChallenge(grid) {
  // Ordenar cada fila de la cuadrícula alfabéticamente
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('').sort().join('');
  }
  // Verificar si las columnas están en orden alfabético de manera ascendente
  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 1; i < grid.length; i++) {
      if (grid[i][j] < grid[i - 1][j]) {
        return 'NO';
      }
    }
  }

  return 'YES';
}