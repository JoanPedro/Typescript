import { NumbersCollections } from './NumberCollection';
import { Sorted } from './Sorter';

const numbersCollection = new NumbersCollections([-1, 7, 3, -25, 10, 9])
const array = new Sorted(numbersCollection)
array.sort()
console.log(numbersCollection.data)