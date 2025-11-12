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

