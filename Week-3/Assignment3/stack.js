"use strict";

// function stack() {
//     return {
//   items = [];
//   return function pushVar(item) {
//     return this.items.push(item);
//   };
//     console.log(this.items);
//     function popVar() {
//       return this.items.pop();
//     }
//     //};
//     return pushVar, popVar;
// }
// const st = stack;
// const s = st.bind(stack);
// console.log(st.pushVar("ii"));

function createStack() {
  const items = [];
  console.log(items);
  function push(item) {
    items.push(item);
  }
  function pop() {
    console.log(items.pop());
  }
  return [push, pop];
}
const [push, pop, it] = createStack();
push(10);
push(90);
pop();
it;
