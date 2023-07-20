function noPrefix(words) {
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    for (let j = 0; j < words.length; j++) {
      if (i !== j && currentWord.startsWith(words[j])) {
        console.log('BAD SET');
        console.log(currentWord);
        return;
      }
    }
  }
  console.log('GOOD SET');
}