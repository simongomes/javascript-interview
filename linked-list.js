// First create the Node

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Then create the LinkedList

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  add(value) {
    let tempNode = this.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new Node(value);
  }

  find(value) {
    let tempNode = this.head;

    while (tempNode.value !== value) {
      tempNode = tempNode.next;
    }

    return tempNode;
  }

  insert(where, value) {
    const tempNode = this.find(where);
    const newNode = new Node(value, tempNode.next);
    tempNode.next = newNode;
  }

  findPreviousNode(value) {
    let tempNode = this.head;
    while (tempNode.next.value !== value && tempNode.next.value !== null) {
      tempNode = tempNode.next;
    }
    return tempNode;
  }

  remove(value) {
    const previousNode = this.findPreviousNode(value);
    previousNode.next = previousNode.next.next;
  }

  reverse() {
    let prev = null;
    let next = null;
    let tempNode = this.head;
    while (tempNode !== null) {
      next = tempNode.next;
      tempNode.next = prev;
      prev = tempNode;
      tempNode = next;
    }
    return prev;
  }

  print() {
    let tempNode = this.head;
    while (tempNode !== null) {
      console.log(tempNode.value);
      tempNode = tempNode.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.insert(1, 4);

linkedList.remove(4);

linkedList.reverse();

linkedList.print();
