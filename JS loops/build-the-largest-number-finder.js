** start of script.js **

function largestOfAll(arr) {
  const largestNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i];

    if (subArray.length === 0) {
      continue;
    }
    
    let maxNum = subArray[0];

    for (let j = 1; j < subArray.length; j++) {
      if (subArray[j] > maxNum) {
        maxNum = subArray[j];
      }
    }

    largestNumbers.push(maxNum);
  }

  return largestNumbers;
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

** end of script.js **

