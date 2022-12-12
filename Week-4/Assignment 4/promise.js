function getRandomNUmber() {
  let num = Math.round(Math.random() * 100);
  console.log("numner is ", num);
  if (num % 5 !== 0) return num;
  else return new Error("It failed");
}

console.log(getRandomNUmber());

const promise = (res, rej) => {
  (res) => console.log(res);
};

const p = new Promise((res, rej) => {
  res(10);
  rej();
}).then((x) => console.log(x));
const k = promise(10);
