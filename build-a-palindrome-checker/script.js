** start of index.html **

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Palindrome Checker</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1>Palindrome Checker</h1>
    <div class="container">
        <div class="input">
            <p>Enter a text to check if its a palidrome</p>
            <input id="text-input">
            <button id="check-btn">CHECK</button>
            <div class="result">
                <span id="result"></span>
            </div>
        </div>
        <div class="insight"><p>💡 A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.</p></div>
    </div>
    <script src="script.js"></script>
</body>

</html>


** end of index.html **

** start of styles.css **

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: Arial, san-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

h1{
  font-size: 2rem;
  color:#9e10b7;
  margin: 15px;
}

.container{
  max-width: 600px;
  width: 100%;
  padding: 10px;
  background-color: #cdc9cd;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  border-radius: 10px;
  color: #fffbfb;
}

.input, .insight{
  background-color: #9e10b7;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

.input p{
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

input{
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
}

#check-btn{
  padding: 4px;
  border-radius: 4px;
  border:none;
  color:#000000;
  background: #ffffff;
  padding-left: 4px;
}

#check-btn:hover{
  color:#9e10b7;
  border: 1px solid black;
}

.result{
  padding-top: 10px;
  font-weight: bold;
  font-size: 1.2rem;
}

.insight p{
  background-color: #d2e79e;
  border-radius: 10px;
  padding: 10px 0;
  color: #191819;
}

** end of styles.css **

** start of script.js **

const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const inputValue = textInput.value.trim();
  if (inputValue === "") {
    alert("Please input a value");
    return;
  }
  const cleaned = inputValue.replace(/[^a-z0-9]/gi, "").toLowerCase();
  
  const reversed = cleaned.split("").reverse().join("");
  const isPalindrome = cleaned === reversed;

  if (isPalindrome) {
    resultEl.textContent = `${inputValue} is a palindrome`;
  } else {
    resultEl.textContent = `${inputValue} is not a palindrome`;
  }
});


** end of script.js **

