** start of script.js **

const chunkArrayInGroups = (arr, size) => {
  const chunkedArray = [];
  let i = 0;

  while (i < arr.length) {
    const chunk = arr.slice(i, i + size);
    chunkedArray.push(chunk);
    i += size;
  }

  return chunkedArray;
};
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

** end of script.js **

