** start of script.js **

function getIndexToIns(arr,num){
  const sortedArr = arr.sort((a, b) => a - b);
  const index = sortedArr.findIndex(element => element >= num);
  if (index === -1) {
    return sortedArr.length;
  }
  return index;
}

** end of script.js **

