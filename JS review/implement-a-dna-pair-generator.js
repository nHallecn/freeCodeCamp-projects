** start of script.js **

function pairElement(str) {
  const basePairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };

  const pairedArray = str.split('').map(base => {
    const complement = basePairs[base];
  
    return [base, complement];
  });

  return pairedArray;
}

console.log(pairElement("ATCGA"));

** end of script.js **

