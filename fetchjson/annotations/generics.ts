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

new ArrayOfAnything<string>(['a', 'b', 'c'])
new ArrayOfAnything<number>([1, 2, 6])
const arr = new ArrayOfAnything(['a', 'b', 'c'])