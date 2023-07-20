function towerBreakers(n, m) {
  // Si la altura de la torre es 1, el primer jugador pierde
  if (m === 1) {
    return 2;
  }
  // Si el número de torres es par, el primer jugador pierde
  if (n % 2 === 0) {
    return 2;
  }
  // En cualquier otro caso, el primer jugador gana
  return 1;
}