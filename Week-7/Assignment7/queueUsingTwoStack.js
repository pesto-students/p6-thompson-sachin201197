import { stack } from "./stack_template.js";

class queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(x) {
    if (this.s1.length != 0) {
      this.s2.push(this.s1.pop());
    }

    if (this.s2.length != 0) {
      this.s1.push(this.s2.pop());
    }
    this.s1.push(x);
  }

  dequeue() {
    var val;
    if (this.s1.length != 0) {
      val = this.s1.shift();
    }
    return val;
  }
}

// TC - O(n);
// SC - O(n);

const q = new queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
