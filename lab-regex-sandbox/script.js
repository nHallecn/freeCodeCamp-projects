const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
}

testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const flags = getFlags();
  const regex = new RegExp(pattern, flags);
  const text = stringToTest.textContent;
  const matches = text.match(regex);
  if (matches) {
    const highlighted = text.replace(regex, match => `<span class="highlight">${match}</span>`);
    stringToTest.innerHTML = highlighted;
    testResult.innerText = flags.includes("g") ? matches.join(", ") : matches[0];
  } else {
    testResult.innerText = "no match";
  }
});
