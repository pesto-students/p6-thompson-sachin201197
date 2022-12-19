var nextGreaterElements = function (nums) {
  var stack = [0];
  var result = new Array(nums.length).fill(-1);

  for (let i = 1; i < nums.length; i++) {
    while (stack && nums[stack[stack.length - 1]] < nums[i]) {
      result[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  for (let i of nums) {
    while (stack && nums[stack[stack.length - 1]] < i) {
      result[stack.pop()] = i;
    }
  }
  return result;
};

// TC - O(n)+O(n) = O(n)
// SC - O(n)

var arr = [3, 4, 5, 6, 7, 8];
console.log(nextGreaterElements(arr));
