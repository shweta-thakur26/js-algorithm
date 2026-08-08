function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = t[i];

    if (
      (mapST.has(a) && mapST.get(a) !== b) ||
      (mapTS.has(b) && mapTS.get(b) !== a)
    ) {
      return false;
    }

    mapST.set(a, b);
    mapTS.set(b, a);
  }

  return true;
}

module.exports = isIsomorphic;