// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
// Gerlib Andriy Solution
function stringToArray(string){
  return string.split(" ");
}
// Liashenko Sofiia Solution
function stringToArray(string) {
  let words = string.split(" ");
  return words;
}
//Serhii Popovnaik version
function stringToArray(string) {
  return string.split(" ");
}
//Serhii Karpus version
const stringToArray = (str) => str.split(/\s+/);

//Yuriy Levenets
function stringToArray(string){
  return string.split(" ");
}
//Semen Hoinets Solution
function stringToArray(string) {
  return string.split(" ");
}

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// Gerlib Andriy Solution
function DNAtoRNA(dna) {
 return dna.replace(/T/g, 'U')
}
// Liashenko Sofiia Solution
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
//Serhii Popovnaik version
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}
//Serhii Karpus version
function DNAtoRNA(dna) {
  const result = [];
  for (let i = 0; i < dna.length; i++) {
    result.push(dna[i] === "T" ? "U" : dna[i]);
  }
  return result.join("");
}
//Yuriy Levenets
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
//Semen Hoinets Solution
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// Gerlib Andriy Solution
var min = function(list){
  let minimum = list[0]; 
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minimum) {
      minimum = list[i];
    }
  }
  return minimum;
}

var max = function(list){
  let maximum = list[0]; 
  for (let i = 1; i < list.length; i++) {
    if (list[i] > maximum) {
      maximum = list[i];
    }
  }
  return maximum;
}
// Liashenko Sofiia Solution
var min = function (list) {
  return Math.min(...list);
};
var max = function (list) {
  return Math.max(...list);
};
//Serhii Popovnaik version
var min = function (list) {
  let min = list[0];
  for (const el of list) {
    if (el < min) {
      min = el;
    }
  }
  return min;
};

var max = function (list) {
  let max = list[0];
  for (const el of list) {
    if (el > max) {
      max = el;
    }
  }
  return max;
};

//Serhii Karpus version
function min(list) {
  let minNumber = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minNumber) {
      minNumber = list[i];
    }
  }
  return minNumber;
}

function max(list) {
  let maxNumber = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > maxNumber) {
      maxNumber = list[i];
    }
  }
  return maxNumber;
}

//Yuriy Levenets
var min = function(list) {
    let minValue = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] < minValue) {
            minValue = list[i];
        }
    }

    return minValue;
}

var max = function(list) {
    let maxValue = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] > maxValue) {
            maxValue = list[i];
        }
    }

    return maxValue;
}
// Semen Hoinets Solution
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}

// Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// Liashenko Sofiia Solution
function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  if (toReturn === "value") {
    return minValue;
  } else if (toReturn === "index") {
    return arr.indexOf(minValue);
  }
}
//Serhii Popovnaik version
function min(arr, toReturn) {
  let minValue = arr[0];
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
  }
  if (toReturn === "value") {
    return minValue;
  } else if (toReturn === "index") {
    return minIndex;
  } else {
    return "Error, please enter index or value";
  }
}
//Serhii Karpus version
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

//Yuriy Levenets
function min(arr, toReturn) {
    let minValue = arr[0];
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
        }
    }

    return toReturn === "value" ? minValue : minIndex;
}
//Semen Hoinets Solution
function min(arr, toReturn) { 
  switch (toReturn) {
    case 'value':
      return Math.min(...arr);
    case 'index':
      return arr.indexOf(Math.min(...arr));
  }
}

//You Can't Code Under Pressure #1
//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
//Serhii Karpus version
const doubleInteger = (i) => i * 2;

//Twice as old
//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
//Serhii Karpus version
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//Get Nth Even Number
//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
//Serhii Karpus version
const nthEven = (n) => (n > 0 ? 2 * (n - 1) : null);

//What's the real floor?
//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
//Serhii Karpus version
const getRealFloor = (n) => (n <= 0 ? n : n <= 13 ? n - 1 : n - 2);

//Beginner Series #2 Clock
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
//Serhii Karpus version
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

//Is n divisible by x and y?
//https://www.codewars.com/kata/5545f109004975ea66000086/solutions/javascript
//Serhii Karpus version
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
