** start of script.js **

let num = 6;

function factorialCalculator(num) {
  let result = 1;
  if (num === 0 || num === 1) {
    return result;
  } else {
    let i = 1;
    while (i <= num) {
      result *= i;
      i++;
    }
    return result;
  }
}
let factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`

console.log(resultMsg);

** end of script.js **

