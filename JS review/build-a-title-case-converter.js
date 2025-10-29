** start of script.js **

function titleCase(str) {
  const lowerCaseStr = str.toLowerCase();
  const words = lowerCaseStr.split(' ');
  
  const titleCasedWords = words.map(word => {
    if (word.length === 0) {
      return '';
    }
    
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    
    return firstLetter + restOfWord;
  });
  
  return titleCasedWords.join(' ');
}

** end of script.js **

