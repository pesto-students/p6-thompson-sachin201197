/* Javascript program to construct tree using inorder
   and preorder traversals */

/* A binary tree node has data, pointer
   to left child and a pointer to right child */
class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

let root;
let preIndex = 0;

/* Recursive function to construct binary of size
       len from Inorder traversal in[] and Preorder traversal
       pre[]. Initial values of inStrt and inEnd should be
       0 and len -1. The function doesn't do any error
       checking for cases where inorder and preorder
       do not form a tree */
function buildTree(In, pre, inStrt, inEnd, mp) {
  if (inStrt > inEnd) return null;

  /* Pick current node from Preorder traversal using preIndex
           and increment preIndex */
  const tNode = new Node(pre[preIndex++]);

  // If this node has no children then return
  if (inStrt === inEnd) return tNode;

  // Else find the index of this node in Inorder traversal
  let inIndex = mp.get(tNode.data);

  /* Using index in Inorder traversal, construct left and
           right subtress */
  tNode.left = buildTree(In, pre, inStrt, inIndex - 1, mp);
  tNode.right = buildTree(In, pre, inIndex + 1, inEnd, mp);

  return tNode;
}

/* This function mainly creates an unordered_map, then
      calls buildTree() */
const mp = new Map();
function buildTreeWrap(In, pre, start, end) {
  for (let i = 0; i < In.length; i++) {
    mp.set(In[i], i);
  }
  return buildTree(In, pre, start, end, mp);
}

// This function is here just to test buildTree()
function printInorder(node) {
  if (node == null) {
    console.log("null" + " ");
    return;
  }
  // Then print the data of node
  console.log(node.data + " ");
  // First recur on left child
  printInorder(node.left);
  // Now recur on right child
  printInorder(node.right);
}

// Driver code
let In = [9, 3, 15, 20, 7];
let pre = [3, 9, 20, 15, 7];
let len = In.length;
root = buildTreeWrap(In, pre, 0, len - 1);

/* Let us test the built tree by printing
           Inorder traversal */
console.log("Inorder traversal of constructed tree is : <br>");
printInorder(root);
