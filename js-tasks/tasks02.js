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
