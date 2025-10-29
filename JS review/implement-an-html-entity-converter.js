** start of script.js **

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  const regex = /[&<>"']/g;

  return str.replace(regex, function(match) {
    return htmlEntities[match];
  });
}

console.log(convertHTML("Dolce & Gabbana"));

** end of script.js **

