// JavaScript educational examples demonstrating core language features.

// 1. Variables and basic operations
// Use let for reassignable variables and const for values that should not change.
const pi = 3.14159;
let radius = 4;
const circleArea = pi * radius * radius; // area = πr^2
console.log(`Area of the circle: ${circleArea}`);

// 2. Functions
// Functions can be declared with the function keyword or as arrow functions.
function greet(name) {
  return `Hello, ${name}!`;
}

const greetArrow = (name) => `Hi there, ${name}!`;

console.log(greet("Ada"));
console.log(greetArrow("Grace"));

// 3. Arrays and iteration
// Arrays can hold mixed types; use for...of for easy iteration.
const mixedArray = [1, "two", { three: 3 }];
for (const item of mixedArray) {
  console.log(`Array item: ${JSON.stringify(item)}`);
}

// 4. Objects and destructuring
// Destructuring pulls properties into variables with matching names.
const user = { id: 1, username: "coder", active: true };
const { username, active } = user;
console.log(`User ${username} active? ${active}`);

// 5. Default parameters and template literals
// Default parameters prevent undefined when values are omitted.
function formatScore(name = "Anonymous", score = 0) {
  return `${name} scored ${score} points.`;
}
console.log(formatScore("Avery", 12));
console.log(formatScore());

// 6. Rest parameters and spread syntax
// Rest syntax packs arguments into an array; spread unpacks arrays or objects.
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

const baseScores = [5, 10, 15];
console.log(`Total score: ${sumAll(...baseScores, 20)}`);

// 7. Higher-order functions
// Array.prototype.map transforms each element using a callback.
const numbers = [1, 2, 3, 4];
const squares = numbers.map((n) => n * n);
console.log(`Squares: ${squares.join(", ")}`);

// 8. Classes
// Classes encapsulate data and behavior; use constructor to set up instances.
class Counter {
  constructor(start = 0) {
    this.count = start;
  }

  increment() {
    this.count += 1;
    return this.count;
  }
}

const counter = new Counter();
console.log(`Counter after increment: ${counter.increment()}`);

// 9. Promises
// Promises represent asynchronous values and can be chained with then/catch.
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

wait(100)
  .then(() => console.log("Promise resolved after 100ms"))
  .catch((error) => console.error("Promise rejected", error));

// 10. Async/await
// Async functions allow writing asynchronous code that reads like synchronous code.
async function fetchUser(id) {
  // In a real app you would await fetch(...) here; we simulate with wait.
  await wait(50);
  return { id, name: "Simulated User" };
}

(async () => {
  try {
    const result = await fetchUser(42);
    console.log(`Fetched user: ${result.name}`);
  } catch (error) {
    console.error("Failed to fetch user", error);
  }
})();

// 11. Optional chaining and nullish coalescing
// Optional chaining (?.) safely accesses deep properties; ?? provides defaults for null/undefined.
const config = { theme: { accent: "blue" } };
const accentColor = config.theme?.accent ?? "purple";
console.log(`Accent color: ${accentColor}`);

// 12. Module-style export (CommonJS)
// This allows the examples to be imported elsewhere if desired.
module.exports = {
  greet,
  greetArrow,
  sumAll,
  Counter,
  fetchUser,
};
