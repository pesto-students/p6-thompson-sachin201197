import { createTree } from "./binaryTree_templet.js";

const maxDepth = function (root) {
  if (root == null) return 0;

  var max = Math.max(maxDepth(root.left), maxDepth(root.right));

  return max + 1;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const node = createTree(arr, 0);
console.log(maxDepth(node));
