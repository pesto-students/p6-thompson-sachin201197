var newOrder = [];
const spiralOrder = function (arr) {
  //column 3 coulmnn 1stcoulumn = 0 lastCln =2
  //row 3
  var rowNumber = 0;
  var bottomColumnNumber = 0;
  var lastCoulmnNumber = arr.length;
  var lastRow = array.length - 1;
  var toplast = arr[0].length - 1;
  console.log(`Array length ${arr.length}, last row value  ${lastRow}`);
  while (rowNumber < arr.length - 1) {
    leftToRight(array, rowNumber, lastCoulmnNumber);
    // topToBotttom(array, toplast);
    // rightToleft(array, lastRow);
    // bottomToTop(array, bottomColumnNumber);
    //  columnNumber++;
    // lastRow--;
    rowNumber++;
    lastCoulmnNumber--;
  }
};

var array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var array2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 311, 12],
  [13, 14, 15, 16],
];

spiralOrder(array);
console.log(newOrder);

function leftToRight(arr, rownumber, coluumnNumber) {
  for (var j = 0; j < coluumnNumber; j++) {
    console.log(arr[rownumber][j]);
    newOrder.push(arr[rownumber][j]);
  }
}
function topToBotttom(arr, coulumNumber) {
  for (var j = 0; j < arr.length - 1; j++) {
    console.log(arr[j + 1][coulumNumber]);
    newOrder.push(arr[j + 1][coulumNumber]);
  }
}
function rightToleft(arr, lastRow) {
  for (var j = arr.length - 1; j > 0; j--) {
    console.log(arr[lastRow][j - 1]);
    newOrder.push(arr[lastRow][j - 1]);
  }
}
function bottomToTop(arr, coulmnNumber) {
  console.log(arr.length - 1);
  for (var j = arr.length - 1; j > 0; j--) {
    console.log(arr[j - 1][coulmnNumber]);
    newOrder.push(arr[j - 1][coulmnNumber]);
  }
}
// leftToRight(array, 0);
// topToBotttom(array, 2);
// rightToleft(array, 2);
// bottomToTop(array, 0);
