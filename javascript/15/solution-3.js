/**
 * 解法三: 双指针
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(1)
 * 
 */
var threeSum = function(nums) {
  const res = [];
  let j;
  let k;
  
  if (!nums || nums.length < 3) {
    return res;
  }

  const len = nums.length;
  nums.sort((a, b) => a-b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i-1]) {
      continue;
    }

    j = i + 1;
    k = len - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (!sum) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j+1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k-1]) {
          k--;
        }
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
  }
  return res;
}

const nums2 =[3,0,-2,-1,1,2];
console.log(threeSum(nums2));