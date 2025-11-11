** start of index.html **

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Regex Sandbox</title>

</head>

<body>
    <h1>Regex Sandbox</h1>
    <main>
        <div id="regex-container">
            <label for="pattern">Regex Pattern:
                <div id="pattern-container">/<input type="text" id="pattern" name="pattern"
                        placeholder="Enter your regex pattern">/</div>
            </label>
            <div id="flags-container">
                <p>Flags: </p>
                <label for="i">
                    <input type="checkbox" name="flags" id="i"> i
                </label>
                <label for="g">
                    <input type="checkbox" name="flags" id="g"> g
                </label>
            </div>
        </div>
        <div id="test-container">
            <p>Test String:</p>
            <div id="test-string" placeholder="Enter your test string" contenteditable="true"></div>
        </div>
        <button class="btn" id="test-btn" type="button">Test Regex</button>
        <div id="result-container">
            <h2>Result:</h2>
            <p id="result">
            </p>
        </div>

    </main>
    <script src="script.js"></script>
</body>

</html>

** end of index.html **

** start of styles.css **

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --dark-grey: #1b1b32;
    --light-grey: #f5f6f7;
    --golden-yellow: #fecc4c;
    --yellow: #ffcc4c;
    --gold: #feac32;
    --orange: #ffac33;
    --dark-orange: #f89808;
    --border: 0.2rem solid darkgrey;
    --padding: 0.3rem;
}

body {
    background-color: var(--dark-grey);
    color: var(--light-grey);
    font-size: 20px;
    font-family: "Lato", Helvetica, Arial, sans-serif;
    padding: 5px;
}

h1 {
    margin: 5rem auto 2rem;
    text-align: center;
}

p {
    padding: var(--padding);
}

#regex-container {
    max-width: 680px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: var(--border);
}

#regex-container>label {
    padding: var(--padding);
    flex: 1 1 auto;
}

#pattern-container {
    display: inline-block;
    color: var(--dark-grey);
    background-color: var(--light-grey);
    margin: 5px;
    border: var(--border);
}

#pattern {
    margin: 0.2rem;
    border: 0;
    font-size: 1rem;
    width: calc(100% - 1.2rem);
}

#pattern:focus {
    outline: none;
}

#flags-container {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
}

#flags-container>label {
    padding: var(--padding);
    margin-right: 0.3rem;
}

#test-container {
    max-width: 680px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    border: var(--border);
}

#test-string {
    background-color: var(--light-grey);
    min-height: 5rem;
    color: var(--dark-grey);
    border-top: var(--border);
    font-size: 1.2rem;
}

[contenteditable=true]:empty:before {
    content: attr(placeholder);
    pointer-events: none;
    color: var(--dark-grey);
}

::placeholder {
    color: var(--dark-grey);
}


button {
    display: block;
    cursor: pointer;
    width: 8rem;
    margin: 0.2rem auto;
    color: var(--dark-grey);
    background-color: var(--gold);
    background-image: linear-gradient(var(--golden-yellow), var(--orange));
    border-color: var(--gold);
    border-width: 0.2rem;
    font-size: 1.1rem;
}

.btn:hover {
    background-image: linear-gradient(var(--yellow), var(--dark-orange));
}

#result-container {
    max-width: 680px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    align-self: flex-start;
    margin: 0.4rem 0.2rem 0.2rem;
    flex: 0 1 auto;
}

#result {
    color: var(--dark-grey);
    background-color: var(--light-grey);
    font-size: 1.5rem;
    flex: 1 1 auto;
    margin: 0.2rem;
    border: var(--border);
    min-height: 3rem;
}

.highlight {
    background-color: lightgreen;
}

** end of styles.css **

** start of script.js **

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


** end of script.js **

