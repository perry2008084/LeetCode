/**
 * 
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * 解法一: 双端队列
 *
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums) {
    return [];
  }

  let sWindow = [],
    res = [];

  nums.forEach((x, i) => {
    if (i >= k && sWindow[0] <= i - k) {
      sWindow.shift();
    }
    while (sWindow && nums[sWindow[sWindow.length - 1]] <= x) {
      sWindow.pop();
    }
    sWindow.push(i);
    if (i >= k - 1) {
      res.push(nums[sWindow[0]]);
    }
  });

  return res;
};
