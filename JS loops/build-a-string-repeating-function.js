** start of script.js **

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  let repeatedString = "";
  let i = 0;
  while (i < num) {
    repeatedString += str;
    i++;
  }
  return repeatedString;
}

console.log(repeatStringNumTimes("*", 3))

** end of script.js **

