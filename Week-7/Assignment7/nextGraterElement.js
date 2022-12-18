import { stack } from "./stack_template.js";

const nextGraterElement = function (nums) {
  const st = new stack();
  var result = [];
  var n = nums.length - 1;
  for (var i = n; i >= 0; i--) {
    console.log(st.peek());
    while (st.peek() < nums[i]) {
      st.pop();
    }
    if (st.peek() > nums[i]) {
      result[i] = st.peek();
      st.push(nums[i]);
    } else {
      st.push(nums[i]);
      result[i] = -1;
    }
  }
  console.log(st);
  return result;
};

var arr = [1, 2, 3, 4, 3];
console.log(nextGraterElement(arr));

// var result = [];
//   var n = nums.length * 2;
//   for (var i = 0; i < n - 1; i++) {
//     while (!st.isEmpty && st.peek() < nums[i]) {
//       st.pop();
//     }
//     st.push(i);
//   }
//   console.log(st);
//   return nums;
