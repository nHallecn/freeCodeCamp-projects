** start of script.js **

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  
  return arr;
}

** end of script.js **

