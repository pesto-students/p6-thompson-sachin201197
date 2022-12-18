class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class binarySearchTree {
  constructor(value) {
    if (value instanceof Array) {
      for (var i = 0; i < value.length; i++) {
        this.insert(value[i]);
      }
    } else {
      this.root = null;
    }
  }

  insert(value) {
    if (this.root == null) {
      this.root = new TreeNode(value);
    } else {
      var newNode = new TreeNode(value);
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(currentNode, newNode) {
    if (newNode.value > currentNode.value) {
      if (currentNode.right == null) currentNode.right = newNode;
      else this.insertNode(currentNode.right, newNode);
    } else {
      if (currentNode.left == null) currentNode.left = newNode;
      else this.insertNode(currentNode.left, newNode);
    }
  }

  display() {
    var cuur = this.root;
    displayTreeinInOrder(cuur);
    function displayTreeinInOrder(cuur) {
      if (cuur != null) {
        console.log(cuur.value + " ");
        displayTreeinInOrder(cuur.left);
        displayTreeinInOrder(cuur.right);
      } else {
        console.log(null + " ");
      }
    }
    return cuur;
  }
}
function levelOrderTraverssel(arr, i) {
  if (arr[i] == null) return;
  var root = new TreeNode(arr[i]);
  root.left = levelOrderTraverssel(arr, 2 * i + 1);
  root.right = levelOrderTraverssel(arr, 2 * i + 2);

  return root;
}
function inOrder(root) {
  if (root != null) {
    inOrder(root.left);
    console.log(root.value + " ");
    inOrder(root.right);
  }
}

const validateBinarySearchTree = function (root) {
  function validate(node, left, right) {
    if (!node) return true;

    if (!(node.value < right || node.value > left)) return false;

    return (
      validate(node.left, left, node.value) &&
      validate(node.right, node.value, right)
    );
  }
  return validate(root, null, null);
};

var arr = [3, 1, 2, 4];
// const node = new levelOrderTraverssel(arr, 0);
// inOrder(node);
var BTS = new binarySearchTree(arr);
// BTS.insert(10);
// BTS.insert(15);
// BTS.insert(5);
var root = BTS.display();
console.log(validateBinarySearchTree(root));

export { levelOrderTraverssel };
