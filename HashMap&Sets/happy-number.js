// feat: implement happy number checker

function isHappyNumber(num) {
  const seen = new Set();

  while (num !== 1 && !seen.has(num)) {
    seen.add(num);

    num = String(num)
      .split("")
      .reduce((sum, digit) => sum + Number(digit) ** 2, 0);
  }

  return num === 1;
}

// Example usage
console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(2));  // false