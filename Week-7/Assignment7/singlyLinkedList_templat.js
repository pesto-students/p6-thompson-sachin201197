class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //insertAt(element, location)
  insertAt(element, location) {
    var node = new Node(element);
    var i = 0;
    var curr = this.head;
    var prev;
    while (i < location) {
      i++;
      prev = curr;
      curr = curr.next;
    }
    prev.next = node;
    node.next = curr;
    this.size++;
  }
  // removeFrom(location)
  removeFrom(location) {
    var curr = this.head;
    var prev;
    var i = 0;
    while (i < location) {
      i++;
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
    this.size--;
    return curr.element;
  }
  // removeElement(element)
  removeElement(element) {
    var curr = this.head;
    var prev = null;
    if (!this.isEmpty()) {
      while (curr.next) {
        if (curr.element === element) {
          if (prev == null) {
            this.head = curr.next;
          } else {
            prev.next = curr.next;
            return curr.element;
          }
        }
        prev = curr;
        curr = curr.next;
      }
    }

    return -1;
  }
  // Helper Methods
  // isEmpty
  isEmpty() {
    return this.size == 0;
  }
  // size_Of_List
  size_Of_lsit() {
    return this.size;
  }
  // PrintList
  print() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + "--->";
      curr = curr.next;
    }
    console.log(str + "null");
  }

  printList(cnode) {
    var str = "";
    while (cnode != null) {
      str += cnode.element + "--->";
      cnode = cnode.next;
    }
    console.log(str + "null");
  }
}

export { linkedList };
