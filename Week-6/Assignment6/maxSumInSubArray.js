var maximumSubArray = function (nums) {
  let temp = nums[0];
  let total = 0;
  for (var i = 0; i < nums.length; i++) {
    total += nums[i];
    if (total > temp) {
      temp = total;
    }
    if (total < 0) {
      total = 0;
    }
  }
  return temp;
};

console.log(maximumSubArray([-1]));

//TC - O(n)
//SC - O(1)