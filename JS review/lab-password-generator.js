** start of script.js **

const allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";

function generatePassword(length) {
  let result = '';
  const charsLength = allowedChars.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsLength);
    
    result += allowedChars.charAt(randomIndex);
  }

  return result;
}

const password = generatePassword(8);
console.log(`Generated password: ${password}`);

** end of script.js **

