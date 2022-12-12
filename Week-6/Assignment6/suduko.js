var sboard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var isValidSudoku = function (board) {
  const boardSet = new Set();
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      var unitBox = board[i][j];
      if (unitBox != ".") {
        let row = `column ${i} value:${unitBox}`;
        let col = `Row ${j} value:${unitBox}`;
        let box = `boxpiece :${Math.floor(i / 3)}-${Math.floor(
          j / 3
        )} -${unitBox}`;
        if (!boardSet.has(row) && !boardSet.has(col) && !boardSet.has(box)) {
          boardSet.add(row);
          boardSet.add(col);
          boardSet.add(box);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(isValidSudoku(sboard));
