function createIncrement() {
  letcount = 0;
  function increment();
  {
    count++;
  }
  let message = `Count is ${count}`;
  function log();
  {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

//Count is 0
// because message variable will be set at 1st time, no matter how many times we call increment
// count will be '0' onplay, but if we pass that message in the increment function count will get change 
