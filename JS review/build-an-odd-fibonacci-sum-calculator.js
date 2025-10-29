** start of script.js **

function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  
  let oddSum = 1;

  while (curr <= num) {
    const nextFib = prev + curr;
    
    prev = curr;
    curr = nextFib;

    if (curr <= num && curr % 2 !== 0) {
      oddSum += curr;
    }
  }

  return oddSum;
}


** end of script.js **

