** start of script.js **

function steamrollArray(arr) {
  const flattened = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      element.forEach(flatten);
    } else {
      flattened.push(element);
    }
  }

  flatten(arr);

  return flattened;
}


** end of script.js **

