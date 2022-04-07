class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var popped = this.tail;
    if (this.length === 1) {
      this.head = null;

      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }

    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    var shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;

      shifted.next = null;
    }
    this.length--;
    return this;
  }

  unshift(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var current = this.head;
      current.prev = newNode;
      newNode.next = current;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, value) {
    var found = this.get(index);
    if (found != null) {
      found.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    var newNode = new Node(value);
    var prevNode = this.get(index - 1);
    var afterNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;

    newNode.next = afterNode;
    newNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    var removed = this.get(index);
    var beforeNode = removed.prev;
    var afterNode = removed.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removed.prev = null;
    removed.next = null;

    this.length--;

    return removed;
  }
}

var dbl = new DoublyLinkedList();
dbl.push("A");
dbl.push("B");
dbl.push("C");
dbl.push("D");

dbl.pop();

dbl.shift();
dbl.unshift("D");
dbl.unshift("E");

console.log(dbl);
