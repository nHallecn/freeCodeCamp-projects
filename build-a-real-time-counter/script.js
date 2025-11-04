const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  let text=textInput.value;

  if(text.length>50){
    text=text.slice(0,50);
    textInput.value=text
  }

  charCount.textContent=`Character Count: ${text.length}/50`;

  if(text.length >= 50){
    charCount.style.color = "red"
  } else {
    charCount.style.color = "black"
  }
})