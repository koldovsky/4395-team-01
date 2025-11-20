// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
// Liashenko Sofiia Solution
function stringToArray(string){
  let words = string.split(" ");
  return words;
}
//Serhii Popovnaik version
function stringToArray(string) {
  return string.split(" ");
}

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// Liashenko Sofiia Solution
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
//Serhii Popovnaik version
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// Liashenko Sofiia Solution
var min = function(list){
    return Math.min(...list);
}
var max = function(list){
    return Math.max(...list);
}
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


