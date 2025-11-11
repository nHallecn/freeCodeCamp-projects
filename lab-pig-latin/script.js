** start of script.js **

function translatePigLatin(str) {
  const vowelRegex = /^[aeiou]/;
  if (vowelRegex.test(str)) {
    return str + "way";
  }

  const firstVowelIndex = str.search(/[aeiou]/);
  if (firstVowelIndex === -1) {
    return str + "ay";
  }

  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
}


** end of script.js **

