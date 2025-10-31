** start of script.js **

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj =>
   
    sourceKeys.every(key => obj[key] === source[key])
  );
}


** end of script.js **

