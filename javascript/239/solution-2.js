/**
 * 
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 * 
 * 解法一: 双端队列
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 */
var maxSlidingWindow = function(nums, k) {
  if (!nums || nums.length === 0) {
    return [];
  }

  const result = [];
  let sWindow = nums.slice(0, k);
  if (sWindow && sWindow.length > 0) {
    result.push(getMaximun(sWindow));
  }
  if (k > nums.length) {
    return result;
  }
  
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > sWindow[0] || k === 1) {
      sWindow = [];
      sWindow.push(nums[i]);
    }

    result.push(sWindow[0]);
  }

  return result;
};

var getMaximun = (arr) => {
  return arr.sort((a, b) => {
    return b - a;
  })[0];
}

const nums1 = [1,3,-1,-3,5,3,6,7], k1 = 3;
const result1 = maxSlidingWindow(nums1, k1);
console.log(nums1, result1);

const nums2 = [1,-1], k2 = 1;
const result2 = maxSlidingWindow(nums2, k2);
console.log(nums2, result2);

const nums3 = [7,2,4], k3 = 2;
const result3 = maxSlidingWindow(nums3, k3);
console.log(nums3, result3);
