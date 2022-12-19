class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

class doublelyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  appened(element) {
    var node = new Node(element);
    var curr = this.head;
    if (this.head == null) {
      this.head = node;
      this.tail = this.head;
      return;
    }
    this.tail.next = node;
    node.prev = this.head;
    this.tail = node;
    this.size++;
  }
  prepend(element) {
    var node = new Node(element);
    var curr = this.head;
    if (this.head == null) {
      this.head = node;
    } else {
      curr.prev = node;
      node.next = curr;
      this.head = node;
    }
    this.size++;
  }
  insert(index, value) {}
  print() {
    var arr = [];
    var curr = this.head;
    while (curr) {
      arr.push(curr.element);
      curr = curr.next;
    }
    console.log(arr);
  }
}

var db = new doublelyLinkedList();

db.appened(1);
db.appened(2);
db.appened(3);
db.prepend(78);
db.appened(4);
db.appened(5);
db.prepend(0);

db.print();
