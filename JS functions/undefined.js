** start of script.js **

const complementaryDNA = (dna) => {
  let complementaryStrand = '';
  for (let i = 0; i < dna.length; i++) {
    const base = dna[i];
    if (base === 'A') {
      complementaryStrand += 'T';
    } else if (base === 'T') {
      complementaryStrand += 'A';
    } else if (base === 'C') {
      complementaryStrand += 'G';
    } else if (base === 'G') {
      complementaryStrand += 'C';
    }
  }
  return complementaryStrand;
};

** end of script.js **

