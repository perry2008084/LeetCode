/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
  const map = new Map();
  for (let n of nums) {
    if (map.has(n)) {
      map.set(n, 2);
    } else {
      map.set(n, 1);
    }
  }

  for (let n of nums) {
    if (map.get(n) === 1) {
      return n;
    }
  }
};