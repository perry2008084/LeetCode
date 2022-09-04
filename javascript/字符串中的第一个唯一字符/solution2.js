var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
      return i;
    }
  }
  return -1;
}

const s1 = 'leetcode';
const s2 = 'loveleetcode';

console.log(firstUniqChar(s1));
console.log(firstUniqChar(s2));