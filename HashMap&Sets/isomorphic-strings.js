function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToT = new Map();
  const tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    const mappedT = sToT.get(charS);
    const mappedS = tToS.get(charT);

    // If either character already has a different mapping
    if (
      (mappedT !== undefined && mappedT !== charT) ||
      (mappedS !== undefined && mappedS !== charS)
    ) {
      return false;
    }

    sToT.set(charS, charT);
    tToS.set(charT, charS);
  }

  return true;
}

module.exports = isIsomorphic;