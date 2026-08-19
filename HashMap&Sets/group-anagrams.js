// feat: group anagrams using hash map

function groupAnagrams(strs) {
  const groups = new Map();

  for (const str of strs) {
    const keys = str.split("").sort().join("");

    if (!groups.has(keys)) {
      groups.set(keys, []);
    }

    groups.get(keys).push(str);
  }

  return Array.from(groups.values());
}

// Example usage
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]