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

class ArrayOfAnyThing<Type> {
  constructor(public collection: Type) {}

  get(index: number): Type {
    return this.collection[index];
  }
}