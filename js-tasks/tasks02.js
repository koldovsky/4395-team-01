// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = (str) => str.split(/\s+/);

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let minValue = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
  }

  return {
    value: minValue,
    index: minIndex,
  }[toReturn];
}

//You Can't Code Under Pressure #1
//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (i) => i * 2;

//Twice as old
//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//Get Nth Even Number
//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => (n > 0 ? 2 * (n - 1) : null);

//What's the real floor?
//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = (n) => (n <= 0 ? n : n <= 13 ? n - 1 : n - 2);

//Beginner Series #2 Clock
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

//Is n divisible by x and y?
//https://www.codewars.com/kata/5545f109004975ea66000086/solutions/javascript
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
