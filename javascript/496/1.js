var nextGreaterElement = function(nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;

  if (len1 < 1 || len2 < 1 || len1 > len2) {
    return [];
  }

  let res = new Array(len1);
  let stack = [];
  let map = {};

  stack.push(nums2[0]);

  for (let j = 1; j < len2; j++) {
    let currNum = nums2[j];

    while (stack.length !== 0 && currNum > stack[stack.length - 1]) {
      map[stack.pop()] = currNum;
    }

    stack.push(currNum);
  }

  while (stack.length !== 0) {
    map[stack.pop()] = -1;
  }

  for (let i = 0; i < len1; i++) {
    res[i] = map[nums1[i]];
  }

  return res;
}

const nums1 = [4, 1, 2];
const nums2 = [1,3,4,2];
console.log(nextGreaterElement(nums1, nums2));