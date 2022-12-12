const checkDup = (arr) => new Set(arr).size != arr.length;

console.log(checkDup([1, 2, 3, 3, 4]));
