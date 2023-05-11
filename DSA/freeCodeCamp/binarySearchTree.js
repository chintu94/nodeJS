/**
Tree Data Structure is a way to hold data, which when visualized looks like a tree. All data points in a tree are called nodes, the top level node is called root node and from there it branches out to additional nodes, each of which may have additional child nodes and so on. Nodes with branches leading to other nodes are called parents and the nodes that this branches lead to are called children. Leaf node are the node at the end of the tree which has no children.

While a tree data structure can have any number of branches at a single node, however a binary tree structure can only have two branches for every node. Also binary search trees are ordered. Each left subtree are less than or equal to the parent node and each right subtree is greater than or equal to the parent node. Because it uses the principle of binary search, on average operations are able to skip half of the tree, so that each lookup, insertion or deletion takes time preportional to the number of items stored in the tree. 

DO 
*/

class Node {
  constructor(data, left=null, right=null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(){
    this.root = null;
  }

  add = (data) => {
    const rootNode = this.root;
    if (rootNode === null){
      this.root = new Node(data);
      return;
    }
    else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          }else if (node.right !== null){
            searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(rootNode);
    }
  }

  findMin = () => {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax = () => {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove = (data) => {
    const removeNode = (node, data) => {
      // we have an empty tree, so return null.
      //? when we return null, we are setting the reference of the node as null.
      if (node === null) return null;
      // if we find the node that we need to remove
      if (data === node.data) {
        // node has no children then return null
        if (node.left === null && node.right === null) return null;
        // node has children on right 
        if (node.right == null) return node.left;
        // node has children on left
        if (node.left === null) return node.right;
        // node has two children
        //? if node has two childrens then it gets complicated because if we delete the node on the left then what will happen to its children they have to be set in an order as binary tree has an order. So we save a temporary data of the right child node and then we keep moving to the left most child node thats what the while lopp is doing here.
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        //? once we are in the left most nod we update the main node data with the left most node 
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data)
  }
  // ecommerce app, video strimming app, chat app, social media app, booking app
  findMinHeight = (node = this.root) => {
    //? min height is the distance from the root node to the first leaf node without two children
    if (node === null) return -1;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if (left < right){
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight = (node = this.root) => {
    //? min height is the distance from the root node to the first leaf node without two children
    if (node === null) return -1;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if (left > right){
      return left + 1;
    } else {
      return right + 1;
    }
  }

  inOrder = () => {
    if (this.root === null) return null;
    let result = new Array();
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      result.push(node.data);
      node.right && traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  }
  preOrder = () => {
    if (this.root === null) return null;
    let result = new Array();
    function traverseInOrder(node) {
      result.push(node.data);
      node.left && traverseInOrder(node.left);
      node.right && traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  }
  postOrder = () => {
    if (this.root === null) return null;
    let result = new Array();
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      node.right && traverseInOrder(node.right);
      result.push(node.data);
    }
    traverseInOrder(this.root);
    return result;
  }

  levelOrder = () => {
    if (this.root === null) return result;
    const result = [];
    const Q = [];
    Q.push(this.root);
    while (Q.length > 0) {
      let node = Q.shift();
      result.push(node.data);
      if (node.left !== null) Q.push(node.left);
      if (node.right !== null) Q.push(node.right);
    }
    return result;
  }

}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(2);
bst.add(7);
bst.add(6);
bst.add(8);
bst.add(9);
bst.add(13);
bst.add(12);
bst.add(11);
bst.remove(5);
console.log(bst.findMin());
console.log(bst.isPresent(4));
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.root);

