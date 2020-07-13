import { LinkedList } from './Collections/LinkedList';
import { CharactersColletion } from './Collections/CharacteresCollections';
import { NumbersCollections } from './Collections/NumberCollection';
import { Sorted } from './Helper/Sorter';

const numbersCollection = new NumbersCollections([-1, 7, 3, -15, 10, 9])
const charactersCollection = new CharactersColletion('Xaayb')
const linkedList = new LinkedList();

const sortedNumberArray = new Sorted(numbersCollection)
const sortedCharacterString = new Sorted(charactersCollection)
const sortedLinkedList = new Sorted(linkedList)

linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

sortedNumberArray.sort()
sortedCharacterString.sort()
sortedLinkedList.sort()

console.log(numbersCollection.data)
console.log(charactersCollection.data)
linkedList.print()