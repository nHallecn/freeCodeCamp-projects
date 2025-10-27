** start of script.js **

function mutation(array) {
  const target = array[0].toLowerCase();
  const test = array[1].toLowerCase();

  for (let i = 0; i < test.length; i++) {
    const char = test[i];
    if (target.indexOf(char) === -1) {

      return false;
    }
  }

  return true;
}

console.log(mutation(["Alien", "line"]));
console.log(mutation(["hello", "hey"]));

** end of script.js **

