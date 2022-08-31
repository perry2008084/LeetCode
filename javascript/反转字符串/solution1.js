/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverse = function (nums, start, end) {
  while (start < end) {
    [nums[start++], nums[end--]] = [nums[end], nums[start]];
  }
};

var reverseString = function (s) {
  let len = 0;
  while (s[len]) {
    len += 1;
  }

  reverse(s, 0, len - 1);
};
