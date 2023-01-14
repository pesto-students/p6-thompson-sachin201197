class stack {
  constructor() {
    this.st = [];
  }
  push(value) {
    this.st.push(value);
  }

  pop() {
    this.st.pop();
  }

  peek() {
    return this.st[this.st.length - 1];
  }
  print() {
    console.log(this.st);
  }

  search(elementValue) {
    return this.st.indexOf(elementValue) !== -1;
  }

  lengthOfStack() {
    return this.st.length;
  }
}

// const str = new stack();
// str.push(10);
// str.push(40);
// str.push(30);
// str.push(80);
// str.push(00);
// str.push(70);
// // str.pop();
// str.print();
// console.log(str.search(100));
// console.log(str.peek());

export { stack };
