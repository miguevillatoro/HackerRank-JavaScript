function processData(input) {
  const frequency = {};
  for (const char of input) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  const sortedChars = Object.keys(frequency).sort(
    (a, b) => frequency[a] - frequency[b]
  );

  const codes = {};
  let result = "";
  let currentIndex = 0;
  for (const char of sortedChars) {
    while (currentIndex < input.length && input[currentIndex] === char) {
      result += char;
      currentIndex++;
    }
  }

  console.log(result);
}