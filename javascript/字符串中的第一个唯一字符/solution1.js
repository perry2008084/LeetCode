/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const subString = s.substring(i + 1);
    const prevStr = s.substring(0, i);
    if (subString.indexOf(s[i]) === -1 && prevStr.indexOf(s[i]) === -1) {
      return i;
    }
  }

  return -1;
};

const s1 = "leetcode";
const s2 = "loveleetcode";
const s3 = "aabb";
console.log(firstUniqChar(s1));
console.log(firstUniqChar(s2));
console.log(firstUniqChar(s3));
