// Print the left view of a binary tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class LeftNodes {
  constructor() {
    this.maxLevel = 0;
  }

  getLeftItems(root, level, result) {
    if (root === null) return;

    if (this.maxLevel < level) {
      result.push(root.data);
      this.maxLevel = level;
    }

    this.getLeftItems(root.left, level + 1, result);
    this.getLeftItems(root.right, level + 1, result);
  }
}

const main = () => {
  const leftView = [];

  const root = new Node(1);
  root.left = new Node(2);
  root.left = new Node(3);

  new LeftNodes().getLeftItems(root, 1, result);

  console.log(result);
};

main();
