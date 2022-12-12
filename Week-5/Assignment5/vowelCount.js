function VowelCheck(char) {
  const stre = "aeiou";
  return stre.includes(char);
}

function countVowelsInString(str) {
  var countMap = new Map();
  for (let ch of str) {
    var chLow = ch.toLowerCase();
    if (VowelCheck(chLow)) {
      if (countMap.has(chLow)) {
        countMap.set(chLow, countMap.get(chLow) + 1);
      } else {
        countMap.set(chLow, 1);
      }
    }
  }
  console.log(countMap);
}
countVowelsInString("Tring");
