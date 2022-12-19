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

export { stack };
