class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    var current = this.get(index);
    if (current) {
      current.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      return !!this.push(val);
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    var newNode = new Node(value);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) {
      return !!this.pop();
    }

    if (index === 0) {
      return !!this.shift();
    }

    var prev = this.get(index - 1);
    var removed = prev.next;
    prev.next = removed.next;

    this.length--;
    return removed;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var next;

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }
    return this;
  }
}

var list = new singlyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.push("D");

list.pop();
list.pop();

list.unshift("E");
list.unshift("F");

list.unshift("G");

list.get(2);
list.insert(2, "new");

list.remove(2);
list.remove(0);

console.log(list);
