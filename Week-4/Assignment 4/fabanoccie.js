//testing on Iterator
// const test = (n) => ({
//   [Symbol.iterator]: function () {
//     console.log("The value", n);
//     console.log("True");
//     return {
//       next: function () {
//         console.log("True");
//         return { done: true };
//       },
//     };
//   },
// });

//console.log(...test(10));
const fib = (n) => ({
  [Symbol.iterator]: () => {
    console.log("In Iterator method");
    let i = 1;
    let old = 0;
    let current = 0;
    return {
      next: () => {
        if (i++ <= n) {
          console.log(
            ` Before ---- Old value ${old} and curreent value ${current}`
          );
          [old, current] = [current, old + current || 1];
          console.log(` Old value ${old} and curreent value ${current}`);
          return { value: old, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});

console.log(...fib(20));
