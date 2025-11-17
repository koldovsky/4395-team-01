console.log(goals(43, 10, 5)); // 58
console.log(makeNegative(5)); // -5
console.log(move(3, 6)); // 15
console.log(greet("Daniel", "Daniel")); // "Hello boss"
console.log(litres(3)); // 1
console.log(lovefunc(1,4)); // true

// Grasshopper - Messi goals function
// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return num <= 0 ? num : -num
}

// Grasshopper - Terminal game move function
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move (position, roll) {
  return position + (roll * 2)
}

// Grasshopper - Personalized Message
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet (name, owner) {
  return name === owner ? "Hello boss" : "Hello guest"
}
// Keep Hydrated 
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  let totalLiters = time * 0.5;
  return Math.floor(totalLiters);
}
// Opposites Attract https:
// www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2){
  return flower1 % 2 !==  flower2 % 2 ? true : false;
}