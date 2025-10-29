** start of script.js **

function uniteUnique(...arrs) {
  const uniqueElements = [];
  
  for (let i = 0; i < arrs.length; i++) {
    const currentArray = arrs[i];
    for (let j = 0; j < currentArray.length; j++) {
      const element = currentArray[j];

      if (!uniqueElements.includes(element)) {
        uniqueElements.push(element);
      }
    }
  }
  
  return uniqueElements;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

** end of script.js **

