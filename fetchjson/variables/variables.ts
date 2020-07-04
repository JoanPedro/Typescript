let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Build it on object
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'yellow', 'blue'];
let myNumber: number[] = [1, 3, 5, 7];
let myBooleans: boolean[] = [true, false, !0, !1];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
}

// Function
// const logNumber = i => {
//   console.log(i)
// }
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// When to use annotations
// 1) Function that return the 'any' type.
const json = '{"x": 20, "y": 55}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line, and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let i: number = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i: number = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}