
function maskEmail(email) {
  const atIndex = email.indexOf('@');

  if (atIndex <= 1 || atIndex === -1) {
    return email;
  }

  const username = email.slice(0, atIndex);
  
  const domain = email.slice(atIndex);

  const firstChar = username[0];
  const lastChar = username[username.length - 1];

  const charsToMask = username.length - 2;

  const maskedSection = '*'.repeat(charsToMask);

  const maskedUsername = firstChar + maskedSection + lastChar;
  
  return maskedUsername + domain;
}

const email = "mySecretUser123@corporation.co.uk";

console.log(maskEmail(email));
