** start of script.js **

function nthPrime(n) {
  
    if (n === 1) {
        return 2;
    }

    let count = 1;   
    let candidate = 3;  

    const isPrime = (num) => {
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    while (count < n) {
        if (isPrime(candidate)) {
            count++;
        }

        if (count === n) {
            break;
        }

        candidate += 2;
    }

    return candidate;
}

console.log(nthPrime(10));   

** end of script.js **

