class ArrayOfNumbers {
  constructor(public collection: number) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<Type> {
  constructor(public collection: Type[]) {}

  get(index: number): Type {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);
new ArrayOfAnything<number>([1, 2, 6]);
const arr = new ArrayOfAnything(['a', 'b', 'c']);

// Generics with functions:

function printStrings(arr: string[]): void {
  printAnything(arr);
}

const printStringsArrow = (arr: string[]): void => {
  printAnythingArrow(arr);
}

function printNumbers(arr: number[]): void {
  printAnything(arr);
}

const printNumbersArrow = (arr: number[]): void => {
  printAnythingArrow(arr);
}

function printAnything<Type>(arr: Type[]): void {
  arr.forEach(elem => console.log(elem));
}

const printAnythingArrow = <Type>(arr: Type[]): void => {
  arr.forEach(elem => console.log(elem));
}

printAnything<string>(['a', 'b']);
printStrings(['c', 'd']);

printAnything<number>([4, 5, 6]);
printNumbers([1, 2, 3]);

// Arrow Function

printAnythingArrow<string>(['a', 'b']);
printStringsArrow(['c', 'd']);

printAnythingArrow<number>([4, 5, 6]);
printNumbersArrow([1, 2, 3]);