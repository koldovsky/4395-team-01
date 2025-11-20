// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
// Liashenko Sofiia Solution
function stringToArray(string){
  let words = string.split(" ");
  return words;
}
// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// Liashenko Sofiia Solution
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
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
