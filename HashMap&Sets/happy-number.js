// feat: implement happy number checker

function isHappyNumber(n) {
  const seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);

    n = String(n)
      .split("")
      .reduce((sum, digit) => sum + Number(digit) ** 2, 0);
  }

  return n === 1;
}

// Example usage
console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(2));  // false