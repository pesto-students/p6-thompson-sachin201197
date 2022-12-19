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

//TC - O(n)
//SC - O(n) - it will grow with the size of an array
console.log(parnthesisChecker("(]){[()]}"));
