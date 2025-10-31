** start of script.js **

function destroyer(arr, ...valsToRemove) {
  
  return arr.filter(item => !valsToRemove.includes(item));
}


** end of script.js **

