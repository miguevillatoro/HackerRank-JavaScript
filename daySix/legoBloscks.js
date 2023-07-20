function legoBlocks(n, m) {
  if (n === 0 || m === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (m === 1) {
    return 1;
  }
  return legoBlocks(n - 1, m) + legoBlocks(n, m - 1);
}