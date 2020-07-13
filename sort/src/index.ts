import { CharactersColletion } from './Collections/CharacteresCollections';
import { NumbersCollections } from './Collections/NumberCollection';
import { Sorted } from './Helper/Sorter';

const numbersCollection = new NumbersCollections([-1, 7, 3, -15, 10, 9])
const charactersCollection = new CharactersColletion('Xaayb')
const sortedNumberArray = new Sorted(numbersCollection)
const sortedCharacterString = new Sorted(charactersCollection)
sortedNumberArray.sort()
sortedCharacterString.sort()
console.log(numbersCollection.data)
console.log(charactersCollection.data)