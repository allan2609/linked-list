class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }
  toString() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.nextNode;
    }
    console.log(result.join(" -> "));
  }
}

const list = new LinkedList;
