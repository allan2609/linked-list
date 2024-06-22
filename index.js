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
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }
  at(index) {
    if (index < 0) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (current !== null) {
      if (count === index) {
        return current;
      }
      current = current.nextNode;
      count++;
    }
    return null;
  }
  pop() {
    if (this.head === null) {
      return null;
    }
    if (this.head.nextNode === null) {
      this.head = null;
    }
    let current = this.head;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return count;
      }
      current = current.nextNode;
      count++;
    }
    return null;
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
  insertAt(value, index) {
    const newNode = new Node(value);
    let current = this.head;
    let count = 0;
    if (index < 0) {
      return null;
    }
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }
    while (current !== null && count < index -1) {
      current = current.nextNode;
      count++;
    }
    if (current === null) {
      return null;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }
  removeAt(index) {
    if (index < 0) {
      return null;
    }
    if (index === 0) {
      if (this.head === null) {
        return null;
      }
      this.head = this.head.nextNode;
    }
    let count = 0;
    let current = this.head;
    while (current !== null) {
      if (count === index - 1) {
        if (current.nextNode === null) {
          return null;
        }
        current.nextNode = current.nextNode.nextNode;
      }
      current = current.nextNode;
      count++;
    }
  }
}
