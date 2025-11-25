import {goals, makeNegative, move, greet, litres, lovefunc} from '../js-tasks/tasks-01.js';

console.log("Messi goals function -> ", goals(43, 10, 5)); // 58
console.log("Return Negative -> ", makeNegative(5)); // -5
console.log("Terminal game move function -> ", move(3, 6)); // 15
console.log("Personalized Message -> ", greet("Daniel", "Daniel")); // "Hello boss"
console.log("Keep Hydrated -> ", litres(3)); // 1
console.log("Opposites Attract -> ", lovefunc(1,4)); // true