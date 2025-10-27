** start of script.js **

function findLongestWordLength(sentence) {
  const words = sentence.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    const currentWordLength = words[i].length;
    if (currentWordLength > maxLength) {
      maxLength = currentWordLength;
    }
  }

  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

** end of script.js **

