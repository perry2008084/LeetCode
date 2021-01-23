/**
 * 3sum
 * https://leetcode-cn.com/problems/3sum/
 *
 * 解法一: 暴力破解
 * 时间复杂度: O(n^3)
 * 提交超时
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  const set = new Set();
  if (!nums || nums.length < 3) {
    return res;
  }

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const tmpSortRes = [nums[i], nums[j], nums[k]].sort();
          const tmpSortStr = tmpSortRes.toString();

          if (!set.has(tmpSortStr)) {
            res.push(tmpSortRes);
            set.add(tmpSortStr);
          }
        }
      }
    }
  }

  return res;
};

// 测试
const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));