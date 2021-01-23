var threeSum = function(nums) {
  if (!nums || nums.length < 2) return []
  let res = [], second, last;
  const len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i-1]) continue;

    second = i+1;
    last = len - 1;

    while (second < last) {
      const sum = nums[i] + nums[second] + nums[last];
      if (!sum) {
        res.push([nums[i], nums[second], nums[last]]);
        while (second < last && nums[second] === nums[second + 1]) second++;
        while (second < last && nums[last] === nums[last - 1]) last--;
        second++;
        last--;
      } else if (sum < 0) {
        second++;
      } else if (sum > 0) {
        last--;
      }
    }
  }

  return res;
}

const nums2 =[3,0,-2,-1,1,2];
console.log(threeSum(nums2));