// feat: implement happy number checker

function isHappyNumber(numbers) {
  const seen = new Set();

  while (numbers !== 1 && !seen.has(numbers)) {
    seen.add(numbers);

    numbers = String(numbers)
      .split("")
      .reduce((sum, digit) => sum + Number(digit) ** 2, 0);
  }

  return num === 1;
}

// Example usage
console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(2));  // false