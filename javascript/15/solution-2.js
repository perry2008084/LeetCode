/**
 * 解法二: 使用哈希表查询
 * 时间复杂度: O(n^2)
 */

var threeSum = function (nums) {
  const res = [];
  const set = new Set();
  if (!nums || nums.length < 3) {
    return res;
  }

  nums.sort();

  for (let i = 0; i < nums.length - 2; i++) {
    if (i >= 1 && nums[i-1] === nums[i]) {
      continue;
    }
    const d = new Map();
    for (let j = i + 1; j < nums.length; j++) {
      if (!d.has(nums[j])) {
        d.set(-nums[i] - nums[j], 1);
      } else {
        const tmpRes = [nums[i],nums[j], -nums[i] -nums[j]].sort();
        const tmpStr = tmpRes.toString();

        if (!set.has(tmpStr)) {
          set.add(tmpStr);
          res.push(tmpRes);
        }
      }
    }
    
  }

  return res;
};

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));

const nums2 = [0,0,0,0];
console.log(threeSum(nums2));