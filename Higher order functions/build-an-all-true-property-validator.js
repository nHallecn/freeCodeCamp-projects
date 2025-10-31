** start of script.js **



truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

function truthCheck(collection, pre) {
  return collection.every(obj => {
    return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
  });
}


** end of script.js **

