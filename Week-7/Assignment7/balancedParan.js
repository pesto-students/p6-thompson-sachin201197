import { stack } from "./stack_template.js";

const parnthesisChecker = function (s) {
  var array = [];
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") array.push(")");
    else if (s[i] === "[") array.push("]");
    else if (s[i] === "{") array.push("}");
    else if (s.length === 0 || array[array.length - 1] !== s[i]) return false;
    else array.pop();
  }
  return array.length === 0;
};

console.log(parnthesisChecker("(]){[()]}"));

// const st = new stack();
// var parArray = str.split("");
// console.log(parArray);
// for (var i = 0; i < parArray.length; i++) {
//   if (parArray[i] == "(") st.push(")");
//   else if (parArray[i] == "{") st.push("}");
//   else if (parArray[i] == "[") st.push("]");
//   else if (st.pop() === parArray[i]) {
//     console.log(st.pop() !== parArray[i]);
//     return false;
//   }
// }
// return st.lengthOfStack() === 0;
