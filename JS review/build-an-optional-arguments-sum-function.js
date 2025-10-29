** start of script.js **

function addTogether() {
  const [a, b] = arguments;

  const isNumber = (val) => typeof val === 'number';

  if (arguments.length === 2) {
    if (isNumber(a) && isNumber(b)) {
      return a + b;
    } else {
      return undefined;
    }
  }

  if (arguments.length === 1) {
    if (isNumber(a)) {

      return function(b2) {
        if (isNumber(b2)) {
          return a + b2;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  }

  return undefined;
}

 console.log(addTogether(2, 3))

** end of script.js **

