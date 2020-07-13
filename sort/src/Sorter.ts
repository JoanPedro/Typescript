interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorted {
  constructor(public collection: Sortable) { }

  sort(): void {
    const { length } = this.collection // .length intríseco devido declaração number.

    for (let i: number = 0; i < length; i++) {
      for (let j: number = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }
}
