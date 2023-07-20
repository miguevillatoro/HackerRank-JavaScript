function cookies(k, A) {
  let operations = 0;
  let minSweetness = Math.min(...A);

  while (minSweetness < k) {
    if (A.length < 2) {
      return -1; // No es posible alcanzar la dulzura requerida
    }

    const leastSweetIndex = A.indexOf(minSweetness);
    A.splice(leastSweetIndex, 1);

    const secondLeastSweetIndex = A.indexOf(Math.min(...A));
    A.splice(secondLeastSweetIndex, 1);

    const combinedSweetness = minSweetness + 2 * Math.min(...A);
    A.push(combinedSweetness);

    minSweetness = Math.min(...A);
    operations++;
  }

  return operations;
}