const sortArray = function (arr) {
  var zeroCount = 0;
  var oneCount = 0;
  var twoCount = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zeroCount++;
    }
    if (arr[i] == 1) {
      oneCount++;
    }
    if (arr[i] == 2) {
      twoCount++;
    }
  }

  console.log(`${zeroCount}, ${oneCount}, ${twoCount}`);
  i = 0;
  while (zeroCount > 0) {
    arr[i++] = 0;
    zeroCount--;
  }
  while (oneCount > 0) {
    arr[i++] = 1;
    oneCount--;
  }
  while (twoCount > 0) {
    arr[i++] = 2;
    twoCount--;
  }

  return arr;
};

console.log(sortArray([0, 2, 1, 2, 0]));

//sample array = {0,2,1,2,0}
//1st approacvh
//step 1: using swap method
//compare each element and swap lowest to left
//TC will be more O(N*N)
//   var temp;
//   for (var j = 0; j < arr.length; j++) {
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   return arr;

// For below Approach time and space completxity will be more
//   var zero = [];
//   var one = [];
//   var two = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zero.push(arr[i]);
//     }
//     if (arr[i] === 1) {
//       one.push(arr[i]);
//     }
//     if (arr[i] === 2) {
//       two.push(arr[i]);
//     }
//   }
//   var result = zero.concat(one).concat(two);
//   return result;
