function firstNonRepeatedChar(str) {
  let map = new Map();

  // Count occurrences of each character
  for (let x of str) {
    let val = map.has(x) ? map.get(x) : 0;
    map.set(x, val + 1);
  }

  // Find first character with count 1
  for (let x of str) {
    if (map.get(x) === 1) return x;
  }

  return null; // No non-repeated character found
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
