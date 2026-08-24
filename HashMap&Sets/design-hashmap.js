class MyHashMap {
  constructor() {
    this.size = 1009;
    this.buckets = Array.from({ length: this.size }, () => []);
  }

  hash(key) {
    return key % this.size;
  }

  put(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const [storedKey, value] of bucket) {
      if (storedKey === key) {
        return value;
      }
    }

    return -1;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
}

module.exports = MyHashMap;