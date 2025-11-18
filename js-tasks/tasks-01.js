//Messi goals function
//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
//Serhiy Karpus Version
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
//Semen Hoinets Version
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Return Negative
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
//Serhiy Karpus Version
function makeNegative(num) {
  return num <= 0 ? num : -num
}
//Semen Hoinets Version
function makeNegative(num) {
  return -Math.abs(num);
}

//Terminal game move function
//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
//Serhiy Karpus Version
function move (position, roll) {
  return position + (roll * 2)
}
//Semen Hoinets Version
function move (position, roll) {
  return position + roll * 2;
}

//Personalized Message
//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
//Serhiy Karpus Version
function greet (name, owner) {
  return name === owner ? "Hello boss" : "Hello guest"
}
//Semen Hoinets Version
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

//Keep Hydrated 
//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
//Serhiy Karpus Version
function litres(time) {
  let totalLiters = time * 0.5;
  return Math.floor(totalLiters);
}
//Semen Hoinets Version
function litres(time) {
  return Math.floor(time * 0.5);
}

//Opposites Attract 
//https:www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
//Serhiy Karpus Version
function lovefunc(flower1, flower2){
  return flower1 % 2 !==  flower2 % 2 ? true : false;
}
//Semen Hoinets Version
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

export {goals, makeNegative, move, greet, litres, lovefunc};
