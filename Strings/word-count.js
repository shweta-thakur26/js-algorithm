function wordCount(str) {
  if (!str || str.trim() === "") {
    return 0;
  }

  return str.trim().split(/\s+/).length;
}

module.exports = wordCount;