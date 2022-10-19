"use strict";

// WEEK 3 JavasScript:JS:Exercise 3.1:
const caches = new Map();
function memorize(fn) {
  return function (...str) {
    const key = `${[...str]}`;
    console.log("The passed value " + key);
    if (caches.has(key)) {
      return caches.get(key);
    }
    caches.set(key, fn(...str));
    return caches.get(key);
  };
}

function add(...number) {
  return number.reduce((sum, value) => sum + value, 0);
}

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const memorizeAdd = memorize(add);
time(() => memorizeAdd(10, 20));
time(() => memorizeAdd(10, 20));
time(() => memorizeAdd(30, 80));
time(() =>
  memorizeAdd(213903129, 1984712347, 34297483, 2389478927489, 874891724)
);
time(() => memorizeAdd(10, 20));
time(() => memorizeAdd(30, 80));
time(() => memorizeAdd(10, 20));
time(() =>
  memorizeAdd(213903129, 1984712347, 34297483, 2389478927489, 874891724)
);
