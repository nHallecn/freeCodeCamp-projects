** start of script.js **

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);


  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let multiple = min;

  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}


** end of script.js **

